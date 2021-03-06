# nanomd

[![Build Status]](https://travis-ci.org/mantoni/nanomd.js)
[![SemVer]](http://semver.org)
[![License]](https://github.com/mantoni/nanomd.js/blob/master/LICENSE)

> A tiny browserify transform to require markdown files compiled with
> [nanohtml][]. Works great with [choo][]™.

## Why?

- Transparently use any markdown with [marked][] in html templates.
- Pre-compile markdown to avoid bundling and running a markdown parser.
- Designed for choo / nanohtml.

## Install

```bash
❯ npm install nanomd
```

## Usage

```js
const html = require('nanohtml');
const hello = require('./hello.md');

const el = html`
  <body>
    <h1>Hello markdown</h1>
    ${hello()}
  </body>
`;

document.body.appendChild(el);
```

## Compile with browserify

From the command line:

```bash
browserify -t nanomd -t nanohtml index.js > bundle.js
```

In your `package.json`:

```json
"browserify": {
  "transform": [
    "nanomd",
    "nanohtml"
  ]
}
```

Make sure to run `nanomd` before the `nanohtml` transform.

## License

MIT

[Build Status]: https://img.shields.io/travis/mantoni/nanomd.js/master.svg
[SemVer]: https://img.shields.io/:semver-%E2%9C%93-brightgreen.svg
[License]: https://img.shields.io/npm/l/nanomd.svg
[marked]: https://marked.js.org
[nanohtml]: https://github.com/choojs/nanohtml
[choo]: https://choo.io
