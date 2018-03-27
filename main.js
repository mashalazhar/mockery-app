
// MODAL

$(document).ready(function(){
    $(function () {         
        $('.modal').modal();
        $('#modal1').modal('open');
        $('.trigger-modal').modal(3000);
    });
})(jQuery); // will not open in 3 seconds?
   
// CAROUSEL

 $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });

