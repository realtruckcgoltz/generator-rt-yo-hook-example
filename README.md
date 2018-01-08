# generator-rt-yo-hook-example [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> This is a example project for Yeoman and git hooks.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-rt-yo-hook-example using [yarn](https://yarnpkg.com) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
yarn global add yo
git clone https://github.com/realtruckcgoltz/generator-rt-yo-hook-example.git
cd generator-rt-yo-hook-example
yarn link
```

Then generate your new project:

```bash
mkdir /my/new/project/path
cd /my/new/project/path
yo rt-yo-hook-example
```

To demonstrate git hooks:

```bash
git init
git add -A
git commit -m "Testing da hook"
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Chris Goltz]()


[npm-image]: https://badge.fury.io/js/generator-rt-yo-hook-example.svg
[npm-url]: https://npmjs.org/package/generator-rt-yo-hook-example
[travis-image]: https://travis-ci.org/realtruckcgoltz/generator-rt-yo-hook-example.svg?branch=master
[travis-url]: https://travis-ci.org/realtruckcgoltz/generator-rt-yo-hook-example
[daviddm-image]: https://david-dm.org/realtruckcgoltz/generator-rt-yo-hook-example.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/realtruckcgoltz/generator-rt-yo-hook-example
