const {series, parallel} = require ('gulp')
const gulp      = require ('gulp')
const concat    = require ('gulp-concat')
const cssmin    = require ('gulp-cssmin')
const rename    = require ('gulp-rename')
const uglify    = require ('gulp-uglify')
const image     = require('gulp-imagemin')
const htmlmin   = require('gulp-htmlmin')
const babel     = require('gulp-babel')


function tarefasCSS(cb) {
    return gulp.src([
        './src/**/*.css', 
        './src/CSS_Simple_JQuery.css',
        
    ])
    .pipe(babel({
        comments: false,
        presets: ['@babel/env']
}))                 
    .pipe(concat ('styles.css'))     
    .pipe(cssmin ())                 
    .pipe(rename({suffix: '.min'}))  
    .pipe(gulp.dest('./dist/css'))   

    cb()
}

/* 
 *  o * serve pra que pegue todo e qualquer arquivo com .css
 *  função .pipe alinhada depois do ()
 *  primeiro concatena os arquivos; depois pega os arquivos concatenados
 *  minifica com o cssmin e depois de minificados
 *  renomeia, nesse caso, adicionando o sufixo .min
 *  gulp.src - onde vai buscar
 *  gulp.dest - onde vai colocar
 */

function tarefasJS( callback){
     gulp.src([
        './src/**/*.js',
        './jQuery/jqueryui-3.6.0.js',
        './src/bootstrap-5.0.2-dist/js/bootstrap.js',
        './dist/js/libs.min.js',
    ])

//     .pipe(babel({
//         comments: false,
//         presets: ['@babel/env']
// })) 

    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min'})) // libs.min.js
    .pipe(gulp.dest('./dist/js'))

    return callback()
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

        // proof of concept
function tarefasHTML (callback){
    gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))
    
    return callback()
}


exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
exports.default = parallel (tarefasHTML,tarefasCSS,tarefasJS)
