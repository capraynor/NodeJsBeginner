"use strict";
var db = require('../database').connection;
var Student = require('../../models/Student')(db);

exports.getStudent = function (req, res, next) {
    var studentId = req.params.studentId;

    var query = Student.findOne({id:studentId});

    query.exec(function (err, student) {
        if (err){
            return res.status(500).json({
                success:false,
                message:"数据库错误:"+err.message
            });
        }

        if (!student){
            return res.status(404).json({
                success:false,
                message:"找不到该学生"
            });
        }

        return res.status(200).json({
            success:true,
            message:"已找到该学生",
            content:student
        });


    });
};