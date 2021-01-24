$(document).ready(function () {
    alert("hola");
    $("a").click(function (event) { 
        if(this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top -65  //Resto 72px del alto del NavBar
            }, 700)} 
                
    });
    
    $(function () {
        $('[data-toggle="popover"]').popover()
      });

    
})

    $("#uno").click(function () {
        $("iframe").attr("src", "https://vuejs.org/");
    });

    $("#dos").click(function () {
        $("iframe").attr("src", "https://amazon.com/");
      });

      $("#tres").click(function () {
        $("iframe").attr("src", "https://google.cl/");
      });

      $("#cuatro").click(function () {
        $("iframe").attr("src", "https://pedromunozlopez.tk/");
      });

      $("#cinco").click(function () {
        $("iframe").attr("src", "https://skin.club");
      });

      $("#seis").click(function () {
        $("iframe").attr("src", "https://www.atp.com");
      });



 