          var slideIndex = 1;
                    showDivs(slideIndex);

                    function plusDivs(n) {
                      showDivs(slideIndex += n);
                    }

                    function showDivs(n) {
                      var i;
                      var x = document.getElementsByClassName("mySlides");
                      if (n > x.length) {slideIndex = 1} 
                      if (n < 1) {slideIndex = x.length} ;
                      for (i = 0; i < x.length; i++) {
                        x[i].style.display = "none"; 
                      }
                      x[slideIndex-1].style.display = "block"; 
                    }








//stats
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});