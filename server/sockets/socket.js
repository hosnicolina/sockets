const {io} = require('../server')

io.on('connection',(client) => {
  //console.log('Usuario conectado');

  client.emit('idClient',{data:client.id})

  client.on('confirmacion',(data,callback) => {
    
    client.broadcast.to(data.id).emit('confirmacion',data)

  })


});
