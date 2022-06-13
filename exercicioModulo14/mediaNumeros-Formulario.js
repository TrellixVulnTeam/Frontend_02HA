function calcularMedia (notas) {
    let soma = 0;
    for(c = 0; c < notas.length; c++) {soma += notas[c];}
    media = soma / notas.length;
    return media;
}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
                 //escopo global

let media;
function aprovacao(notas){
    let media = calcularMedia(notas);
    let condicao = media >=8 ? "aprovado" : "reprovado"
    return 'Média: ' + media + ' - Resultado: ' + condicao;
}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
                    // Função Recursiva 

function contagemRegressiva(numero){
    console.log(numero);
    let proximoNumero = numero - 1;
    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);
}

function obterMedia(){

	var a = parseInt(document.getElementById("a").value);
	var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
  
  var media = (a + b + c) / 4;
  
  document.getElementById("resultado").innerHTML = "Resultado:" + media;
  
} 
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
                    //Calculo de media//

const formulario1 = document.getElementById('formulario_media')

if(formulario1)
formulario1.addEventListener('submit' , function(event){
    
    event.preventDefault();
    event.stopPropagation();

    let dados = new FormData(this);

    // [] é o array
    let notas = []; 
    
    for (let key of dados.keys()) {

        // parseFloat pode ser numero E decimal
        let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) :0 ;

        if(!isNaN(numero)) {
            notas.push(numero);
        }
        
        //push adiciona itens no array
    }
    console.log(notas);

    texto = aprovacao(notas)
    
    document.getElementById('resultado').innerHTML = aprovacao(notas);
}); 
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
                    //Validação dos campos

function validaCampo (elemento){  

            elemento.addEventListener('focusout', function(event) {

                event.preventDefault();

                if(this.value == ""){

                    document.querySelector('.mensagenErro').innerHTML = "";
                    this.classList.remove('Erro')

                } else {
                    document.querySelector('.mensagenErro').innerHTML = "Os campos com * são obrigatorios.";
                    this.classList.add('Erro')
                    return false;
                }
            });

}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
                    //Validação Campo Numérico

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        // duas aspas "" '' vazias indica valor vazio
        
        //let numero = this.value.match(/ ^[\d]5-[\d]3 /) ? this.value.replace (/-/, "") : this.value;
        
        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){

            document.querySelector('.mensagenErro').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');

        } else {

            document.querySelector('.mensagenErro').innerHTML = "Verifique o preenchimento dos campos obrigatorios";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}



let campoObrigatorio = document.querySelectorAll('input.Obrigatorio'); 
let campoNumeroObrigatorio = document.querySelectorAll('input.numero'); 


for (let emFoco of campoObrigatorio ) {
    validaCampo(emFoco)
}

for (let emFoco of campoNumeroObrigatorio ) {
    validacampoNumeroObrigatorio(emFoco)
}