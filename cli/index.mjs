#!/usr/bin/env node
import 'zx/globals';
import { Command } from 'commander';
import create from './create.mjs';
import initialize from './initialize.mjs';

const program = new Command();

program
  .name('github-api')
  .description('获取项目信息.')
  .version('1.0.0');

program.command('create')
  .description('创建空白 api 分支.')
  .action(create);

program.command('init')
  .description('获取项目 token, owner repo.')
  .action(initialize);

program.parse();
