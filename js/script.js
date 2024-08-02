	$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll <= 300) { 
    $("#whatsapp").fadeOut();
  } else {
    $("#whatsapp").fadeIn();
  }
});
	$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll <= 3000) { 
    $("#pedido_finalizado").fadeOut();
  } else {
    $("#pedido_finalizado").fadeIn();
  }
});