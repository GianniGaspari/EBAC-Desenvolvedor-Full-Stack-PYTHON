$(document).ready(function() {
    // Para adicionar tarefa ao clicar no botão
    $("#paraFazer-form").submit(function(e) {
      e.preventDefault();
      var nomeTarefa = $("#nomeTarefa").val();      // .val chamando o JQuery
      $("#tarefa-li").append("<li>" + nomeTarefa + "</li>");
      $("#nomeTarefa").val("");
    });

    // Para marcar a tarefa como completa ao clicar nela
    $("#tarefa-li").on("click", "li", function() {
      $(this).toggleClass("tarefaRealizada");
    });

    /*
      (this) → faz referência ao objeto do qual a função é uma propriedade
      .toggleClass() → função do JQuery que adiciona ou remove uma classe a um elemento
    */
});
