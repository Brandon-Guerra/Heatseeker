var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  // socket.on('message', function(msg){
  //   io.emit('chat message', msg);
  //   console.log(msg);
  // });
  socket.on('latData', function(lat){
    io.emit('latitude: ', lat);
    console.log(lat);
  });
  // socket.on('lngData', function(lng){
  //   io.emit('longitude: ', lng);
  //   console.log(lng);
  // });
});

server.listen(3000, function(){
  console.log('listening on *:3000');
});
