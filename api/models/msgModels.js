'use strinct';

var moongose = require('mongoose');
var Schema = moongose.Schema;

var msgSchema = new Schema({

    title: {
        type: String
    },

    body: {
        type: String,
    },

    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = moongose.model('Messages', msgSchema);