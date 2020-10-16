[![npm](https://img.shields.io/npm/v/@kronos-integration/interceptor-stream-obj2string.svg)](https://www.npmjs.com/package/@kronos-integration/interceptor-stream-obj2string)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![minified size](https://badgen.net/bundlephobia/min/@kronos-integration/interceptor-stream-obj2string)](https://bundlephobia.com/result?p=@kronos-integration/interceptor-stream-obj2string)
[![downloads](http://img.shields.io/npm/dm/@kronos-integration/interceptor-stream-obj2string.svg?style=flat-square)](https://npmjs.org/package/@kronos-integration/interceptor-stream-obj2string)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/Kronos-Integration/interceptor-stream-obj2string.git)
[![Styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# kronos-interceptor-stream-obj2string

Splits a stream into lines.

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [Stream2ObjectInterceptor](#stream2objectinterceptor)
-   [Transform](#transform)
-   [constructor](#constructor)
    -   [Parameters](#parameters)
-   [\_transform](#_transform)
    -   [Parameters](#parameters-1)

## Stream2ObjectInterceptor

**Extends Interceptor**

This interceptor cares about the handling of the messages.
It will add the hops and copies the messages

## Transform

Transforms an object stream into a stream of strings

## constructor

Creates the line parser and sets the options.
The following options are supported:
{
"allow_new_line_in_cell" : true,
	"line_separator" : "\\n",
 "quote_char" : '"'
 "skip_empty_lines" : true
}

### Parameters

-   `opts`   (optional, default `{}`)

## \_transform

Reads the stream data and split it into lines.

### Parameters

-   `data`  
-   `enc`  
-   `next`  

# install

With [npm](http://npmjs.org) do:

```shell
npm install kronos-interceptor-stream-obj2string
```

# license

BSD-2-Clause
