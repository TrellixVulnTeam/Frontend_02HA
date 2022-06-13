
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
                    //Validação dos campos

function validaCampo (elemento){  

            elemento.addEventListener('focusout', function(event) {

                event.preventDefault();

                if(this.value == ""){

                    document.querySelector('.mensagenErro').innerHTML = "Verifique o preenchimento correto do nome.";
                    this.classList.add('erro');
                    this.parentNode.classList.add('erro');
                    return false;

                } else {
                    document.querySelector('.mensagenErro').innerHTML = "";
                    this.classList.remove('erro');
                    this.parentNode.classList.remove('erro');
                }
            });

}

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
                    //Validação Campo Numérico

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();
      
        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace (/-/, "") : this.value;
        
        if( numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10 ) {
            document.querySelector('.mensagenErro').innerHTML = "";

            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');

        } else {
            document.querySelector('.mensagenErro').innerHTML = "Verifique o preenchimento correto do CEP";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
                    //Validação email

function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        
        if( this.value.match(emailValido)){

            document.querySelector('.mensagenErro').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');

        } else {

            document.querySelector('.mensagenErro').innerHTML = "Verifique o preenchimento correto do email";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
                    //Validação unidade federal


function unidadeFed(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const unidadeFed = /^[a-z]/i
        if( this.value.match(unidadeFed)){

            document.querySelector('.mensagenErro').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');

        } else {

            document.querySelector('.mensagenErro').innerHTML = "Verifique o preenchimento correto da Unidade Federal";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}


let campoObrigatorio = document.querySelectorAll('input.obrigatorio'); 
let camposNumericos = document.querySelectorAll('input.numerico'); 
let campoEmail = document.querySelectorAll('input.obrigatorioEmail');
let campoUF = document.querySelectorAll('input.obrigatorioUF')


for (let emFoco of campoObrigatorio ) {
    validaCampo(emFoco)
}
for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}
for (let emFoco of campoEmail ) {
    validaEmail(emFoco);
}
for (let emFoco of campoUF ) {
    unidadeFed(emFoco);
}