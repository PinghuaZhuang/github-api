import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'
import merge from 'lodash/merge';
import { encode } from 'js-base64';
import stringify from 'json-stringify-safe';
import { READE_FILE, DELETE_FILE, CREATE_OR_UPDATE_FILE } from './api';

export function create(config?: AxiosRequestConfig) {
  return axios.create(merge({
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github+json',
    },
    timeout: 5 * 1_000,
    baseURL: 'https://api.github.com',
  }, config));
};

interface Config {
  token?: string;
  axios?: AxiosInstance;
  engine?: any;
  owner?: string;
  repo?: string;
}

interface Message {
  message: string;
  sha: string;
  branch: string;
  committer?: {
    name: string,
    email: string,
  };
  author?: {
    name: string,
    email: string,
  };
}

type Options = AxiosRequestConfig & Config;

function parseUrl(url: string, requset: Request, suffixPath: string) {
  return url.replace(/{owner}/g, requset.owner)
    .replace(/{repo}/g, requset.repo)
    .replace(/{path}/g, suffixPath)
}

function parsePath(path: string) {
  return path.replace(/(.*?)(\.json)?$/, '$1.json');
}

class Request {
  token!: string;
  owner!: string;
  repo!: string;
  axios!: AxiosInstance;
  ref = 'api';

  constructor(options?: Options) {
    this.config(options);
    this.axios = options?.axios ?? create();
  }

  config(options?: Options) {
    if (options?.token) {
      this.token = options.token;
    }
    this.owner = options?.owner ?? (GITHUB_OWNER as string);
    this.repo = options?.repo ?? (GITHUB_REPO as string);
  }

  read(path: string, params?: object, config?: Options) {
    const suffixPath = parsePath(path);
    return axios.get(
      parseUrl(
        `{owner}/{repo}/api/${suffixPath}`,
        this,
        suffixPath,
      ),
      merge({
        params: merge({
          ref: this.ref,
        }, params),
        headers: {
          'Content-Type': 'text/plain',
        },
        baseURL: 'https://raw.githubusercontent.com',
      }, config),
    ).then((response: AxiosResponse<any>) => response.data);
  }

  delete(path: string, message?: Message, params?: object) {
    const suffixPath = parsePath(path);
    const mergeParams = merge({
      ref: this.ref,
    }, params);
    return this.axios.get(
      parseUrl(
        READE_FILE,
        this,
        suffixPath,
      ),
      {
        params: mergeParams,
      },
    ).then((response: AxiosResponse<{
      sha: string;
    }>) => {
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
  update(path: string, params: Message & {
    content: string;
  }) {
    let is404 = false;
    const suffixPath = parsePath(path);
    const mergeParams = merge({
      ref: this.ref,
    }, params);
    return this.axios.get(
      parseUrl(
        READE_FILE,
        this,
        suffixPath
      ),
      {
        params: mergeParams,
      },
    ).catch(e => {
      const { response: { status } } = e;
      if (status === 404) {
        is404 = true;
        return Promise.resolve(e);
      }
      return Promise.reject(e);
    }).then((response: AxiosResponse<{
      sha: string;
    }>) => {
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
          },
          params,
          is404
            ? {}
            : {
              sha: response.data.sha,
            },
          {
            content: encode(stringify(params.content)),
          },
        ),
      )
    })
  }
}

export default Request;
