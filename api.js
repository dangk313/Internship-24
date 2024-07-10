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

    api_users_post : function (request, body, response) {
        console.log("api_users_post");
        response.setHeader("Content-Type", "application/json");
        let db   = require("./db.js");
        let user = JSON.parse(body);
        db.user_create(user.id, user.namel, user.namef, user.birth);
        response.write(body);
        response.statusCode = 200;
        response.end(); //// send response
    },

    api_users_delete : function (request, body, response) {
        console.log("api_users_delete");
        response.setHeader("Content-Type", "application/json");
        let db   = require("./db.js");
        let user = JSON.parse(body);
        db.user_delete(user.id);
        response.write(body);
        response.statusCode = 200;
        response.end(); //// send response
    },

    api_users_put : function (request, body, response) {
        console.log("api_users_put");
        response.setHeader("Content-Type", "application/json");
        let db   = require("./db.js");
        let user = JSON.parse(body);
        let old_user = db.user_get(user.id);
        if(old_user != null){
            db.user_delete(user.id);
            db.user_create(user.id, user.namel, user.namef, user.birth);
        }else{
            db.user_create(user.id, user.namel, user.namef, user.birth);
        }
        response.write(body);
        response.statusCode = 200;
        response.end(); //// send response
    },

    api_meetings_get : function (request, body, response) {
        console.log("api_meetings_get");
        response.setHeader("Content-Type", "application/json");
        let db   = require("./db.js");
        let text = JSON.stringify(db.meetings);
        response.write(text);
        response.statusCode = 200;
        response.end(); //// send response
    },


};
module.exports = api;
