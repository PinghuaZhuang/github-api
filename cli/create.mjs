import 'zx/globals';

// TODO: 利用 github api 创建分支
export default async function create() {
  await $`git checkout --orphan api`;
  // await $`git push`;
}
