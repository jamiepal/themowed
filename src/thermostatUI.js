$( "#up" ).click(function() {
  $thermo.up();
  //$("#temp" )
  //.html( "<p>All new content. <em>You bet!</em></p>" );
  $("#currenttemp").text($thermo.temp)

});
