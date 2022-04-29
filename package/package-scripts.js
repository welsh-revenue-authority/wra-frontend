const fs = require('fs')
let scripts = {}

function readJsonFile (filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

let configPaths = require('./default.paths.json')
const optionalConfigPath = 'wra-frontend.config.json'

if (fs.existsSync(optionalConfigPath)) {
  configPaths = {
    ...configPaths,
    ...readJsonFile(optionalConfigPath)
  }
}

scripts.build = {
  stylesheets: `npx node-sass ${configPaths.scssPath} -o ${configPaths.stylesheetsOutputPath} --include-path ${configPaths.WRAFrontendPath}`,
  gel: `npx node-sass ${configPaths.WRAFrontendPath}wra-frontend/wales-gel/wales-gel.scss -o ${configPaths.stylesheetsOutputPath}/walesgel --include-path ${configPaths.WRAFrontendPath}`
}

scripts.watch = {
  stylesheets: `npx chokidar ${configPaths.watchPaths} -c "npm run nps build.stylesheets"`
}

module.exports = { scripts }
