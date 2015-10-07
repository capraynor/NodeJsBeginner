var express = require('express');
var router = express.Router();
var addStudent = require('../lib/Student/AddStudent').addStudent;

//使用JSON来回复请求（JSON API ）
router.get('/id/:studentid', function (req, res, next) {
    res.json({
        name:req.params.name,
        class:req.params.class
    });

}); // get post put delete 方法均可以在这里使用。

router.post('/id/:studentid', function (req, res, next) {
    res.json({
        name:req.params.name,
        class:req.params.class
    });

});

router.put('/id/:studentid', addStudent); //添加学生



router.delete('/id/:studentid', function (req, res, next) {
    res.json({
        name:req.params.name,
        class:req.params.class
    });
});

module.exports = router;