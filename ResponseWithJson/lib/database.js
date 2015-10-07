var mongoose = require('mongoose');
var databaseOpt = require('./options').databaseOpt;

var connection = mongoose.createConnection((process.env.DATABASE || "mongodb://localhost/StudentManagement"),databaseOpt);

connection.on('error' , function (err) {
    console.log(err);
});

exports.connection = connection;