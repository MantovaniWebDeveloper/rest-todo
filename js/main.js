$(document).ready(function() {
  //salvo in variabilie indirizzo api
  var urlApi = "http://157.230.17.132:3006/todos";


  //creo una chiamata ajax per connettermi e scrivere nuova nota
  ajaxGet(urlApi);

  $("#btnSalva").click(function(){
      //alert("sono vivo 2");
      $.ajax({
        url: urlApi,
        //uso post per inviare
        type: "POST",
        data : {
          "text": $('#inputNota').val()
        },
        success: function(data) {
          //faccio una stampa di prova di tutto il contenuto api
          console.log(data);
          //rilancio la lettura
          ajaxGet(urlApi);

        },
        error: function(errore) {

        }
      })
    });

    $(document).on('click', '.elimina', function(){
        //alert("sono vivo 2");
        var idData = $(this).attr("id")
        console.log("id da eliminare : " + idData);
        $.ajax({
          url: urlApi + "/" + idData,
          //uso delete per eliminare
          type: "DELETE",
          success: function(data) {
            //faccio una stampa di prova di tutto il contenuto api
            console.log(data);
            //rilancio la lettura
            ajaxGet(urlApi);
          },
          error: function(errore) {

          }
        })
      });



  //funzione stampa api
  function ajaxGet(urlApi){
    //creo una chiamata ajax per connettermi e leggere tutto
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
  }
  function stampaApi(data){
    //eseguo il ciclo per stampare
    for (var i = 0; i < data.length; i++) {
      //variabilizzo il valore la propieta text di data
      var testoApi = data[i].text;
      var id = data[i].id;
      console.log(testoApi);
      console.log(id);
      //resetto
      //stamp in html
      $("#listaApi").append("<li id=" + id + " class='elimina'>" + testoApi + "<i id='btnCancella' class='fas fa-trash-alt'></i>"+ "</li>");
      $("#listaApi").html();

    }
  }

});
