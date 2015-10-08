"use strict";
var db = require('../database').connection;
var Student = require('../../models/Student')(db);

exports.CheckExist = function (req, res, next) {
    var studentId = req.params.studentId;

    var query = Student.findOne({'id':studentId});

    query.exec(function (err, Student) {
        if (Student){

            return res.status(400).json({
                success:false,
                message:"该学生的学号已经存在，请先删除。"
            });
        }

        return next();
    });
};