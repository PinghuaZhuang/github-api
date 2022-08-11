import 'zx/globals';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { getPkg, parseRepository as parseRepo } from './utils.mjs';

async function parseRepository(pkg) {
  let temp;
  if (pkg.repository) {
    const { repository } = pkg;
    if (typeof repository === 'string') {
      temp = parseRepo(repository);
    } else if (repository.type === 'git') {
      temp = parseRepo(repository.url);
    } else {
      $`echo not find repo message.`;
    }
  } else {
    $`echo not find repository message.`;
  }

  const { owner, repo } = temp;

  if (owner == null) {
    $`echo not find owner message.`;
  }
  if (repo == null) {
    $`echo not find repo message.`;
  }
  return temp;
}

export default async function initialize(str, options) {
  // 获取路径
  const cwd = process.cwd();
  const repoDir = path.resolve(url.fileURLToPath(import.meta.url), '../../');
  $`echo ${repoDir}`
  if (cwd === repoDir) {
    return $`echo Is self repo.`;
  }
  const pkg = getPkg(cwd);
  const { owner, repo } = await parseRepository(pkg);

  $`echo ${owner} ${repo}
  const config = {
    token: ${JSON.stringify(process.env.GITHUB_TOKEN)},
    owner: ${JSON.stringify(owner ?? process.env.GITHUB_OWNER)},
    repo: ${JSON.stringify(repo ?? process.env.GITHUB_REPO)},
  }`

  // 设置到 config js中
  fs.writeFileSync(
    path.resolve(repoDir, `./src/config.ts`),
`const config = {
  token: ${JSON.stringify(process.env.GITHUB_TOKEN)},
  owner: ${JSON.stringify(owner ?? process.env.GITHUB_OWNER)},
  repo: ${JSON.stringify(repo ?? process.env.GITHUB_REPO)},
};

export default config;`,
    {
      encoding: 'utf8',
    },
  );
}
