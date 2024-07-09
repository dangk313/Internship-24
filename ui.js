const ui = {

    file_load : function (filename) {
        let fs = require("fs");
        let text = null;
        try {text = fs.readFileSync(filename, 'utf8');} catch (error) {console.error(error);}
        return text;
    },

    page_main : function (request, response) {
        let html = this.file_load("ui/page_main.html");
        response.write(html);
        response.statusCode = 200;
        response.end(); //// send response
    },

    page_users : function (request, response) {
        let html = this.file_load("ui/page_users.html");
        response.write(html);
        response.statusCode = 200;
        response.end(); //// send response
    },

    page_meetings : function (request, response) {
        let html = this.file_load("ui/page_meetings.html");
        response.write(html);
        response.statusCode = 200;
        response.end(); //// send response
    },
};
module.exports = ui;