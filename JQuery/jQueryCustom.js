//Instancia jQuery e evita conflitos

jQuery ( function ($) {
   
    let titulos = $('h4')              // nenhuma indicação seleciona tag
   
    let items = $('.featured-item')    // . seleciona class
   
    let destaques = $('#featured')     // # seleciona ID

    console.log(titulos.first());
    
})

//Configuração de produtos

// $('.featured-item a').addClass('btn btn-dark stretch-link');

// $('.featured-item:first h4').append('<span class = "badge bg-secondary">Novo</span>');

// $('.featured-item:first h4').start('<span class = "badge bg-secondary">Novo</span>');

// $('.featured-item:first h4').html('<span class = "badge bg-secondary">Novo</span>');

// $('.featured-item:first h4').addClass('active');

//No CSS só precisa selecionar o elemento com $('.classe tag') e depois adicinar a função $('.classe tag').toggleClass('active')

// pode causar conflito com outras bibliotecas
// console.log ( $('h4').text() );

// edição do CSS através do jQuery

//   $ ('.featured-item:first h4').css({
//       'color' : '#f00',
//       'background' : '#ff0',
//       'font-weight' : '100',
//   })


   $ ('.featured-item:first h4').click( function(){

    $(this).css({
         'color'        : '#f00',
         'background'   : '#ff0',
         'font-weight'  : '100',
       })
   })


   $ ('.featured-item').hover(
    // function() {console.log($(this).find('h4').text() )},
    function() {console.log($(this).find('h4').text() + ' - ' + $(this).find('h6').text() )},
   )

//Manipulação de evento

//   $ ('.featured-item a ').on( 'click', function(event) {
//        event.preventDefault ();
//        alert('Produto esgotado.')
//   })
