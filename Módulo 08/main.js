const form = document.getElementById('formAtividade')
const imgAprovado = '<img src="images/aprovado.png" alt="Emoji Festejando">'
const imgReprovado = '<img src="images/reprovado.png" alt="Emoji Decepcionado">'
const atividades = []
const notas = []
const spanAprovado = '<span class="aprovado">Aprovado</span>'
const spanReprovado = '<span class="reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('Digite a nota mínima para ser aprovado:'))

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nomeAtividade')
    const inputNotaAtividade = document.getElementById('notaAtividade')

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida.`)
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`

        linhas += linha
    }

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()

    document.getElementById('mediaFinalValor').innerHTML = mediaFinal
    document.getElementById('mediaFinalResultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}