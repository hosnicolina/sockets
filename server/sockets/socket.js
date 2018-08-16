const {io} = require('../server')

io.on('connection',(client) => {
  console.log('Usuario conectado');


  client.emit('enviarMensaje',{usuario:'admin',mensaje:'bienvenido a esta aplicacion'})


  client.on('disconnect',() => {
    console.log('usuario desconectado');
  })


  //Escuchar clientes
  client.on('enviarMensaje',(messaje,callback) => {
    console.log(messaje);
    client.broadcast.emit('enviarMensaje',messaje)

    // if (messaje.usuario) {
    //   callback({
    //     resp:'todo salio bien'
    //   });
    // }else{
    //   callback({
    //     resp:'todo salio MALLLL!!!!!!'
    //   });
    // }

    // callback();
  })

});
