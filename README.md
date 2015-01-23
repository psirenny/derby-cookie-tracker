Derby Cookie Tracker
====================

Attach a cookie id to a [Derby JS](http://derbyjs.com) app's browser session.
Works in both the client and server, so that you can track compiled derby apps that start offline.
This is useful for logging, tracking errors on devices, etc.

Installation
------------

    npm install derby-cookie-tracker --save

Usage
-----

    var derby = require('derby');
    var cookieTracker = require('derby-cookie-tracker');

    var app = derby.createApp('app', __filename);
    app.use(cookieTracker())

Updating
--------

If you mutate the cookie id the module will update your browser cookie. i.e.:

    model.set('$cookie.id', 'foo');
    // document.cookie "$cookie.id=foo"

Options
-------

**path** - Where to store the cookie id. Defaults to `$cookie.id`;

Notes
-----

This cookie is **not** httpOnly and isn't secure. It shouldn't be used
as a session id or to access private data.
