/*！
 * 客户端
 * Copyright(c) 2016 yanjixiong <yjk99@qq.com>
 */

var dnode = require('dnode');

var _remote;

var d = dnode.connect(7777);
d.on('remote', function(remote) {
  _remote = remote;
});

exports.test = function(text) {
  setTimeout(function() {
    _remote.test(text, function(result) {
      console.log('[client]->', result);
    })
  }, 20);
}


