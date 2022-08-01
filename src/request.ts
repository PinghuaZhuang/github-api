import Fly from 'flyio/dist/npm/fly';
import fly, { Fly as FlyImp, FlyResponse } from 'flyio';
// import { READE_FILE } from './api';

export function createFly(engine?: any) {
  const fly = new Fly(engine);

  fly.config.headers = {
    // 默认读取环境变量的 token
    Authorization: GITHUB_TOKEN,
    'Content-Type': 'application/json',
  }

  //设置超时
  fly.config.timeout = 5 * 1_000;

  //设置请求基地址
  fly.config.baseURL = "https://api.github.com";

  return fly;
};

interface Config {
  token?: string;
  fly?: FlyImp;
  engine?: any;
  owner?: string;
  repo?: string;
}

type Options = FlyImp['config'] & Config;

function parseUrl(url: string, requset: Request) {
  return url.replace(/{owner}/g, requset.owner)
    .replace(/{repo}/g, requset.repo)
}

class Request {
  token!: string;
  owner!: string;
  repo!: string;
  fly!: FlyImp;
  ref = 'api';

  constructor(options?: Options) {
    this.config(options);
    this.fly = options?.fly ?? createFly(options?.engine);
  }

  config(options?: Options) {
    if (options?.token) {
      this.token = options.token;
    }
    this.owner = options?.owner ?? (GITHUB_OWNER as string);
    this.repo = options?.repo ?? (GITHUB_REPO as string);
  }

  read(path: string) {
    let error
    if ((error = Request.validPath(path))) {
      return Promise.reject(error);
    }
    return fly.get(
      parseUrl(`{owner}/{repo}/api/${path.replace(/(.*?)(\.json)?$/, '$1.json')}`, this).replace(/{path}/g, path),
      {
        ref: this.ref,
      },
      {
        headers: {
          'Content-Type': 'text/plain',
        },
        baseURL: 'https://raw.githubusercontent.com',
      },
    ).then((response: FlyResponse<string>) => JSON.parse(response.data));
  }

  static validPath(path: string) {
    if (/\.json$/.test(path)) {
      return new Error(`path must be json.`);
    }
  }
}

export default Request;
