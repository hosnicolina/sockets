var socket = io({reconnectionAttempts:10});



socket.on("connect", function() {
  console.log("Conectado con el servidor");
});


socket.on("disconnect", function() {
  console.log("perdimos conecion con el servidor");
});

socket.on('idClient',function(data) {
  console.log(data);
});

socket.on('confirmacion',function(data) {
  console.log(data);
  if(data.estado){
    let cuerpo = document.querySelector('h2')
    cuerpo.innerText = data.mensaje
  }
});

document.addEventListener("DOMContentLoaded", function() {
  let cuerpo = document.querySelector("body");

  cuerpo.addEventListener("click", function() {
    socket.emit("confirmacion", {
      id: 'rIGxQZUY1vlu81RcAAAx',
      estado: true,
      mensaje:'Soy la otra ventana'
    });
  });
});


function abrir(){
  miVentana = window.open('https://voragine.net/weblogs/como-pasar-variables-de-una-pagina-a-otra-en-una-web-con-php', '_blank');
 
}

function cerrar() {
  miVentana.close();
}
