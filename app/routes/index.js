const routes = require('./routes');
const fs = require('fs');
const login = require('facebook-chat-api');

module.exports = function(app, db) {
    routes(app, db);
};
