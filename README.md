# My Redux

[![Build Status](https://travis-ci.org/ghoshnirmalya/my-redux.svg?branch=master)](https://travis-ci.org/ghoshnirmalya/my-redux) [![Greenkeeper badge](https://badges.greenkeeper.io/ghoshnirmalya/my-redux.svg)](https://greenkeeper.io/)

Building Redux from scratch

## Development

```sh
$ git clone https://github.com/ghoshnirmalya/my-redux
$ cd my-redux
$ rm -rf .git
$ npm install # or yarn
```

## Commands

```sh
$ npm test # run tests with Jest
$ npm run coverage # run tests with coverage and open it on browser
$ npm run lint # lint code
$ npm run docs # generate docs
$ npm run build # generate docs and transpile code
```

### Publish

```sh
$ npm version patch|minor|major
$ npm publish
```

It'll automatically run `test`, `lint`, `docs`, `build` and generate CHANGELOG.md file.

## License

MIT © [Nirmalya Ghosh](https://github.com/ghoshnirmalya)
