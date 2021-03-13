// node.js中间件文件
const { response } = require("express");
const express = require("express")
const app = express();
let userlist = [
    {
        username: "root",
        password: 123
    }
];

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

    let pattern = req.query.pattern;


    const goodsList = [{
        name: "苹果香蕉草莓",
        des: "新鲜现摘",
        tags: ["包邮"],
        originprice: 49.9,
        price: 19.9
    }, {
        name: "上衣01裤子外套夹克",
        des: "新鲜现摘",
        tags: ["包邮", "优惠"],
        originprice: 20,
        price: 109.2
    }, {
        name: "上衣02裤子外套夹克",
        des: "热卖",
        tags: ["包邮", "优惠"],
        originprice: 199,
        price: 129
    }, {
        name: "电脑手机iphone小米",
        des: "爆款",
        tags: ["包邮", "优惠"],
        originprice: 29999,
        price: 19999
    }, {
        name: "耳机airpos无线蓝牙",
        des: "全新原厂",
        tags: ["包邮", "优惠"],
        originprice: 299,
        price: 199
    },
    ]
    let data = goodsList.filter(item => {
        return item.name.indexOf(pattern) !== -1;
    })
    let filterData = pattern !== "" ? (data.length > 0 ? data : [{ name: "没有该商品信息~" }]) : [{ name: "还没有输入~" }];
    console.log("返回数据是\n", filterData)
    res.send(filterData);
})

app.get("/api2", (req, res) => {
    let userIof = {
        username: req.query.username,
        password: req.query.password
    }
    console.log(userIof);
    //验证用户身份
    let userinList = ""
    if (userIof !== "") {
        userinList = userlist.filter(item => { return item.username.indexOf(userIof.username) !== -1 });
    }
    res.send(userinList.length > 0 ? true : false);
})

app.listen(3000, () => {
    console.log("middleware已经启动")
})