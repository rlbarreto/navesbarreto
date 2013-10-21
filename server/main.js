/*jslint node: true */
'use strict';
var express = require('express'),
    routes = require('./routes'),
    app = express();

app.use(express.bodyParser());
app.use(express.static('app'));
app.get('/api/meusCarros', routes.meusCarros);

app.use(function (req, res) {
    res.json({'ok': false, 'status': '404'});
});
app.listen(process.env.OPENSHIFT_NODEJS_PORT || 8080, process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1', function() {
    console.log('%s: Node server started on %s:%d ...',
        Date(Date.now() ), process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1', process.env.OPENSHIFT_NODEJS_PORT || 8080);
});
module.exports = app;