/**
 * Created by raynorchan on 15-9-30.
 * 该例子实现了一个基本的Web服务器。
 * 请使用node index.js 来运行
 */
var http = require("http");

/**
 *
 * @param request 收到的请求 get的query post的body 都在里面
 * @param response 回复相关的东西。想回复什么写在response.write里就行
 */
var onRequestReceived = function(request, response){

    console.log('recived a request from ' + request.connection.ip);

    // if the server is behind a proxy, is request.headers['x-forwarded-for']

    response.writeHead(200, {"Content-Type": "text/plain"}); //设置回复的header
    response.write("Hello World"); //设置回复内容 这里也可以是html
    response.end(); //结束回复 如果没有这句代码 浏览器会一直载入。
};

var server = http.createServer(onRequestReceived);

server.listen(8888); //在8888端口上监听

console.log("server is listening on 8888"); //非阻塞的
