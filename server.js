var connect = require('connect');

connect.createServer(
    connect.static('app')
).listen(3000);