# [µcompress](https://github.com/WebReflection/ucompress#readme) and [µcdn](https://github.com/WebReflection/ucdn#readme) basic example

**[Live demo](https://webreflection.github.io/ucdn-test/public/)**

### How to test this project

```sh
git clone https://github.com/WebReflection/ucdn-test.git
cd ucdn-test
npm i
```

### How to build a `./public` folder with optimized assets
```
npm run build
```


## How does this work?

Source code is in the `./src` folder. Once _ucdn_ starts, it creates a `./cdn` folder with all assets pre-optimized and pre-compressed.

Whenever a file changes, and the browser requests it, it will be re-generated with a cache lasting 1 second.

The cache can be increased or reduced via the `--cache-timeout XXXX` argument, where `XXXX` are milliseconds.

To discover all flags available in both _ucdn_ and _ucompress_, feel free to run `npm run help:cdn` or `npm run help:compress`.


## Where are dependencies?

While backend/processing dependencies should be defined in this project root, all front-end related dependencies should be defined in the `./src/package.json` file. This is necessary in order to pre-resolve paths within the root of the front-end folder, but don't worry, only files related to the project will be optimized, once published, and _JS_ files will automatically resolve to those dependencies as relative path, i.e. `../node_modules/uhtml/esm/index.js`.
