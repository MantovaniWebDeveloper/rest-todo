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
      stampaApi(data);
    },
    error: function(errore) {

    }
  })

  //funzione stampa api
  function stampaApi(data){
    //eseguo il ciclo per stampare
    for (var i = 0; i < data.length; i++) {
      //variabilizzo il valore la propieta text di data
      var testoApi = data[i].text;
      console.log(testoApi);
      //resetto
      $("#listaApi").html();
      //stamp in html
      $("#listaApi").append("<li>" + testoApi + "</li>");
    }
  }


});
