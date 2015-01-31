# Another koa swig extension

## Comparation to the koa-modules/koa-swig

Source:
```js
exports = module.exports = extend
exports.swig = swig
exports.setDefaults = swig.setDefaults
exports.setFilter = swig.setFilter
```

As it is coded, this module don't mix its own config with swig's,
which can be a really mess both in code and user experience.

The only option it accepts is `root` which tell the module where to find your `.html` files.

Yes, sir. The `ext` option is not supported and please use `.html` as your view files' ext name.

Besides, `writeBody` is canceled too. As it's commonly hard to decide whether to write body at this level.

## License

MIT
