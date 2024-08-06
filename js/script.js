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

  $(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2800) { 
    $("#icone_inf").fadeOut();
  } else {
    $("#icone_inf").fadeIn();
  }
});