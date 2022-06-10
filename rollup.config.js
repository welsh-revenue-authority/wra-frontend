module.exports = [
  {
    input: 'wra_frontend/src/javascripts/wra-frontend.js',
    output: {
      file: 'package/wra-frontend/javascripts/wra-frontend.js',
      format: 'umd',
      name: 'WRAFrontend'
    },
    context: 'window'
  }
]
