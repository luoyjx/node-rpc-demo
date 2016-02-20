/*！
 * 服务端
 * Copyright(c) 2016 yanjixiong <yjk99@qq.com>
 */

var dnode = require('dnode');

var server = dnode({
  test: function(text, cb) {
    cb('test: ' + text);
  }
});

server.listen(7777);