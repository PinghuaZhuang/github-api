/**
 * 分支
 * @document https://docs.github.com/cn/rest/branches/branches
 */
/* ================================================= */
// 获取项目项的所有分析
export const ALL_BRANCHES = `/repos/{owner}/{repo}/branches`;
/**
 * 文件
 * @document https://docs.github.com/cn/rest/repos/contents#create-or-update-file-contents
 */
/* ================================================= */
// 读取文件
export const READE_FILE = `/repos/{owner}/{repo}/contents/{path}`;
// 创建 or 更新文件
export const CREATE_OR_UPDATE_FILE = `/repos/{owner}/{repo}/contents/{path}`;
// 删除文件
export const DELETE_FILE = `/repos/{owner}/{repo}/contents/{path}`;
//# sourceMappingURL=api.js.map