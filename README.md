ssh-version
===========

Determine the remote version of ssh running on a host

Example
-------

### Node Module

``` js
var sshversion = require('ssh-version');

sshversion('localhost', function(err, version) {
  console.log(version);
});
```

yields

```
SSH-2.0-Sun_SSH_1.5
```

### Command Line

    $ ssh-version 10.0.1.10
    SSH-2.0-Sun_SSH_1.5
    $ ssh-version 10.0.1.1
    connect ECONNREFUSED

Usage
-----

### `sshversion(opts, function(err, version))`

`opts` can be a string specifying the host to identify, or an object with
the following properties

- `opts.host`: the host to connect to
- `opts.port`: the port to connect to
- `opts.timeout': the timeout, in ms, to enforce, defaults to system default

#### Command Line

```
usage: ssh-version <host> [port]
```

Installation
------------

    npm install [-g] ssh-version

License
-------

MIT License
