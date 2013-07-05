#!/usr/bin/env node

var sshversion = require('../');
var opts = {
  host: process.argv[2],
  port: process.argv[3],
  timeout: +process.argv[4],
}

if (!opts.host) {
  console.error('usage: ssh-version <host> [port] [timeout ms]');
  process.exit(1);
}

sshversion(opts, function(err, version) {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }

  console.log(version);
});
