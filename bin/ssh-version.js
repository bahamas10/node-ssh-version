#!/usr/bin/env node

var sshversion = require('../');
var host = process.argv[2];
var port = process.argv[3];

if (!host) {
  console.error('usage: ssh-version <host> [port]');
  process.exit(1);
}

sshversion(host, port, function(err, version) {
  if (err) console.error(err.message);
  else console.log(version);
});
