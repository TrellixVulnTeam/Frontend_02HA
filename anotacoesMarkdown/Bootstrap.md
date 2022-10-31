# Bootstrap  

- Biblioteca de codigo fonte aberto; ou seja que permite alteração dos estilos conforme a necessidade com uma serie de elementos ja prontos, ja sendo testado e usado previamente só necessitanto importar as bibliotecas no seu projeto.  

- Biblioteca modular, trabalhando com componentização com esses componentes sendo mais ricos do que usualmente no padrão do HTML, por trabalhar junto com o CSS e o Javascript.  

- Grid System (Sistema em grades) facilitando desenvolvimento de layout responsivo, tambem pensando no mobile-first, ou seja, primeiro para dispositivos móveis com menos resolução e então com layouts maiores/mais horizontais.  

- Amplamente usado, atualamente *(15/6/22)* na versão 5, podendo encontrar versões mais antigas caso necessário sendo muito facil voltar para versões anterioes pelo fato da comunidade tentar manter o maximo de compatibilidade entre uma versão e outra.   

- Por ser tão amplamente usado, a propria comunidade testa exaustivamente, trazendo vantagem de não ter muitos problemas de compatibilidade entre navegadores pela comunidade ja desenvolveu o codigo para que funcione em diversos navegadores permitindo que voce foque mais na sua propria necessidade/necessidade do seu negocio.  

## Biblioteca X Framework  

- **Não são termos sinônimos**  

- Biblioteca oferece objetos e classes prontos para uso te oferencendo mais recursos para trabalhar, sendo só preciso importar a ferramenta necessária e aplicar na situação.  

- Framework te oferece um conjunto de bibliotecas, podendo separar as biblioteca caso seja necessário.  

- Biblioteca, portanto te traz recursos para que voce possa trabalhar/adiantar seu trabalho ja o Framework te traz metodologia de trabalhar, ou seja, precisa entender o conceito antes de começar a trablhar te ensinando a pensar no desenvolvimente de layout.  

- Ou seja: **Biblioteca te guia ao destino e Framework te ensina a chegar.**  

## Desenvolvimento agil.  

- Não tange só a velocidade, mas a estrutura do projeto, a metodologia, como pensar no projeto etc.  

- Bootstrap consegue ajudar a quebrar o projeto em partes, ajudando no desenvolvimento de projetos maiores, podendo entregar em ciclos evolutivos menores porem mais frequentes; por exemplo, podendo deselvolver toda pagina pra smartphone e então desenvolver para desktop.  

- **Maior conceito é entregar valor para o negocio, visando entregar algo que gera maior diferencial para o negocio**  

- Ciclos evolutivos permitem que voce evolua no processo, podendo fazer retrospectivas e sempre melhorando não só o desenvolvimento como voce como desenvolvedor; outro ponto tambem é evitar repetição, preferindo por exemplo usar uma função que faça tudo isso para voce, só aplicando em seu projeto.  

- Minimo Produto Viável - Parte menor do projeto que da pra usar como produto, ajudando caso precise refaturar e evitando o *"re-trabalho"*; o bootstrap te traz muita ferramente para agilizar, mas se for mal usado vai trazer muito *re-trabalho* não sendo incomun refatoração, mas evitar ter que refazer tudo.  

- É necessário entar envolvido E comprometido com o projeto; estar envolvido é fazer sua parte do projeto, estar comprometido é ajudar ou pedir ajuda caso necessário no projeto envolvendo tambem as *soft-skills* de saber lidar com outras pessoas.  

#### **O importante é aprender quando aplicar cada ferramenta**  


### Componentes  

- Templates re-utilizaveis; blocos com funções diversas 
- BS tem diversos componentes disponiveis; o desafio é saber qual usar quando; para mais detalhes dos componentes em *https://getbootstrap.com/docs/5.0/components/accordion/*
- alguns exemplos:
    - Accordion - menu horizontal colapsável 
    - Button - botão que realiza ação quando clicado
    - Card - uma 'carta', um container de conteudo multiplas variações tanto de funções como de opções
    - Collapse - esconde algun conteudo do site, como por exemplo um menu de escolha/indice/menu com links
    - Modal - Utiliza o plugin de js do bootstrap  

#### Helpers
- Incrementam componentes; alterar cor, posicionamento etc.  

#### Utilities  

- Utilidades usadas para modificar os padrões pré-definidos pelo BS, por exemplo: *tamanho, cor, posição, espaçamento, alinhamento etc.*
- https://getbootstrap.com/docs/5.0/utilities/api/  

#### Icones  

- Enquanto bootstrap não inclui icones propriamente dito, tem bibliotecas extansivas de icones.
- [fontawesome](https://fontawesome.com/)
- [featherIcons](https://feathericons.com/)
    
##### O real importante do bootstrap é a **class**, que é o metodo que o JS usa para interagir com o HTML  
#### Vantagens do bootstrap  

- Uso muito simples, tudo que precisa é um import de CSS para que voce possa aplicar as classes e começar a estruturar seu layout, não precisando criar componentes individuais.  

- É facil de dividir seu codigo com outros desenvolvedores, tanto como é facil usar codigos de outros.  

- [Documentação completa](https://getbootstrap.com/) 

- Abstrair estilos; ou seja, não precisa ficar escrevendo o CSS ou entender de como foi escrito, sendo só necessário escrever o HTML aplicando as classes e os modelos do bootstrap até que o projeto fique satisfatório.  

#### Desvantagens  

- Uso excessivo do bootstrap, no seu projeto pode ser prejudicial caso não seja necessário, trazendo componentes inuteis e possivelmente afetando o projeto negativamente como um todo.  

- Sobrepõe estilos, podendo ser necessário **rescrever muitas** regras herdadas e cada vez que uma regra é lida pelo navegador é aplicada e cada subscrição sobrecarrega o navegador, causando lentidão.  

- A abstração pode tambem ser uma desvantagem, causando preguiça ja que voce não precisa pensar muito e isso te faz "esquecer" e não se importar e em alguns casos necessitam.  

- ### Nunca é interessante ao mercado um desenvolver que dependa de ferramentas pra trabalhar.  

### O importante é entender o como, o básico, o essencial para que não precisa se preocupar sempre; mas nunca não se importar.  

## Exemplo  

#### Botão com bootstrap  

``` 
<a class= "btn btn-lg">Botão</a>
```  

#### Botão sem bootstrap   

```
<a class ="botao botao_grande">Botão</a>  

<style>
html {
    font-size:XXX
}  

.botao {
    background-color: XXX
    border: XXX XXX XXX
    border-radius: XXX
    display: XXX
    font-family: XXX
    font: XXX XXX XXX
    padding: XXX
    margin: XXX
}
</style>
```   

*Etc...*  

## Em suma: O bootstrap é uma ferramenta que "programa por voce" em partes, e como toda ferramenta, não se pode deixa-la virar uma muleta e não substitui o desenvolvedor.

