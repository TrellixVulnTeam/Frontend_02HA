//Instancia jQuery e evita conflitos

jQuery ( function ($) {
    
    let titulos = $('h4')              // nenhuma indicação seleciona tag
    
    let items = $('.featured-item')    // . seleciona class
    
    let destaques = $('#featured')     // # seleciona ID
    
    console.log(titulos.first());
    
})

//Configuração de produtos

$ ('.featured-item').hover(
    function() {console.log($(this).find('h4').text() + ' - ' + $(this).find('h6').text() )},
    )
    
    // Manipulação de evento
            
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
                
                
                /*
                * Ouvinte de eventos /Modal /nav-modal-open
                */
                $('.nav-modal-open').on('click', function(e){
                    e.preventDefault();
                    
                    let elem=$(this).attr('rel')
                    
                    $('.modal-body').html($('#'+elem).html())               //criando seletor dinamico a partir de variavel; para pegar o html dentro da div
                    $('.modal-header .modal-title').html($(this).text())
                    
                    let myModal = new bootstrap.Modal($('#modalId')) 
                    
                    myModal.show()
                })
                
                /*
                *   Event Listener
                */

                                function validate( elem){
                    if(elem. val() == ' ') {
                        console.log( 'Campo do' + elem.attr('name') + 'vazio')
                        elem.addClass('invalid') 
                        return false

                    } else {
                        elem.removeClass('invalid')
                    }
                }

                $('body').on('submit', '.modal-body .form', function(e){
                    e.preventDefault( ) //previne que o formulario seja enviado sem passar pela função || email. val() == ' '
                    
                    const inputName = $('#nome')
                    const inputEmail = $('#email')

                    validate(inputName)
                    validate(inputEmail)
                    
                    if (inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
                        console.log('verificar campo origatorio')
                        
                        return false 
                    } else {
                        $(this).submit()
                        
                    }
                })
                
                $('body').on('blur', '#nome', function(){
                    validate ($(this))
                })
                
                $('body').on('blur', '#email', function(){
                    validate ($(this))                                          
                })

                $('body').on('blur', '#cep', function(){
                    // validate ($(this))                                          
                    $(this).mask('00000-000');
                })
                $('body').on('blur', '#phone', function(){
                    validate ($(this))                                          
                    $(this).mask('00000-0000');
                })

                // $(document).ready(function(){
                //      $('#date').mask('00/00/0000');
                //      $('#time').mask('00:00:00');
                //      $('#cpf').mask('000.000.000-00', {reverse: true});
                // })
                