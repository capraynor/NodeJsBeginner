var express = require('express');
var router = express.Router();


//使用JSON来回复请求（JSON API ）
router.get('/class/:class/name/:name', function (req, res, next) {
    res.json({
        name:req.params.name,
        class:req.params.class
    });

    console.log(req.params);
}); // get post put delete 方法均可以在这里使用。

module.exports = router;