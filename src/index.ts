import createFly from './request';
import { Fly } from 'flyio';
import { READE_FILE } from './api';

interface Config {
  token?: string;
  owner: string;
  repo: string;
}

type Options = Pick<Fly, 'config'> & Config;

function parseUrl(url: string, requset: Request) {
  return url.replace(/{owner}/g, requset.owner)
    .replace(/{repo}/g, requset.repo)
}

class Request {
  token!: string;
  owner!: string;
  repo!: string;
  fly = createFly();
  ref = 'api';

  constructor(options?: Options) {
    this.config(options);
  }
  config(options?: Options) {
    this.token = options?.token ?? this.token;
    this.owner = options?.owner ?? (process.env.GITHUB_OWNER as string);
    this.repo = options?.repo ?? (process.env!.GITHUB_REPO as string);
  }

  read(path: string, accept?: string) {
    return this.fly.get(
      parseUrl(READE_FILE, this).replace(/{path}/g, path) + `?ref=${this.ref}`,
      accept
    );
  }
}

export { Request };

export default new Request();
