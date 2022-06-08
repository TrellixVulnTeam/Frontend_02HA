function calcularMedia (notas) {
    let soma = 0;
    for(c = 0; c < notas.length; c++) {soma += notas[c];}
    media = soma / notas.length;
    return media;
}

//escopo global
let media;
function aprovacao(notas){
    let media = calcularMedia(notas);
    let condicao = media >=8 ? "aprovado" : "reprovado"
    return 'Média: ' + media + ' - Resultado: ' + condicao;
}

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

document.addEventListener('submit' , function(event){
    event.preventDefault();

    let formulario = document.getElementById('formulario_media')

    let dados = new FormData(formulario);

    let object = {  };
    
    // [] é o array
    let notas = []; 
    
    for (let key of dados.keys()) {
        object[key] = dados.get(key);
        
        //push adiciona itens no array
        notas.push( parseInt(dados.get(key)));
    }
    console.log(notas);

    console.log(object);

    texto = aprovacao(notas)
    
    document.getElementById('resultado').innerHTML = aprovacao(notas);
});