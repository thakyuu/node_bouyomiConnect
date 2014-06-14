exports.sendBouyomi = function(options, message) {
  var messageBuffer = new Buffer(message);

  var buffer = new Buffer(15 + messageBuffer.length);
    buffer.writeUInt16BE(0x0100, 0);
    buffer.writeUInt16BE(0xFFFF, 2);
    buffer.writeUInt16BE(0xFFFF, 4);
    buffer.writeUInt16BE(0xFFFF, 6);
    buffer.writeUInt16BE(0000, 8);
    buffer.writeUInt8(00, 10);
    buffer.writeUInt32BE(messageBuffer.length, 11);
    messageBuffer.copy(buffer, 15, 0, messageBuffer.length);

  require('net').connect(options).end(buffer);
}
