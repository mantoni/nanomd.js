/*eslint-env mocha*/
'use strict';

const { assert, sinon } = require('@sinonjs/referee-sinon');
const browserify = require('browserify');
const nanomd = require('../');

describe('nanomd', () => {

  afterEach(() => {
    sinon.restore();
  });

  it('rewrites markdown as nanohtml tagged template string', (done) => {
    const stream = nanomd('file.md', {});

    stream.on('data', (data) => {
      assert.equals(String(data), 'const html = require(\'nanohtml\');\n'
        + 'module.exports = html`<p>Hi, <strong>this</strong> is '
        + 'markdown!</p>`;');
      done();
    });

    stream.end('Hi, __this__ is markdown!');
  });

  it('runs as a browserify transform', (done) => {
    sinon.replace(console, 'warn', sinon.fake());

    browserify({ node: true })
      .transform(nanomd)
      .add('./test/fixture/test.js')
      .bundle((err, bundle) => {
        assert.isNull(err);

        eval(String(bundle)); // eslint-disable-line no-eval

        assert.calledOnceWith(console.warn,
          '<p>Hi, <strong>this</strong> is markdown!</p>');
        done();
      });
  });

});
