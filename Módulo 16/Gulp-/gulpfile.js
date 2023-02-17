function funcaoPadrao(callBack) {
    console.log('Executando via Gulp → VAI CARAIIIIII');
    callBack();
}

function dizOi(callBack) {
    console.log('Olá Gulp, finalmente!');
    dizTchau();
    callBack();
}

function dizTchau() {
    console.log('Tchau Gulp! Foi uma semana e tanto')
}

exports.default = funcaoPadrao;
exports.dizOi = dizOi;

/*
Tarefas pulicas, são aquelas que exportamos.
Tarefas privadas são aquelas que não exportamos, mas podemos utilizar dentro de outras tarefas
*/
