const gulp = require ('gulp')
const concat = require ('gulp-concat')
const cssmin = require ('gulp-cssmin')
const rename = require ('gulp-rename')
const uglify = require ('gulp-uglify')
const image = require('gulp-imagemin')

function tarefasCSS(cb) {
    return gulp.src([
        './src/**/*.css',
        './src/CSS_Simple_JQuery.css',

])                                              
                                                // o * serve pra que pegue todo e qualquer arquivo com .css
               .pipe(concat ('styles.css'))     // função .pipe alinhada depois do ()
               .pipe(cssmin ())                 // primeiro concatena os arquivos; depois pega os arquivos concatenados
               .pipe(rename({suffix: '.min'}))  // minifica com o cssmin e depois de minificados
               .pipe(gulp.dest('./dist/css'))   // renomeia, nesse caso, adicionando o sufixo .min
                                                // gulp.src - onde vai buscar
                                                // gulp.dest - onde vai colocar
}

function tarefasJS( ){
    return gulp.src([
        './src/**/*.js',
        './jQuery/jqueryui-3.6.0.js',
        './src/bootstrap-5.0.2-dist/js/bootstrap.js',
        './dist/js/libs.min.js',

    ])
               .pipe(concat('libs.js'))
               .pipe(uglify())
               .pipe(rename({ suffix: '.min'})) // libs.min.js
               .pipe(gulp.dest('./dist/js'))
}

function tarefasImagem(){
    
    return gulp.src('./gulpImages/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
}

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
