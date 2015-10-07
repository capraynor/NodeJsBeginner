'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudentsSchema = Schema({
    name:{
        type:String,
        required:true
    },
    class:{
        type:String,
        required:true
    },
    sex:{
        type:String,
        required:true
    },
    Id:{
        type:String,
        required:true
    }

}, {collection: 'Students'});


mongoose.model('Students', StudentsSchema);

console.log("Students loaded.");

module.exports = function (connection) {
    return (connection || mongoose).model('Students');
};