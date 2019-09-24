# ts-example-plugin
[![license](https://img.shields.io/github/license/flowscripter/ts-example-plugin.svg)](https://github.com/flowscripter/ts-example-plugin/blob/master/LICENSE.md)
[![dependencies](https://img.shields.io/david/flowscripter/ts-example-plugin.svg)](https://david-dm.org/flowscripter/ts-example-plugin)
[![travis](https://api.travis-ci.com/flowscripter/ts-example-plugin.svg)](https://travis-ci.com/flowscripter/ts-example-plugin)
[![npm](https://img.shields.io/npm/v/@flowscripter/ts-example-plugin.svg)](https://www.npmjs.com/package/@flowscripter/ts-example-plugin)

> Example TypeScript plugin for the [esm-dynamic-plugins](https://github.com/flowscripter/esm-dynamic-plugins) framework.

## Overview

`ExtensionPointA.ts` defines an example extension point ID `EXTENSION_POINT_A_ID` and a TypeScript interface for it. 
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

Lint: `npm run lint`

## Further Details

Further details on project configuration files and Javascript version support can be found in 
the [template for this project](https://github.com/flowscripter/ts-template/blob/master/README.md#overview).

## License

MIT © Flowscripter
