#!/usr/bin/env node

const puppeteer = require('puppeteer');
const fs = require('fs');
const chalk = require('chalk');
const config = require('./config');

const rootPath = 'screenshots';

async function screenshot(platform, url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport(config.viewport[platform]);
  await page.setUserAgent(config.userAgent[platform]);

  console.log(chalk.green('===================================='));
  console.log(chalk.yellow(`in the load       ${url}`));

  await page.goto(url);

  const {
    host,
    width,
    height,
    href,
  } = await page.evaluate(() => {
    return {
      host: window.location.host,
      title: document.title,
      width: document.body.clientWidth,
      height: document.body.clientHeight,
      href: window.location.href,
    };
  });

  // if (host && !fs.existsSync(`${rootPath}/${host}`)) {
  //   fs.mkdirSync(`${rootPath}/${host}`);
  // }

  console.log(chalk.yellow(`in the screenshot ${url}`));

  await page.setViewport({
    width,
    height,
  });

  await page.screenshot({
    path: `${process.cwd()}/${platform}_${encodeURIComponent(href)}.png`
  });

  console.log(chalk.yellow(`save to           ${url}`));

  await browser.close();

  console.log(chalk.yellow(`completed         ${url}`));
  console.log(chalk.green('===================================='));
}

// if (!fs.existsSync('screenshots')) fs.mkdirSync('screenshots');

const platforms = ['pc', 'mobile']
const platform = process.argv[3] ? process.argv[2].toLowerCase() : 'pc';
const url = process.argv[3] || process.argv[2];

if (!platforms.includes(platform)) {
  console.log(chalk.red('platform is pc or mobile'));
  process.exit();
}

if (!url) {
  console.log(chalk.red('please config url'));
  process.exit();
}

screenshot(platform, url);
