import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import tv4 from 'tv4';
import merge from 'lodash/merge';
import { encode } from 'js-base64';
import stringify from 'json-stringify-safe';
import globalConfig from './config';
import { Message, Content, Options } from './Request.type';
import { READE_FILEORDIR, DELETE_FILE, CREATE_OR_UPDATE_FILE } from './api';

const { isArray } = Array;

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

function getJsonSchemaPath(path: string) {
  if (/\.json$/.test(path)) {
    return path.replace(/\/[^\/]*?$/, '');
  }
  return path;
}

function getDefaultParams(requset: Request) {
  return {
    params: {
      ref: requset.ref,
    },
  };
}

function createError(msg: string | TemplateStringsArray, ...rest: string[]) {
  if (typeof msg !== 'string') {
    msg = rest.reduce((pre, cur, i) => {
      return pre + cur + msg[i + 1];
    }, msg.raw[0])
  }
  return new TypeError(msg);
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

  path(path: string) {
    return this.axios.get(
      parseUrl(
        READE_FILEORDIR,
        this,
        path,
      ),
      getDefaultParams(this),
    ).then((response: AxiosResponse<Content | Content[]>) => {
      return Promise.resolve(response.data);
    });
  }

  // 判断是否存在改文件
  exists(path: string): Promise<{ is404: boolean, data: Content }> {
    return this.readFile(path).catch(e => {
      const { response: { status } } = e;
      if (status === 404) {
        return Promise.resolve({
          is404: true,
          data: e,
        });
      }
      return Promise.reject(e);
    }).then((response) => {
      if ('is404' in response) {
        return response;
      }
      if (isArray(response)) {
        return Promise.reject(createError`not file. path: ${path}`);
      }
      return { is404: false, data: response }
    })
  }

  // TODO:
  validate(data: Content) {

  }

  // 读取文件, base64编码
  readFile(path: string) {
    return this.path(path).then((response) => {
      if (isArray(response)) {
        return Promise.reject(createError`not file. path: ${path}`);
      }
      return response;
    })
  }

  // 更新或者创建文件
  updateOrCreateFile(path: string, message: Message & {
    content: string | object;
  }) {
    const suffixPath = replenishPath(path);

    return this.axios.put(
      parseUrl(
        CREATE_OR_UPDATE_FILE,
        this,
        suffixPath,
      ),
      merge(
        {
          branch: this.ref,
          committer: {
            name: 'robot',
            email: 'robot@github.com'
          },
        },
        message,
        {
          content: encode(stringify(message.content)),
        },
      ),
    )
  }

  // 获取目录下的文件列表
  readDir(path: string) {
    return this.path(path).then((response) => {
      if (isArray(response)) {
        return response;
      }
      return Promise.reject(createError`not dir. path: ${path}`);
    });
  }

  // 获取目录下的文件列表名
  readDirNames(path: string) {
    return this.readDir(path).then((response) => response.map(o => o.name));
  }

  getJsonSchema(dir: string) {
    return this.read(getJsonSchemaPath(dir)).then((jsonSchema) => {
      if (typeof jsonSchema !== 'object') {
        return Promise.reject(createError`JSON Schema type error. path: ${dir}`);
      }
      return jsonSchema;
    })
  }

  // TODO:
  addJsonSchema(dir: string, jsonSchema: object) {
    return
  }

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
    return this.readFile(path)
      .then((response) => {
        return this.axios.delete(parseUrl(
          DELETE_FILE,
          this,
          suffixPath
        ), {
          data: merge({
            message: `delete(API): ${suffixPath}`,
            branch: this.ref,
            sha: response.sha,
          }, message),
        });
      })
  }

  // 创建或者更新
  // TODO:
  update(path: string, message: Message & {
    content: string | object;
  }) {
    let is404 = false;
    const suffixPath = replenishPath(path);

    return this.path(path).catch(e => {
      const { response: { status } } = e;
      if (status === 404) {
        is404 = true;
        return Promise.resolve(e);
      }
      return Promise.reject(e);
    }).then((response: Content | Content[]) => {
      if (isArray(response)) {
        return Promise.reject(createError`not file. path: ${path}`);
      }
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
              sha: response.sha,
            },
          {
            content: encode(stringify(message.content)),
          },
        ),
      )
    })
  }

  // 获取list => id为名创建
  create(dir: string, message: Message & {
    content: string | object;
  }) {
    return this.exists(dir).then((response) => {
      if (response.is404) {
        return Promise.resolve(response.data)
      }
      return Promise.reject(createError`already have file. path: ${dir}`)
    }).then(() => {
      return this.getJsonSchema(dir).then((jsonSchema: object) => {
        // 校验数据
        // 暂不支持 $ref
        const { content } = message;
        const tv4Instance = tv4.freshApi();
        const result = tv4Instance.validate(content, jsonSchema);
        if (result === true) {
          // 创建文件
          return this.updateOrCreateFile(dir, merge({
            message: `create(API): ${replenishPath(dir)}`,
          }, message));
        }
        return Promise.reject(tv4Instance.error);
      });
    });
  }
}

export default Request;
