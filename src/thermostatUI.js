$( "#up" ).click(function() {

  $thermo.up();
  //$("#temp" )
  //.html( "<p>All new content. <em>You bet!</em></p>" );
  console.log("got to hereeee");
  $("#currenttemp").text($thermo.temp);

});
