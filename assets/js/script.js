$(document).ready(function () {

    $("a").click(function (event) { 
        if(this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top -72  //Resto 72px del alto del NavBar
            }, 700)} 
                
    });
    
    $(function () {
        $('[data-toggle="popover"]').popover()
      });

    


});