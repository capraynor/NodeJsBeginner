exports.databaseOpt = {
    server: {poolSize: 5}, //连接池（由mongoose自动管理）
    user: process.env.DB_USERNAME || "", //可以利用环境变量来控制连接的用户名和密码
    pass: process.env.DB_PASSWORD || "",
    auto_reconnect: true, //自动重连
    socketOptions: {keepAlive: 1} //保持连接
};
