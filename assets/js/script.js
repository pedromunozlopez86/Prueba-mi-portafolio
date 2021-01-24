$(document).ready(function () {

    $("a").click(function (event) { 
        if(this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top -65  // le resto 65px del alto del NavBar y calza con el inicio de la seccion 
            }, 700)} 
                
    });
    
    $(function () {
        $('[data-toggle="popover"]').popover()
      });

})

    $("#uno").click(function () {
        $("iframe").attr("src", "https://pedromunozlopez86.github.io/meet-coffe/");
    });

    $("#dos").click(function () {
        $("iframe").attr("src", "https://pedromunozlopez86.github.io/iguana/");
      });

      $("#tres").click(function () {
        $("iframe").attr("src", "https://pedromunozlopez86.github.io/Suricata/");
      });

      $("#cuatro").click(function () {
        $("iframe").attr("src", "https://pedromunozlopez86.github.io/Cuppon/");
      });

      $("#cinco").click(function () {
        $("iframe").attr("src", "https://pedromunozlopez86.github.io/Ricomida/");
      });

      //El sexto proyecto no lo tenia, nunca lo vi //
      $("#seis").click(function () {
        $("iframe").attr("src", "https://www.atp.com");
      });



 