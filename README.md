# WRA Frontend

A repository for reusable bits of frontend code.

## Getting started

```
npm install
```

## Using WRA-Frontend in your projects

In the `package.json` file include the `devDependency`
```
"wra-frontend": "https://gitpkg.now.sh/welsh-revenue-authority/wra-frontend/package?main"
```

### Use a copy of Wales GEL

```
npm run nps build.gel
```

### Build your own stylesheets

Write your own `scss` in the `src/scss` folder.

Make sure you have updated the `stylesheetsOutputPath` in `wra-frontend.config.json` with the path to where you want the compiled stylesheets to go. E.g.
```
{
  "stylesheetsOutputPath": "assets/css"
}
```

Then, when you want to build your stylesheets run,

```
npm run nps build.stylesheets
```

## To do

* Replace Wales GEL compiled assets with building blocks
* flesh out the common page layouts
* create jinja components for common components
