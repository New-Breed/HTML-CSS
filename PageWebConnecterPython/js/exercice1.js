let socket = new WebSocket("ws://192.168.1.136:8002");

socket.onopen = function(e) {
  alert("[open] La connexion est établie");

  //Modification sur le site Web
  alert("Sending to server");
  
  $( "#avancer" ).click(function() {
     socket.send("Avancer");
  });
  $( "#Temperature" ).click(function() {
    socket.send("Temperature");
 });
 $( "#led" ).click(function() {
  socket.send("led");
});
};

socket.onmessage = function(event) {
  alert(`[message] Data received from server: ${event.data}`);
  //Recevoir en temps réel les donnnées des senseurs
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    alert('[close] Connection died');
  }
};

socket.onerror = function(error) {
  alert(`[error] ${error.message}`);
};