# AJAX - Asynchronous Javascript and XML; Programação Assíncrona   

- Programação Assíncrona é uma técnica usada para que um programa possa executar uma tarefa potencialmente demorada e permanecer responsivo a outros eventos ou operações ao invés de ter que esperar que a tarefa acabe para iniciar outra. Muitas funções executadas por navegadores são assíncronas por terem a possibilidade de demora, como por exemplo:   

1. Fazer uma requisição HTTP usando *fetch()*
2. Acessar a camera/microfone com *getUserMedia()*
3. Pedir que o usuário escolha um arquivo com *showOpenFilePicker()*    

### [jQuery](https://api.jquery.com/jquery.ajax/)

#### Requisição Assíncrona 

-  É o recebimento de informação no montante que ela é disponibilizada pelo servidor; ou seja: vai mostrando/liberando conforme for carregando. *(Idealmente ja ir mostrando o que for carregando na pagina.)*

### SPA - Single Page Application 

- Applicativo ou site que interage com o usuário de modo dinamico, reescrevendo a pagina atual com informação so servidor ao invés do modo padrão do browser de carregar uma outra pagina; *basicamente, no SPA a pagina nunca refresca*

### Proxy   

- Um intermediário, normalmente um servidor, as vezes programa, usado quando se navega em diferentes redes da internet. Facilitam acesso ao conteudo na WWW interceptando requisições, continuando ou as vezes modificando a requisição.
- Uma *proxy de encaminhento* lida com pedidos de/para qualquer lugar da internet, ja uma *proxy reverso* recebe pedidos da internet e os encaminha a uma rede interna.

#### Cache; componente HTTP que guarda respostas temporariamente para que possam ser usadas subsequentemente ao alcançarem certas condições.    

## HTTP - Hyper Text Transfer Protocol (Protocolo de Transferencia de Hyper Texto)   

- A partir dele é possível obter uma série de recursos, como por exemplo decumentos HTML e diversas trocas de dados na web. **É a base de toda e qualquer troca de dado na Web** e isso é feito recebendo e enviando as requisições iniciadas pelo cliente:
```
cliente <--> HTTP <--> servidor
```
- Pelo HTTP passa tudo que é carregado na pagina de web, de imagens à anuncios.
- É o mais usado por ser o mais flexível e performático da web.    

#### GET   

- Usado pra enviar uma solicitação de requisição, ou seja, para receber uma informação.   

### [Para mais documentação](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods)    

## APIs    

- [Github Users](https://docs.github.com/en/rest/reference/users)
- [JsonPlaceholder Posts](https://jsonplaceholder.typicode.com/posts)   

### Valid. Formulário   

- Intuito de garantir preenchimento correto dos campos; validar dados, documentos, num. importantes como CPF/endereço/cartão.
- Prevenir vulnerabilidades como SQL Injection.
- **Tarefa Front-end que pode ser processada pelo backend**    

### SQL - Structured Query Language   

- Linguagem usada para banco de dados, guarda, manipula e busca em bancos de dados

#### [SQL Injection](https://www.w3schools.com/sql/sql_injection.asp)   

- Técnica de injeção de código SQL que pode causar dano ao banco de dados e uma das técnicas de hackeamento mais comun atualmente.
- É a colocação de código malicioso em declarações SQL via input em pagina de web; essencialmente **ocorre quando o "usuário" é pedido por um input de informação como userID e o usuário fornece uma declaração SQL que sera executada desconhecidamente pelo banco de dados**   

#### SQL Parameters   

- Parametros SQL para proteção contra injeções, sendo valores adicionados ao código na hora da execução de modo controlado de modo que faz o motor do SQL checar *cada* parametro para garantir que é correto para coluna e é tratado de modo *literal* e não como código SQL a ser executado.
- Basicamente: **Filtra a informação inserida no campo para que não cause danos.**