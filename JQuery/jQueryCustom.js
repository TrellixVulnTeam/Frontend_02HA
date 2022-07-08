//Instancia jQuery e evita conflitos
jQuery ( function ($) {
   
    let titulos = $('h4')              // nenhuma indicação seleciona tag
   
    let items = $('.featured-item')    // . seleciona class
   
    let destaques = $('#featured')     // # seleciona ID

    console.log(titulos.first());
    
})


// pode causar conflito com outras bibliotecas
// console.log ( $('h4').text() );
