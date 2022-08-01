import createFly from './request';
import { READE_FILE } from './api';
function parseUrl(url, requset) {
    return url.replace(/{owner}/g, requset.owner)
        .replace(/{repo}/g, requset.repo);
}
class Request {
    token;
    owner;
    repo;
    fly = createFly();
    ref = 'api';
    constructor(options) {
        this.config(options);
    }
    config(options) {
        this.token = options?.token ?? this.token;
        this.owner = options?.owner ?? process.env.GITHUB_OWNER;
        this.repo = options?.repo ?? process.env.GITHUB_REPO;
    }
    read(path, accept) {
        return this.fly.get(parseUrl(READE_FILE, this).replace(/{path}/g, path) + `?ref=${this.ref}`, accept);
    }
}
export { Request };
export default new Request();
//# sourceMappingURL=index.js.map