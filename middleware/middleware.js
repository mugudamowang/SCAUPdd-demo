// node.js中间件文件
const { response } = require("express");
const express = require("express")
const app = express();

// 解决跨域问题
app.all('*', function (req, res, next) {
    //允许任何网址访问
    res.header('Access-Control-Allow-Origin', '*');
    // 设置请求类型
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    // 允许任何方法
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

//接口01 , 返回列表demo
app.get("/api1", (req, res) => {
    const fruit = [
        "apple", "banana", "watermellon"
    ]
    let data = {
        key1: req.query.pattern === "fruit"&&fruit||"not result"
    }
    res.send(data)
})

app.listen(3000, () => {
    console.log("middleware已经启动")
})