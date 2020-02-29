$(function() {

   var header = document.getElementById('header');
   var headroom = new Headroom(header);
   headroom.init();

   //Ancho de la pagína
   var ancho = $(window).width(),
      enlaces = $("#enlaces"),
      btnMenu = $("#btn-menu"),
      icono = $("#btn-menu .icono");


   btnMenu.on("click", function(e){
      enlaces.slideToggle();
   });

   $(window).on("resize",function(){
      if($(this).width() > 700){
         enlaces.show();
      } else {
         enlances.hide();
      }
   });
})
