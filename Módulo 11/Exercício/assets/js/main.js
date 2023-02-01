$(document).ready(function() {
    $('#carousel-images').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
    })
    
    $('.botao-menu button').click(function() {
        $('.menu').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira um e-mail válido',
            telefone: 'Por favor, insira um número de telefone válido',
            mensagem: 'Por favor, digite algo válido.'
        }
    })
})

