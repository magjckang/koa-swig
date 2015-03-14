/**
 * Module denpendencies.
 */

var swig = require('swig')
var path = require('path')
var merge = require('util')._extend

/**
 * Expose `extender` and some swig APIs.
 */

exports = module.exports = extend
exports.swig = swig
exports.setDefaults = swig.setDefaults
exports.setFilter = swig.setFilter

/**
 * Extend a `render` method for `koa.context`.
 * Unlike many other libs, this will **NOT** write content to `this.body`.
 */

function extend(app, options) {
  options = options || {}

  options = merge({
    root: 'views'
  }, options)

  app.context.render = function *render(view, locals) {
    locals = locals || {}

    if (!path.extname(view)) view += '.html'

    view = path.resolve(options.root, view)

    locals = merge({}, merge(this.state, locals))

    return yield function (done) {
      swig.renderFile(view, locals, done)
    }
  }
}
