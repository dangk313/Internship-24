console.log("======================");
console.log("=== START APPLICATION");
console.log("======================");
const http = require("node:http");
const api  = require("./api.js");
const ui   = require("./ui.js");
const db   = require("./db.js"); 
db.populate_with_fake_data();
//// CREATE SERVER
const server = http.createServer((request, response) => {
    let body = [];
    request
        .on('error', err   => {console.error(error);})
          .on('data' , chunk => {body.push(chunk);})
        .on('end'  , ()    => {
            body = Buffer.concat(body).toString();

            ////////////////////////////////////////////////
            //// READ THE TRQUEST
            ////////////////////////////////////////////////
            console.log("======================");
            console.log("=== request");
            console.log("======================");
            console.log("call : " + request.method + " " + request.url);
            console.log("----------------------");
            console.log(body);
            console.log("----------------------");

            let url    = ("" + request.url).toLowerCase();
            let method = request.method;
            if (false) {}

            //// UI PAGES
            else if (method == "GET" && url == "/"           ) {ui.page_main    (request, response);}
            else if (method == "GET" && url == "/ui/main"    ) {ui.page_main    (request, response);}
            else if (method == "GET" && url == "/ui/users"   ) {ui.page_users   (request, response);}
            else if (method == "GET" && url == "/ui/meetings"   ) {ui.page_meetings   (request, response);}

            //// API USERS
            else if (url == "/api/users"    && method == "GET"   ) {api.api_users_get   (request, body, response);}

            ////////////////////////////////////////////////
            //// RETURN ERROR RESPONSE
            ////////////////////////////////////////////////
            else{
                response.write("EROR LOL");
                response.end(); //// send response
            }
        });
    })
.listen(8080); // Activates this server, listening on port 8080