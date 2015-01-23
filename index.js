var cookies = require('cookies-js');

module.exports = function (opts) {
  return function (app) {
    if (!opts) opts = {};
    if (!opts.path) opts.path = '$cookie.id';

    app.get('*', function (page, model, params, next) {
      var cookieId = null;

      if (app.derby.util.isServer) {
        cookieId = page.req.cookies[opts.path] || model.id();
        page.res.cookie(opts.path, cookieId);
      } else {
        cookieId = cookies.get(opts.path) || model.id();
      }

      model.set(opts.path, cookieId);
      next();
    });

    app.on('model', function (model) {
      model.on('change', opts.path, function (cookieId) {
        if (app.derby.util.isServer) return;
        cookies.set(opts.path, cookieId);
      });
    });
  };
};
