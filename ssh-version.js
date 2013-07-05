var net = require('net');

module.exports = version;

function version(host, port, cb) {
  if (typeof port === 'function') {
    cb = port;
    port = null;
  }
  port = port || 22;

  var client = net.connect({host: host, port: port});
  client.on('data', function(data) {
    data = (data.toString() || '').trim();
    client.destroy();
    cb(null, data);
  });
  client.on('error', cb);
}
