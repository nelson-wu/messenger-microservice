'use strict';

const fs = require("fs");
const login = require("facebook-chat-api");

module.exports = function(app, db){
    login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
        app.get('/thread-list', (req, res) => {
            api.getThreadList(0, 5, 'inbox', (err, history) => {
                if(err) res.send(err);
                else res.send(history)
            });
        });
    });

    login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
        app.get('/thread-history/:threadId', (req, res) => {
            api.getThreadHistoryGraphQL(req.params.threadId, req.params.amount, req.params.timestamp, (err, hist) => {
                if(err) res.send(err);
                else res.send(hist);
            });
        });
    });
};
