bouyomiConnect
===============

のーどちゃん！棒読みちゃんと連携するのです！

##使い方

```javascript
var bouyomiConnect = require('./bouyomiConnect.js');
var bouyomiServer = {};
	bouyomiServer.host = '127.0.0.1';
	bouyomiServer.port = '50001';

bouyomiConnect.sendBouyomi(bouyomiServer, "message");
```