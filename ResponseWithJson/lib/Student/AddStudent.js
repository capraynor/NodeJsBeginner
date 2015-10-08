"use strict";
var db = require('../database').connection;
var Student = require('../../models/Student')(db);

exports.addStudent = function (req, res, next) {



    var studentId = req.params.studentId;

    var studentName = req.body.name;

    var studentSex = req.body.sex;

    var studentClass = req.body.class;



    var student = new Student({
        name:studentName,
        sex:studentSex,
        class:studentClass,
        id:studentId
    });

    console.log(student);

    student.save(function(err, student){
        if (err){
            return res.json({
                success:false,
                message:'数据库读写错误'+err.message
            });
        }

        return res.status(201).json({
            success:true,
            message:'学生添加成功',
            content:student
        });
    });
};