const api = {

    api_users_get : function (request, body, response) {
        console.log("api_users_get");
        response.setHeader("Content-Type", "application/json");
        let db   = require("./db.js");
        let text = JSON.stringify(db.users);
        response.write(text);
        response.statusCode = 200;
        response.end(); //// send response
    },

};
module.exports = api;
