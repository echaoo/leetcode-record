const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  var date1 = new Date('December 1, 2019 03:24:00');
  res.writeHead(200, { 'Access-Control-Allow-Origin': '*', 'Date': date1, 'Last-Modified': new Date() });
  // res.writeHead(200, { 'Cache-Control': 'max-age=10000' });
//res.header('Access-Control-Allow-Origin', 'http://www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
  if (req.method == 'OPTIONS') {
    res.send(200); // 意思是，在正常的请求之前，会发送一个验证，是否可以请求。
  }
  switch(req.url){                     //请求到了，需要处理对应的路由，路由就是localhost:8080这个域名后面的那一堆东西。路由的本质是后端根据路由去做对应的事情。
    case '/a':                //req.url=/getWerther,发送JSON数据，并变成字符串
      res.end(JSON.stringify({a:1,b:2}))
      break;              //停掉，这个相当于mock数据了
    default:             //这两个都没匹配上，就认为是个静态文件
      res.end(fs.readFileSync(__dirname + '/static' + req.url))
  }
});
server.listen(8000);
