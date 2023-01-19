function validateForm() {
    var n1 = document.getElementById("n-1").value;
    var n2 = document.getElementById("n-2").value;
    if (n2 > n1) {
        alert('Formulário válido! O 2º número É maior que o 1º número.')
    } else {
        alert('Formulário inválido! O 2º número NÃO é maior que o 1º número')
    }
}
