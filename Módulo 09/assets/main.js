$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown()  // comando para deslizar para baixo o formulário
    })

    $('#botao-fechar').click(function(){
        $('form').slideUp()  // comando para deslizar para cima o formulário
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val()  // js == value   JQuery == val
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem)
        $(`
            <div class="overlay-image-link">
                <a href="${enderecoDaNovaImagem} target=_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000 )
        $('endereco-imagem-nova').val('')
    })
})

/*
comando para chamar a ação em 2 clicks

$('header button').dblclick(function(){
    alert('Expandir formulário')
})
*/
