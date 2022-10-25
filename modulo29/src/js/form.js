const { fileFrom } = require("node-fetch");

const form = document.querySelector('#form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const cep = document.getElementById('cep');
const mensagen = document.querySelector('#mensagen')
const notNull = document.getElementsByClassName('.not-null')
let msg = ''

function isEmpty(elem) {
    return elem.value.length < 1 ? `<strong>O campo ${elem.name} está vazio.</strong>`: ''; 
}

function validaEmail(elem){
    return elem.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? '' : `<strong>Digite um EMAIL valido</strong>` ;
}

form.addEventListener('submit', function(event){
    event.preventDefault( );

    let msg = [];
    let markup = '';

    Array.from(notNull).forEach(field => {
        let fieldState = isEmpty(field);
        is(fieldState)
            msg.push(fieldState) 
    });

    
        const isEmail = validaEmail(email);
        if(isEmail) msg.push(isEmail);

    msg.forEach(item => {
        markup += `<p>${item}</p>`
    });

    mensagen.innerHTML = markup;
});

