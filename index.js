var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('latData', function(latData){
    io.emit('latData', latData);
    console.log(latData);
  });
  socket.on('lngData', function(lngData){
    io.emit('lngData', lngData);
    console.log(lngData);
  });
});

server.listen(3000, function(){
  console.log('listening on *:3000');
});
