//Instancia jQuery e evita conflitos

jQuery ( function ($) {
   
    let titulos = $('h4')              // nenhuma indicação seleciona tag
   
    let items = $('.featured-item')    // . seleciona class
   
    let destaques = $('#featured')     // # seleciona ID

    console.log(titulos.first());
    
})

//Configuração de produtos

/*  $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class = "badge bg-secondary">Novo</span>');

    $('.featured-item:first h4').start('<span class = "badge bg-secondary">Novo</span>');

    $('.featured-item:first h4').html('<span class = "badge bg-secondary">Novo</span>');

    $('.featured-item:first h4').addClass('active');

    No CSS só precisa selecionar o elemento com $('.classe tag') e depois adicinar a função $('.classe tag').toggleClass('active')

    pode causar conflito com outras bibliotecas
    console.log ( $('h4').text() );

    edição do CSS através do jQuery

    $ ('.featured-item:first h4').css({
        'color' : '#f00',
        'background' : '#ff0',
        'font-weight' : '100',
        })
*/ 

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

// Manipulação de evento


/*   $ ('.featured-item a ').on( 'click', function(event) {
*
*        event.preventDefault ();
*
*        alert('Produto esgotado.');
*
* })
*/ 


// Callback - ação iniciada após uma ação
//.hide é função do jQuery

/*  $ ('.featured-item:nth(1)').hide(slow, function (){
 *           // este é o callback
 *            console.log( $(this).find('h4').text() + 'Esgotado' )
 *            })
 * 
 *            .show (slow, function(){
 *            console.log( $(this).find('h4').text() + 'Em estoque' )
 *            })
*/

//Animações

const duracao = 1000 // 1000 milisegundos; 1000 ms = 1s

$('.featured-item:nth(0)')
    .hide(duracao)
    .show(duracao)
    .fadeIn(1000)
    .fadeOut(3000) // fadeOut não faz o item sumir completamente, só fica invisible no CSS
    .toggle(4000)  // funciona parecido com hide e show, removendo o elemento da pagina totalmente

$('#form-submit ').on('click', function(e){
        
    e.preventDefault()

        if( $('#email').val( ) != '' ){

            $('#email').animate({
                opacity: "toggle", //isso faz o campo de email 'sumir' quando é preenchido
            }, duracao, function(){
                console.log(
                    $(this).val() //isso mostra no console o que foi escrito no campo preenchido.
                )
            })
        }
});