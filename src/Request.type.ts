import { AxiosRequestConfig, AxiosInstance } from 'axios';

export interface Config {
  token?: string;
  axios?: AxiosInstance;
  engine?: any;
  owner?: string;
  repo?: string;
}

export interface Message {
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

export interface Content {
  name: string;
  path: string;
  sha: string;
  size: number;
  type: 'file' | 'dir';
  download_url: string;
  git_url: string;
  html_url: string;
  url: string;
  _links: {
    git: string;
    self: string;
    html: string;
  };
}

export type Options = AxiosRequestConfig & Config;
