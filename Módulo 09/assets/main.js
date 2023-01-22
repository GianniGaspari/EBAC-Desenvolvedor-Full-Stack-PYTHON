$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown()  // comando para deslizar para baixo o formulário
    })

    $('#botao-fechar').click(function(){
        $('form').slideUp()  // comando para deslizar para cima o formulário
    })

    $('form').on('submit', function(e){
        console.log('submit')
        e.preventDefault()
    })
})

/*
comando para chamar a ação em 2 clicks

$('header button').dblclick(function(){
    alert('Expandir formulário')
})
*/
