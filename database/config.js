var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/didicrm');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('数据库连接成功，老铁！');
});