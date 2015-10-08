'use strict';

var express = require('express');
var router = express.Router();
var addStudent = require('../lib/Student/AddStudent').addStudent;
var getStudent = require('../lib/Student/GetStudent').getStudent;
var checkStudentExist = require('../lib/Student/CheckExist').CheckExist;
//使用JSON来回复请求（JSON API ）
router.get('/id/:studentId',getStudent); // get post put delete 方法均可以在这里使用。

router.post('/id/:studentId', function (req, res, next) {
    res.json({
        name:req.params.name,
        class:req.params.class
    });

});

router.put('/id/:studentId',checkStudentExist, addStudent); //添加学生



router.delete('/id/:studentId', addStudent);

module.exports = router;