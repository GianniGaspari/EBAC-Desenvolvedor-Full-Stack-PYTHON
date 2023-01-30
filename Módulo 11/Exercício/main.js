$(document).ready(function() {
    $('#carousel-images').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
    })
    
    $('.botao-menu button').click(function() {
        $('.menu').slideToggle()
    })
})

