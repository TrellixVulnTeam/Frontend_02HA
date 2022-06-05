# Funções  

- Evitam repetição do código
- Realizam chamadas dinâmicas de algoritmos   

#### Estrutura   

- *exemploExemplo (parametros) {o que sera executado}*

function calcularMedia ( notas ) {

	var soma = 0;
  for ( c = 0; c < notas.length; c++ ) {
  	soma += notas[c]; 
  } 
  media = soma / notas.length; 
  return media
} 
function aprovacao (notas) {
	let media = calcularMedia ( notas ); //escopo da função
	let condicao = media >= 7 ? "aprovado" : "reprovado";
  return 'Média: ' + media + ' - Resultado: ' + condicao;
} 
  console.log ( aprovacao ([8, 6 ,7]) );
  
//console.log ( "Media: " + calcularMedia ([8, 6]))
//console.log ( aprovacao ( calcularMedia ([8, 6]) ) )
//console.log ( "Media: " + calcularMedia ([8, 9]))
//console.log ( aprovacao ( calcularMedia ([8, 6]) ) )
   

- este exemplo esta com o calculo dinâmico; o notas.length se adapta ao numero de notas   

## Funções Recursivas  

- Manipula objetos na pagina HTML, como obtenção de dados da pagina HTML, por exemplo
- 