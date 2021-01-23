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

    
})

var modalContentElements = ["https://getbootstrap.com/", "https://jquery.com/", "https://drive.google.com/drive/u/0/my-drive", "https://getbootstrap.com/", "https://jquery.com/", "https://drive.google.com/drive/u/0/my-drive"];


    $(function modalContent(id) {
        const pageUrl = modalContentElements[id];
        $("iframe").attr("src", pageUrl);
    })