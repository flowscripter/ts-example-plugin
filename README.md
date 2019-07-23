# ts-example-plugin
[![license](https://img.shields.io/github/license/flowscripter/ts-example-plugin.svg)](https://github.com/flowscripter/ts-example-plugin/blob/master/LICENSE.md)
[![dependencies](https://img.shields.io/david/flowscripter/ts-example-plugin.svg)](https://david-dm.org/flowscripter/ts-example-plugin)
[![travis](https://api.travis-ci.com/flowscripter/ts-example-plugin.svg)](https://travis-ci.com/flowscripter/ts-example-plugin)
[![npm](https://img.shields.io/npm/v/@flowscripter/ts-example-plugin.svg)](https://www.npmjs.com/package/@flowscripter/ts-example-plugin)

> Example TypeScript plugin for the [esm-dynamic-plugins](https://github.com/flowscripter/esm-dynamic-plugins) framework.

## Overview

`ExtensionPointA.ts` defines an example example extension point ID `EXTENSION_POINT_A_ID` and a TypeScript interface for it. 
In a real world scenario this would likely be imported from a host application API module.

`PluginA.ts` provides an extension implementing the Extension Point `EXTENSION_POINT_A_ID` and provides the required implementation
of `Plugin` so that the host application can discover it.

Refer to the example [ts-example-host-app](https://github.com/flowscripter/ts-example-host-app) project for an example host application
which can load and use this plugin. 
 
## Development

Firstly: 

```
npm install
```

then:

Build: `npm run build`

Watch: `npm run watch`

Test: `npm test`

Lint: `npm run lint`

## Further Details

#### Configuration

Explanation of project configuration files:

* `.editorconfig` - Configures [EditorConfig](https://editorconfig.org) compliant editors
* `.eslintrc.js` - TypeScript based [ESLint](https://eslint.org) configuration for the project derived from [@flowscripter/eslint-config](https://www.npmjs.com/package/@flowscripter/eslint-config)
* `.gitignore` - Specifies files for git to [ignore](https://git-scm.com/docs/gitignore) 
* `.huskyrc.js` - Provides git hooks using [Husky](https://github.com/typicode/husky) to enforce semantic commit messages, linting and unit testing.   
* `.travis.yml` - Defines the [Travis](https://travis-ci.com) build pipeline.
* `commitlint.config.js` - Configures [commitlint](https://conventional-changelog.github.io/commitlint) to ensure commit messages can be used to drive automated [Semantic Version](https://semver.org) releases.
* `package.js` - Defines development cycle scripts and configures publication of ES2015 modules. 
* `release.config.js` - Configuration for automated semantic version releasing using [semantic-release](https://semantic-release.gitbook.io/semantic-release/)
* `renovate.json` - Ensures automated dependency upgrade via [Renovate](https://renovatebot.com)
* `rollup.config.js` - Defines the TypeScript and ES2015 module build pipeline for [Rollup](https://rollupjs.org/guide/en)
* `tsconfig.json` - [TypeScript](https://www.typescriptlang.org) configuration for the project derived from [@flowscripter/tsconfig](https://www.npmjs.com/package/@flowscripter/tsconfig)

#### No Legacy JavaScript Support

All source and build output is in ES2015 module form. 

Browsers or NodeJS versions need to support:

* https://github.com/tc39/proposal-dynamic-import
* https://tc39.github.io/ecmascript-asyncawait/
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Because of this the modules are configured so that:
 
* no transpiling is performed (apart from TypeScript to ES2015 JavaScript)
* `package.json` specifies:
    * `"main": "dist/index.js`
    * `"type": "module"`
    * `"node": ">=12.6.0"` so that the `--experimental-modules` flag can be used and `"type": "module"` can be specified

#### Legacy Module Consumption
 
Legacy CommonJS format npm packages are supported for internal consumption by `rollup-plugin-commonjs`

## License

MIT © Vectronic
