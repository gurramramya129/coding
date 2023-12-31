<html>
   <head>
      <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
      <meta content="utf-8" http-equiv="encoding">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" type="text/css" href="style.css">
   </head>
   <body>
      <p>This example uses service.getPlacePredictions and google.maps.places.AutocompleteService what means that the billing stands for "Autocomplete without Places Details - Per Session"</p>
      <!--Make sure the form has the autocomplete function switched off:-->
      <form autocomplete="off" action="/action_page.php">
         <div class="autocomplete" style="width:300px;">
            <p><input id="estado" type="text" name="estado" placeholder="Estado" value="SC"></p>
            <p><input id="cidade" type="text" name="cidade" placeholder="Cidade"value="FLORIANOPOLIS"></p>
            <p><input id="bairro" type="text" name="bairro" placeholder="Bairro" value="CENTRO"></p>
            <p><input id="numero" type="text" name="numero" placeholder="Numero" value="10"></p>
            <input id="logradouro" type="text" name="logradouro" placeholder="Logradouro">
         </div>
         <input type="submit">
      </form>
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
      <script async defer src="https://maps.googleapis.com/maps/api/js?key=GOOGLE_API_KEY&libraries=places" type="text/javascript"></script>
      <script src="./autocomplete.js" type="text/javascript"></script>
      <script type="text/javascript">
         let autocomplete = new RestrictedAutocomplete(document.getElementById("logradouro"), function () {
            console.log(this.lastResultBusca);
            console.log(this.lastResultEnderecoCompleto);
            console.log(this.lastResultNumero);
            console.log(this.lastResultNumeroA);
            console.log(this.lastResultLogradouro);
            console.log(this.lastResultLogradouroA);
            console.log(this.lastResultBairro);
            console.log(this.lastResultBairroA);
            console.log(this.lastResultCidade);
            console.log(this.lastResultCidadeA);
            console.log(this.lastResultEstado);
            console.log(this.lastResultEstadoA);
            console.log(this.lastResultPais);
            console.log(this.lastResultPaisA);
            console.log(this.lastResultCEP);
            console.log(this.lastResultCEPA);
            console.log(this.lastResultId);
            console.log(this.lastResultLatitude);
            console.log(this.lastResultLongitude);
         });
         autocomplete.setRestrictions(document.getElementById("estado"), 
            document.getElementById("cidade"), 
            document.getElementById("bairro"), 
            document.getElementById("numero"));
      </script>
   </body>
</html>