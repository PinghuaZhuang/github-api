import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import { Message, Content, Options } from './Request.type';
import merge from 'lodash/merge';
import globalConfig from './config';
import { encode } from 'js-base64';
import stringify from 'json-stringify-safe';
import { READE_FILEORDIR, DELETE_FILE, CREATE_OR_UPDATE_FILE } from './api';

function create(config?: AxiosRequestConfig, token?: string) {
  const instance = axios.create(merge({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `token ${token ?? globalConfig.token}`,
      Accept: 'application/vnd.github+json',
    },
    timeout: 5 * 1_000,
    baseURL: 'https://api.github.com',
  }, config));

  return instance;
};

function parseUrl(url: string, requset: Request, suffixPath?: string) {
  return url
    .replace(/{owner}/g, requset.owner)
    .replace(/{repo}/g, requset.repo)
    .replace(/{path}/g, suffixPath ?? '')
}

function replenishPath(path: string) {
  return path.replace(/(.*?)(\.json)?$/, '$1.json');
}

function getDefaultParams(requset: Request) {
  return {
    params: {
      ref: requset.ref,
    },
  };
}

class Request {
  token?: string;
  owner!: string;
  repo!: string;
  axios!: AxiosInstance;
  ref = 'api';

  constructor(options?: Options) {
    this.config(options);
  }

  config(options?: Options) {
    if (options?.token) {
      this.token = options.token;
    }
    this.owner = options?.owner ?? globalConfig.owner;
    this.repo = options?.repo ?? globalConfig.repo;
    this.axios = options?.axios ?? create(undefined, this.token);
  }

  // 获取目录下的文件列表
  readDir(path: string) {
    return this.axios.get(
      parseUrl(
        READE_FILEORDIR,
        this,
        path,
      ),
      getDefaultParams(this),
    ).then((response: AxiosResponse<Content | Content[]>) => {
      const { data } = response;
      if (Array.isArray(data)) {
        return data;
      }
      return Promise.resolve([data]);
    });
  }

  // 获取目录下的文件列表名
  readDirNames() { }

  read(path: string) {
    const suffixPath = replenishPath(path);
    return axios.get(
      parseUrl(
        `{owner}/{repo}/api/{path}`,
        this,
        suffixPath,
      ),
      {
        params: {
          ref: this.ref,
        },
        headers: {
          'Content-Type': 'text/plain',
        },
        baseURL: 'https://raw.githubusercontent.com',
      },
    ).then((response: AxiosResponse<any>) => response.data);
  }

  delete(path: string, message?: Message) {
    const suffixPath = replenishPath(path);
    return this.axios
      .get(
        parseUrl(
          READE_FILEORDIR,
          this,
          suffixPath,
        ),
        getDefaultParams(this),
      )
      .then((response: AxiosResponse<Content>) => {
        return this.axios.delete(parseUrl(
          DELETE_FILE,
          this,
          suffixPath
        ), {
          data: merge({
            message: `delete(API): ${suffixPath}`,
            branch: this.ref,
            sha: response.data.sha,
          }, message),
        });
      })
  }

  // 创建或者更新
  update(path: string, message: Message & {
    content: string | object;
  }) {
    let is404 = false;
    const suffixPath = replenishPath(path);

    return this.axios.get(
      parseUrl(
        READE_FILEORDIR,
        this,
        suffixPath
      ),
      getDefaultParams(this),
    ).catch(e => {
      const { response: { status } } = e;
      if (status === 404) {
        is404 = true;
        return Promise.resolve(e);
      }
      return Promise.reject(e);
    }).then((response: AxiosResponse<Content>) => {
      return this.axios.put(
        parseUrl(
          CREATE_OR_UPDATE_FILE,
          this,
          suffixPath,
        ),
        merge(
          {
            message: is404
              ? `create(API): ${suffixPath}`
              : `update(API): ${suffixPath}`,
            branch: this.ref,
            committer: {
              name: 'robot',
              email: 'robot@github.com'
            },
          },
          message,
          is404
            ? {}
            : {
              sha: response.data.sha,
            },
          {
            content: encode(stringify(message.content)),
          },
        ),
      )
    })
  }

  // 获取list => id为名创建
  create() { }
}

export default Request;
