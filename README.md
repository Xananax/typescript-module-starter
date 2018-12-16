# CLEAN START

A good starting point to create typescript utilities


## Files

Edit `src/main.ts`.

`src/index.ts` and `src/demo` are used for browser testing and for Github pages

## Scripts

Run the live server with `create-react-app` to test your module:

```sh
npm start
```

Run and watch for changes

```sh
npm run dev
```

Run tests:

```sh
npm test
```

Build your package:

```sh
npm run package
```

Update and push github-pages:

```sh
npm run pages
```

Run tests, build the package, build & upload pages (this also runs before publishing on `npmjs`)

```sh
npm run prepare
```

## Customization

### Wiring

The repo is set to create agnostic modules, with a demo using React.

If you're not going to use your module in the front-end, you might as well:

- change `npm start` to run `npm dev`

If you're also not going to use github pages, then:

- remove `src/index.ts` and `src/demo`
- remove the packages:
  - `@types/react`
  - `@types/react-dom`
  - `react`
  - `react-dom`
  - `react-scripts`
  - `gh-pages`
- remove the `scripts`:
  - `pages:build`
  - `pages:upload`
  - `pages`
  - `prepare`
  - `demo:start`
  - `demo:build`
  - `demo`

### Package

Change:

```json
  "name": "[YOUR_APP_NAME]",
  "version": "0.1.0",
  "license": "MIT",
  "keywords": [
    "typescript",
    ...
  ],
```

### Github pages

Don't forget to changee the following in `package.json`:

```json
  "homepage": "https://[YOUR_USER].github.io/[YOUR_REPO]",
  "author": "YOUR_EMAIL",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/[YOUR_USER]/[YOUR_REPO]"
  },
  "bugs": {
    "url": "https://github.com/Xananax/[YOUR_USER]/[YOUR_REPO]"
  }
```