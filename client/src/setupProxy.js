const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        [
            '/api/users/login',
            '/api/users/register',
            '/account/password/forgot',
            '/account/password/reset/:token'
        ],
        createProxyMiddleware({
            target: 'http://localhost:5000'
        })
    );
}