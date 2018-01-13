const fs = require("fs");
const login = require("facebook-chat-api");

// Create simple echo bot
login({email: "email", password: "password"}, (err, api) => {
    if(err) return console.error(err);

    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));
});
