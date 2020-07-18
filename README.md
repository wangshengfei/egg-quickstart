# egg-quickstart

eggjs 快速开始

## QuickStart

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/

注意：

1. 可能会遇到`HPE_INVALID_METHOD`的报错，可以使用以下方式 install
$ # reinstall deps and never lock it.
$ rm -rf node_modules yarn.lock package-lock.json
$ npm i --no-package-lock
https://github.com/eggjs/egg/issues/2589#issuecomment-429198287

2.处理 curl 请求超时
  执行 http_proxy=http://127.0.0.1:[端口号] npm run dev 启动命令
  端口号改成本地代理的端口号

```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org