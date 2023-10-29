const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./User");
db.role = require("./Role");
db.job = require('./Job');
db.category = require('./Category');
db.jobCategory = require('./JobCategory');

db.ROLES = ["user", "admin", "employer"];

module.exports = db;