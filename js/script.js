	$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll <= 2851) { 
    $("#whatsapp").fadeOut();
  } else {
    $("#whatsapp").fadeIn();
  }
});
	$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll <= 2851) { 
    $("#pedido_finalizado").fadeOut();
  } else {
    $("#pedido_finalizado").fadeIn();
  }
});

  $(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2850) { 
    $("#icone_inf").fadeOut();
  } else {
    $("#icone_inf").fadeIn();
  }
});