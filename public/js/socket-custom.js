var socket = io();
socket.on("connect", function() {
  console.log("Conectado con el servidor");
});

socket.on("disconnect", function() {
  console.log("perdimos conecion con el servidor");
});

// Enviar informacion
socket.emit(
  "enviarMensaje",
  {
    usuario: "Fernando",
    mensaje: "Hola Mundo"
  },
  function(res) {
    console.log("Respuesta server: ", res);
  }
);

socket.on("enviarMensaje", function(message) {
  console.log(message);
});
