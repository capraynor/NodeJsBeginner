function execute(someFunction, value) {
    someFunction(value); //这种声明和调用是不规范的。
}

execute(function (word) {
    console.log(word);
}, "Hello"); // 声明了一个匿名函数