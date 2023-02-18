const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'));
}

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
exports.sass = compilaSass;

/*
Tarefas pulicas, são aquelas que exportamos.
Tarefas privadas são aquelas que não exportamos, mas podemos utilizar dentro de outras tarefas
*/
