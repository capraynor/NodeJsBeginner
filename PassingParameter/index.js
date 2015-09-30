/**
 * Created by raynorchan on 15-9-30.
 *
 * 该例子描述了如何在JavaScript中传递参数
 */

/**
 * 声明一个带一个参数的函数 也可以用var来声明
 * @param word
 */
function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, "Hello"); // 调用的时候say就成了execute的变量。
