# Changes

## 1.0.5

- 🛡 [`824e802`](https://github.com/mantoni/nanomd.js/commit/824e802ed1624758b2857745a2daa18ca9cbb15a)
  Upgrade marked dependency (Morgan Roderick)
    >
    > This removes dependency on insecure version of minimist
    >
    > See https://www.npmjs.com/advisories/1179
    >
- 🛡 [`2b2ca61`](https://github.com/mantoni/nanomd.js/commit/2b2ca61e1239b2585efe695b90e06b890a965785)
  npm audit
- ✨ [`8711041`](https://github.com/mantoni/nanomd.js/commit/8711041b8fc5f931b052aae40029a0b34f199df7)
  Upgrade Studio Changes to v2
- ✨ [`bb456de`](https://github.com/mantoni/nanomd.js/commit/bb456de47a3b8cfef5f9ec6ba32bfd38be9fa765)
  Use npm 7
- ✨ [`e2dd220`](https://github.com/mantoni/nanomd.js/commit/e2dd220267df6c2b62b9232ce14af7e826ea696d)
  Add `.gitignore`

_Released by [Maximilian Antoni](https://github.com/mantoni) on 2021-04-06._

## 1.0.4

- 🐛 [`f74a530`](https://github.com/mantoni/nanomd.js/commit/f74a530f11e34360d2594a6326f0cd623496c9c7)
  Generate ES2015 compatible source

_Released by [Maximilian Antoni](https://github.com/mantoni) on 2019-03-08._

## 1.0.3

- 🐛 [`051d4e4`](https://github.com/mantoni/nanomd.js/commit/051d4e49b93c121da5911bd6961fd36907c13ead)
  Fix design issue with generating HTML only once
    >
    > This changes the generated code to a function that returns the generated
    > html. This is necessary since re-using the same html object confuses the
    > diffing algorithm used in choo.
    >

_Released by [Maximilian Antoni](https://github.com/mantoni) on 2018-12-03._

## 1.0.2

- 🐛 [`f809e35`](https://github.com/mantoni/nanomd.js/commit/f809e35ed1863842b99970b47b340747d0d9ee32)
  Fix pre-compiling markdown with multiple lines

_Released by [Maximilian Antoni](https://github.com/mantoni) on 2018-12-03._

## 1.0.1

- 🐛 [`fb5defc`](https://github.com/mantoni/nanomd.js/commit/fb5defcca038fc4f7b85104431a21360130dc9a0)
  Fix example

_Released by [Maximilian Antoni](https://github.com/mantoni) on 2018-12-03._

## 1.0.0

- ✨ [`bd783f5`](https://github.com/mantoni/nanomd.js/commit/bd783f5c01ca1ed9f0c9d9a2252094a81b837e2c)
  Initial implementation
- ✨ [`0323e68`](https://github.com/mantoni/nanomd.js/commit/0323e683e3dd3a8f9e329f976f2d75d29e382e0f)
  Add tests
- ✨ [`9cc2f1c`](https://github.com/mantoni/nanomd.js/commit/9cc2f1c3d44a7aaaad149488ca4b811a85e53d86)
  Add travis config
- 📚 [`879fb2a`](https://github.com/mantoni/nanomd.js/commit/879fb2ab6c3775e86104f9e6531ebb1ea19fdfe9)
  Add README.md
- 📚 [`584053e`](https://github.com/mantoni/nanomd.js/commit/584053e63199ccbfe61958ae000ae0ac81d4ac04)
  Add badges
- 📚 [`dd8fac1`](https://github.com/mantoni/nanomd.js/commit/dd8fac15379fe9bca048765414a8d57b273fc09d)
  Add LICENSE

_Released by [Maximilian Antoni](https://github.com/mantoni) on 2018-12-03._
