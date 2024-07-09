const db = {

	////////////////////////////////////////////
	//// FILE NAMES
	////////////////////////////////////////////

	filename_users    : "db/users.db",
	filename_meetings : "db/meetings.db",
	
	////////////////////////////////////////////
	//// DB TABLES (ARRAYS)
	////////////////////////////////////////////

	users    : [],
	meetings : [],

	new_user : function (id,namel,namef,birth) {
		let user   = {};
		user.id    = id;
		user.namel = namel;
		user.namef = namef;
		user.birth = birth;
		return user;
	},
	
	new_meeting : function (id,id1,id2,name,location,datetime) {
		let meeting      = {};
		meeting.id       = id;
		meeting.id1      = id1;
		meeting.id2      = id2;
		meeting.name     = name;
		meeting.location = location;
		meeting.datetime = datetime;
		return meeting;
	},
	
	////////////////////////////////////////////
	//// FILE READ WRITE
	////////////////////////////////////////////

	file_load : function (filename) {
		let fs = require("fs");
		let text = null;
		try {text = fs.readFileSync(filename, 'utf8');} catch (error) {console.error(error);}
		return text;
	},
	
	file_save : function (filename, text) {
		let fs = require("fs");
		try {fs.writeFileSync(filename, text);} catch (error) {console.error(error);}
	},

	file_load_users : function () {
		let fs   = require("fs");
		let text = this.file_load(this.filename_users);
		this.users = JSON.parse(text);
	},
	
	file_save_users : function () {
		let fs   = require("fs");
		let text = JSON.stringify(db.users);
		this.file_save(this.filename_users, text);
	},

	file_load_meetings : function () {
		let fs   = require("fs");
		let text = this.file_load(this.filename_meetings);
		this.meetings = JSON.parse(text);
	},
	
	file_save_meetings : function () {
		let fs   = require("fs");
		let text = JSON.stringify(db.meetings);
		this.file_save(this.filename_meetings, text);
	},
	
	////////////////////////////////////////////
	//// DB READ WRITE
	////////////////////////////////////////////

	user_get : function (id) {
		let user = null;
		for (user of this.users) {
			if (user.id == id) {return user;}
		}//end for
		return null;
	},

	user_create: function (id,namel,namef,birth) {
		let user = this.new_user(id,namel,namef,birth);
		this.users.push(user);
		this.file_save_users();
	},

	user_delete: function (id) {
		let i = 0;
		for (i=this.users.length-1;i>=0;i--) {
			if (this.users[i].id == id) {
				this.users.splice(i,1);
				break;
			}
		}
		this.file_save_users();
	},

	user_update: function (id,namel,namef,birth) {
		////TODO
	},

	populate_with_fake_users : function (n) {
		let user;
		user = this.new_user(""+(n+1),"namel1","namef1","birth1"); this.users.push(user);
		user = this.new_user(""+(n+2),"namel2","namef2","birth2"); this.users.push(user);
		user = this.new_user(""+(n+3),"namel3","namef3","birth3"); this.users.push(user);
		user = this.new_user(""+(n+4),"namel4","namef4","birth4"); this.users.push(user);
		user = this.new_user(""+(n+5),"namel5","namef5","birth5"); this.users.push(user);
		this.file_save_users();
	},
	
	populate_with_fake_meetings : function (n) {
		let meeting;
		meeting = this.new_meeting("id12",""+(n+1),""+(n+2),"name12","location12","datetime12"); this.meetings.push(meeting);
		meeting = this.new_meeting("id13",""+(n+1),""+(n+3),"name13","location13","datetime13"); this.meetings.push(meeting);
		meeting = this.new_meeting("id14",""+(n+1),""+(n+4),"name14","location14","datetime14"); this.meetings.push(meeting);
		meeting = this.new_meeting("id23",""+(n+2),""+(n+3),"name23","location23","datetime23"); this.meetings.push(meeting);
		meeting = this.new_meeting("id24",""+(n+2),""+(n+4),"name24","location24","datetime24"); this.meetings.push(meeting);
		meeting = this.new_meeting("id34",""+(n+3),""+(n+4),"name34","location34","datetime34"); this.meetings.push(meeting);
		this.file_save_meetings();
	},

	populate_with_fake_data : function () {
		let n = Date.now();
		this.populate_with_fake_users(n);
		this.populate_with_fake_meetings(n);
	},

};
module.exports = db;
