// var octoParse = require('./octoparse/lib/index.js')

module.exports = {
  install(Vue, options) {
    Vue.prototype.$htmlParse = function(str) {
      var nodes = octoParse.htmlParse(str)
      return nodes
    }
  }
}