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
        + 'module.exports = () => html`<div><p>Hi, <strong>this</strong> is '
        + 'markdown!</p></div>`;');
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
          '<div><p>Hi, <strong>this</strong> is markdown!</p></div>');
        done();
      });
  });

  it('precompiles with nanohtml', (done) => {
    browserify({ node: true })
      .transform(nanomd)
      .transform('nanohtml')
      .add('./test/fixture/test.js')
      .bundle(done);
  });

  it('allow multiple paragraphs in markdown file', (done) => {
    browserify({ node: true })
      .transform(nanomd)
      .transform('nanohtml')
      .add('./test/fixture/multiline.js')
      .bundle(done);
  });

});
