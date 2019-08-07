## Just 🚚

- A replacement, global command line `react-scripts`. Extended to
  `react-app-rewired`

[![npm version](https://img.shields.io/npm/v/just-create-app.svg)](https://www.npmjs.com/package/just-create-app)
[![npm monthly downloads](https://img.shields.io/npm/dm/just-create-app.svg)](https://www.npmjs.com/package/just-create-app)

---

**This is my local package to help my work, now refactor few parts and publish
to a package, some script would not working fine. So if had a wrong way, you
could create a [issue](https://github.com/j-cli/just/issues)**

---

<br/>

## Features

- Reduce size of node_modules lowest by deal with react-scripts (~6MB,
  `react-dom` ~ 5MB) 🧜‍♂️
- Builtin `react-app-rewired` so you can tweak `CRA` webpack config 🙏
- Support global config, one file for all projects
- Focus to typescript ( more support, more feat )
- Command major: `just` equal to `just start`
- Backyard working by `create-react-app`, `react-scripts` and
  `react-app-rewired`
- Future focus 🚀

### Install

```bash
npm install just-create-app -g
```

or

```bash
yarn global add just-create-app
```

## Commands

Here is a list of all the available commands

- `just` - equal to `just start`
- `just start` - runs the app in development mode
- `just build` - builds the app for production
- `just create <dir>` - `create-react-app` under the hood, just remove
  `react-scripts` dependency
- `just test` - currently "test" has not supported yet

## Contribute

Welcome to my party 🤰
