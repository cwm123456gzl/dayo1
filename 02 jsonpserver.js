let http = require("http");
http.createServer((req,res) => {
    let obj = {
        name:"Rose",
        age:18
    }

    // jsonp 跨域处理  并且转换成JSOn字符串
    res.write(`jsonp(${JSON.stringify(obj)})`)
    res.end();
}).listen(9999)
console.log("server is running at 9999....")