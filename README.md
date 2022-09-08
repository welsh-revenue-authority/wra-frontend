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

Still in `package.json`, under `scripts` add
```
"nps": "nps -c ./node_modules/wra-frontend/package-scripts.js",
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

### Build your own javascripts

You will need to create a `rollup.config.js` file.
In here you should add any scripts you wish to compile. For example

```
module.exports = [
  {
    input: 'src/javascripts/la-map.js',
    output: {
      file: 'application/static/javascripts/la-map.js',
      format: 'iife'
    }
  }
]
```
The [rollup file in the prototype kit](https://github.com/welsh-revenue-authority/prototype-kit/blob/main/rollup.config.js) is a good example.

You will also need to make sure rollup will output the compiled file to the right place. Make sure `jsOutputPath` is set to the right destination in `wra-frontend.config.json`. E.g. for flask projects it probably needs to be

```
"jsOutputPath": "application/static/javascripts",
```

Then when you want to compile, run

```
npm run nps build.javascripts
```

## To do

* Replace Wales GEL compiled assets with building blocks
* flesh out the common page layouts
* create jinja components for common components
