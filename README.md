# WRA Frontend

A repository for reusable bits of frontend code.

## Getting started

The css 

In your project

```
npm install
```

## Using WRA-Frontend in your projects

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

