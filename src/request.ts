import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'
import merge from 'lodash/merge';
import { READE_FILE, DELETE_FILE } from './api';

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
  }
}

type Options = AxiosRequestConfig & Config;

function parseUrl(url: string, requset: Request) {
  return url.replace(/{owner}/g, requset.owner)
    .replace(/{repo}/g, requset.repo)
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
    return axios.get(
      parseUrl(
        `{owner}/{repo}/api/${path.replace(/(.*?)(\.json)?$/, '$1.json')}`,
        this
      ).replace(/{path}/g, path),
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
    const suffixPath = path.replace(/(.*?)(\.json)?$/, '$1.json');
    const mergeParams = merge({
      ref: this.ref,
    }, params);
    return this.axios.get(
      parseUrl(
        READE_FILE,
        this
      ).replace(/{path}/g, suffixPath),
      {
        params: mergeParams,
      },
    ).then((response: AxiosResponse<{
      sha: string;
    }>) => {
      return this.axios.delete(parseUrl(
        DELETE_FILE,
        this
      ).replace(/{path}/g, suffixPath), {
        data: merge({
          message: `delete(GIT-API): ${suffixPath}`,
          branch: this.ref,
          sha: response.data.sha,
          committer: { name: "GITHUB-API" },
        }, message),
      });
    })
  }
}

export default Request;
