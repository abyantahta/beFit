const dbConfig = require("../config/database");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
module.exports = {
    mongoose: mongoose,
    url: dbConfig.url,
    user: require("./user.js")(mongoose)
};