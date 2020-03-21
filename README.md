[![Build Status](https://img.shields.io/travis/project-alkemi/alkemi-ui-template.svg)](https://travis-ci.org/project-alkemi/alkemi-ui-template)
[![Coverage Status](https://img.shields.io/codecov/c/github/project-alkemi/alkemi-ui-template/master.svg)](https://codecov.io/gh/project-alkemi/alkemi-ui-template/branch/master)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![Dependencies](https://img.shields.io/david/project-alkemi/alkemi-ui-template.svg)](https://david-dm.org/project-alkemi/alkemi-ui-template)
[![DevDependencies](https://img.shields.io/david/dev/project-alkemi/alkemi-ui-template.svg)](https://david-dm.org/project-alkemi/alkemi-ui-template?type=dev)

# Alkemi-UI-template

This project is a front-end template used by Alkemi to start new projects.

It includes

-   a stack of _.js_ library that we use on a daily basis
-   an easy starting set-up using `docker`
-   contributing guidelines for new developers

## Start front-end projects from this template

1. Change `name`, `version`, `description`, `repository`, `keywords`, `author`, `bugs` in `./package.json` if needed
2. Change the icon in `./public/favicon.ico`
3. Change title in `<title>` tag of `./public/index.html`
4. Change `short_name`, `name` and possibly `theme_color` and `background_color` in `./public/manifest.json`
5. Update every line `README.md` until this line

## Stack

This application make active usage of

-   [create-react-app](https://github.com/facebookincubator/create-react-app) that packs many utilities
-   [redux](https://redux.js.org) for state management
-   [react-router v4](https://reacttraining.com/react-router/) for routing
-   [connected-react-router](https://github.com/supasate/connected-react-router) to connect router to redux state
-   [material-ui v1](https://material-ui.com/) as main visual component library

## Start application

### Requirements

-   docker>=17.0.0
-   docker-compose>=1.17.0
-   node>=9.0.0
-   yarn>=1.6.0

### Install application

If not yet done, clone project locally and install node dependencies

```bash
git clone <project-url> && cd <project-folder>
yarn install # install node dependencies locally
```

### Start application

```bash
docker-compose up # start application in dev mode
```

## Contributing guidelines

Refer to [contributing guidelines](CONTRIBUTING.md)
