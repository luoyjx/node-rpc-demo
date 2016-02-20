/*！
 * 服务器端
 * Copyright(c) 2016 yanjixiong <yjk99@qq.com>
 */

var rpc = require('node-json-rpc');

var options = {
  port: 7777,
  host: '127.0.0.1',
  path: '/',
  strict: true
};

// Create a server object with options
var server = new rpc.Server(options);

// Add your methods
server.addMethod('myMethod', function (para, callback) {
  var error, result;


  console.log('para: ', para);
  // Add 2 or more parameters together
  if (para.length === 2) {
    result = para[0] + para[1];
  } else if (para.length > 2) {
    result = 0;
    para.forEach(function (v, i) {
      result += v;
    });
  } else {
    error = { code: -32602, message: "Invalid params" };
  }

  callback(error, result);
});

// Start the server
server.start(function (error) {
  // Did server start succeed ?
  if (error) throw error;
  else console.log('Server running ...');
});