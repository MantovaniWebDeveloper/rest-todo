$(document).ready(function() {
  //salvo in variabilie indirizzo api
  var urlApi = "http://157.230.17.132:3006/todos";
  //creo una chiamata ajax per connettermi
  $.ajax({
    url: urlApi,
    //uso get per lettura
    type: "GET",
    success: function(data) {
      //faccio una stampa di prova di tutto il contenuto api
      console.log(data);
    },
    error: function(errore) {

    }
  })


});
