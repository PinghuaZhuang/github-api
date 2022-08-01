import { Fly } from 'flyio';
interface Config {
    token?: string;
    owner: string;
    repo: string;
}
declare type Options = Pick<Fly, 'config'> & Config;
declare class Request {
    token: string;
    owner: string;
    repo: string;
    fly: any;
    ref: string;
    constructor(options?: Options);
    config(options?: Options): void;
    read(path: string, accept?: string): any;
}
export { Request };
declare const _default: Request;
export default _default;
