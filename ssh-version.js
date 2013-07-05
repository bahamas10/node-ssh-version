var net = require('net');

module.exports = version;

function version(opts, cb) {
  if (typeof opts === 'string')
    opts = { host: opts };

  opts.port = opts.port || 22;

  var client = net.connect(opts);

  var timeout;
  if (opts.timeout)
    timeout = setTimeout(function() {
      client.destroy();
      cb(new Error('TIMEOUT'));
    }, opts.timeout);

  client.on('data', function(data) {
    data = (data.toString() || '').trim();
    client.destroy();
    if (timeout) clearTimeout(timeout);
    cb(null, data);
  });
  client.on('error', function() {
    if (timeout) clearTimeout(timeout);
    cb.apply(null, arguments);
  });
}
