## Lógica de Programação  

- Computador  
    - Maquina que extrai dado; **e dado é uma forma bruta de informação que precisa ser processado**. Esse dado pode ser nº ou letra, algo que não faça muito sentido sem o processamento.
- **Processamento** é a realização de operação no dado que entra em informação que pode ser usada/entendida pelo usuário
- Processamento de dados se da por: *Entrada (de dado) > Processamento (em info util) > Saida (da informação util ao usuário)*

### Lógica  

 - Aquilo que faz sentido. Um pensamento/linha de raciocinio que é desenvolvimente e precisa ter sentido para alguem
 - **Lógica Computacional**: É aquilo que voce consegue desenvolver para um computador processar.   

 ### Como escrever um Programa:   

 - Aplicar a lógica com objetivo de descrever o passo-a-passo pra resolver o problema em ordem de execução
 - *Aprender a criar formulas para resolver problemas*
 - Precisa entender de como criar a solução e desenvolver suas formulas 
 - Não é puramente exata, muito variada.  

 ### Lógica de Programação  

 - É a técnica de sequenciar pensamento, passos e f luxo de dado para atingir o objetivo de gerar informação
   - E a sequencia dos passos/instruções que o computador precisa seguir é conhecida como **algoritmo**   

### Algoritmo   

- Sequencia lógica e finita de instrução de resolução de problema
- *Nem todo algoritmo é programa de computador, mas todo programa de computador é um algoritmo*
- A linguagen de programação é a ferramente que viabiliza o funcionamento dos algoritmos   

#### Algoritmos para calcular a média de 3 números:   

1. Inicio:
2. Receber o primeiro numero: entrada1;
3. Receber o segundo numero: entrada2;
4. Receber o terceiro numero: entrada3;
5. Somar os numeros e dividir por 3: (entrada1 + entrada2 + entrada3) /3;
6. Exibir o resultado: print, echo, console.log ; 
7. Fim;   

### Funcionalidades Gerais  
 - Criar algoritmos e programas para executar no navegador: client side
 - Manipular o DOM: elementos(qualquer tag html), eventos(ações do usuário), estilos(do css)
 - Javascript tambem é base de Node.js
      - Node.js: framework de JS para backend que tambem tem runtime (uma engine que faz JS poder ser executado do lado do servidor e computadores)
 - Mongo.db/GraphQL: banco de dados JS
 - React / Vue.js / Angular: Frameworks JS para desenvolvimento web/mobile
      - React Native: framework especifico para dev. mobile
 - Receber/manipular dados, tomar decisões baseados em lógica computacional, fazer loop & interações (***precisa de uma condição de saída, do contrario, quebra tudo***)   

 ### Executar JS
 - Console de browsers
 - Editores como Sublime e VSC
 - JS Fiddle https://jsfiddle.net/   

 #### Instalação Node.js
 - Pra executar scripts JS precisa utilizar o node.js
 - Instalação https://nodejs.org/pt-br/download/package-manager/   

 ##### Windows necessita tambem da instalação do chocolatey
   - Executar no Powershell como admin   

 ##### Após instalação
 - Rodar novo terminal: node -v   

 ### Variáveis
 - Possuem papel importante por permitir que reserve memória no computador/servidor para que se trabalhe no código de modo mais intuitivo, criando algoritmo mais completo.
 - Primeiro se determina o nome da variavel e o que vai receber, por exemplo "*var a = 10*"
 - var (variavel/variable) 
 - const (constant - *essa variavel não muda, o valor é imutável*)
 - let (substitui a *var*, mas a *var* ainda é usada)
 - string (**tipo variavel para conjunto de caracteres**, marcada por aspas simples ou dupla [' ou "] por exemplo *'texto qualquer'*)
 - tipagem: numero ou string
 - array (armazenam um conjunto de *coisas/valores*)   

 ### Operadores
 - Soma +
 - Subtração -
 - Multiplicar * 
 - Dividir /
 - Módulo % (é o resto da divisão dos dois primeiros)
 - Math: random(gerar numero aleatório), round (arredondar), sqrt(raiz quadrada/*square root*)
 - ***Operadores de atribuição atribuem valores (=)*** 
 - O primeiro recebe o valor do segundo: *a = b* no que *a* recebe o valor atribuido a *b*
 - No que *a += b* o valor de *a* é somado ao valor de *b* e o **resultado** é atribuido à *a* e isto pode ser feito com qualquer operação
 - *=* significa que **recebe** um valor, *==* significa que é **igual-igual mesmo**
 - *!=* pergunta se o valor é **diferente** 
 - utilizar um operador 2 vezes altera o valor; por exemplo *a = 15* ou seja *a++* sera *16* e *a--* sera *14*
 - Maior que *>* e menor que *<* tambem podem ser usados

 #### https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators   

 # Exercicio:   

 #### 1.Descrever um algoritmo pra resolver o "*problema da travessia*"

 - ***Um HOMEN precisa atravessar um rio com seu lobo, sua cabra e um maço alfafa em seu barco, no barco só cabe ele e mais um de seus pertences; não podendo deixar o lobo sozinho com a cabra nem a cabra sozinha com a alfafa***   

     1. | HOMEN | Lobo | Cabra | Alfafa | ***RIO*** | 

     2.  | Lobo | Alfafa | ***RIO*** | HOMEN | Cabra | *Homen leva a cabra* 

     3.  | HOMEN | Lobo | Alfafa | ***RIO*** | Cabra | *Homen volta sozinho*

     4.  | Alfafa | ***RIO*** | Cabra | HOMEN | Lobo | *Homen traz lobo*

     5.  | Cabra | HOMEN | Alfafa | ***RIO*** | Lobo | *Homen volta com a cabra*

     6.  | Cabra | ***RIO*** | Lobo | HOMEN | Alfafa | *Homen traz a alfafa, deixa a cabra*

     7.  | HOMEN | Cabra | ***RIO*** | Lobo | Alfafa | *Homen volta sozinho*

     8.  | ***RIO*** | HOMEN | Cabra | Lobo | Alfafa | *Homen traz cabra*


 #### 2.JS:Exibir média de 3 numeros com entradas pelo formulário HTML e enviar link no *git* ou *fiddle*

 - https://jsfiddle.net/aboyqwx0/3/