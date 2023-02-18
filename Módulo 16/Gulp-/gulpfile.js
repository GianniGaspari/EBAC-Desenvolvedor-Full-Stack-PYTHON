const gulp = require('gulp');

function funcaoPadrao(callBack) {
    setTimeout(function() {
        console.log('Executando via Gulp → VAI CARAIIIIII');
        callBack();
    },2000);
}

function dizOi(callBack) {
    setTimeout(function() {
        console.log('Olá Gulp, finalmente!');
        dizTchau();
        callBack();
    },1000);
}

function dizTchau() {
    console.log('Tchau Gulp! Foi uma semana e tanto')
}

// exports.default = gulp.series(funcaoPadrao, dizOi);
exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi;

/*
Tarefas pulicas, são aquelas que exportamos.
Tarefas privadas são aquelas que não exportamos, mas podemos utilizar dentro de outras tarefas
*/
