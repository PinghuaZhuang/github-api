import fs from 'fs';
import path from 'path';

export function getPkg(dir) {
  return JSON.parse(fs.readFileSync(path.resolve(dir, './package.json'), {
    encoding: 'utf8',
  }));
}

export function parseRepository(repo) {
  const regex = /(git(@github.com)?:(?<owner1>[\w-]+)\/(?<repo1>[\w-]+))|(https?:\/\/github.com\/(?<owner2>[\w-]+))\/(?<repo2>[\w-]+)/;
  const { groups = {} } = repo.match(regex) ?? {};
  return {
    owner: groups.owner1 ?? groups.owner2,
    repo: groups.repo1 ?? groups.repo2,
  };
}
