const fs = require('fs');
const path = require('path');

// 获取 token owner repo
console.log('process.cwd', process.cwd());
console.log('process.npm_package_name', process.env.npm_package_name);
console.log('process.env.GITHUB_TOKEN', process.env.GITHUB_TOKEN)
console.log('process.env.GITHUB_OWNER', process.env.GITHUB_OWNER)
console.log('process.env.GITHUB_REPO', process.env.GITHUB_REPO)

const content = `
  ${process.cwd()}
  ${process.env.npm_package_name}
  ${process.env.GITHUB_TOKEN}
  ${process.env.GITHUB_OWNER}
  ${process.env.GITHUB_REPO}
`

fs.writeFileSync(path.resolve(__dirname, './test.js'), content, {
  encoding: 'utf8',
});
