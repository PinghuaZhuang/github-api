import Fly from 'flyio/dist/npm/fly';

export default function createFly() {
  const fly = new Fly();

  fly.config.headers = {
    // 默认读取环境变量的 token
    Authorization: process.env.GITHUB_TOKEN,
    'Content-Type': 'application/json',
  }

  //设置超时
  fly.config.timeout = 5 * 1_000;

  //设置请求基地址
  fly.config.baseURL = "https://api.github.com";

  return fly;
};
