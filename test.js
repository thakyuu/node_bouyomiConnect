var bc = require('./bouyomiConnect.js');
require('chai').should();


var net = require('net');
var testServer = {'host': '127.0.0.1', 'port': '50900'};


describe('棒読みちゃん', function(){
	it('読み上げ 英数字', function(){
		var testBuffer = new Buffer([0x01, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x74, 0x65, 0x73, 0x74]);
		var server = net.createServer(function(conn){
			conn.on('data', function(data){
				data.should.deep.equal(testBuffer);
				server.close();
			});
		}).listen(50900);
		bc.sendBouyomi(testServer, 'test');
	});

	it('読み上げ 日本語', function(){
		var testBuffer = new Buffer([0x01, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x09, 0x00, 0x00, 0x00, 0xe3, 0x81, 0xa6, 0xe3, 0x81, 0x99, 0xe3, 0x81, 0xa8]);
		var server = net.createServer(function(conn){
			conn.on('data', function(data){
				data.should.deep.equal(testBuffer);
				server.close();
			});
		}).listen(50900);
		bc.sendBouyomi(testServer, 'てすと');
	});
});
