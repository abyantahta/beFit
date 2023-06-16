const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: String, Required: true, min: 5, max: 255 },
    username: { type: String, Required: true, min: 5, max: 255 },
    email: { type: String, Required: true, max: 255 },
    password: { type: String, Required: true, min: 6, max: 500 },
    createdAt: { type: Date, default: Date.now },
    refreshToken: [{ type: String, default: null }]
});

module.exports = mongoose.model('user', userSchema);