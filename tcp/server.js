var net = require('net');
var fs = require('fs');

var Host = '127.0.0.1';
var Port = '8088';

net.createServer(function(sock){
	sock.on('data', function(data){
		sock.pipe(process.stdout);
		sock.end();
	});
	sock.on('close', function(data){
		console.log('close:' + sock.remoteAddress+ ' ' + sock.remotePort);

	});
}).listen(Port, Host);
console.log('server listening on ' + Host + ':' + Port);