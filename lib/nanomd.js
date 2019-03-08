'use strict';

const { Transform, PassThrough } = require('stream');
const marked = require('marked');

module.exports = function (file) {
  if (!file.endsWith('.md')) {
    return new PassThrough();
  }

  let md = '';
  return new Transform({
    transform(buf, enc, next) {
      md += buf;
      next();
    },
    flush(next) {
      const html = marked(md).trim();
      next(null, `var html = require('nanohtml');
module.exports = function () { return html\`<div>${html}</div>\`; };`);
    }
  });
};
