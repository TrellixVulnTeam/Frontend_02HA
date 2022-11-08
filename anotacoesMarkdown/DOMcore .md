# DOM *(Document Object Model)*   

 - **Modelo de objeto do documento**; estrutura de documento da web que é usado pra representar HTML ou XML sendo considerado uma interface de programação e não uma linguagem.   

 - DOM representa um documento com uma arvore logica, cada *branch* termina em um *node* e cada node contem um *objeto* e o DOM permite acesso à arvore, **podendo usar para alterar a estrutura, estilo ou conteudo do documento.**   

 - Essencial pro JS entender o modelo de paginas da web; fornecendo recursos para que se programe a partir dele.  

 - Funciona disponibilizando a API *(application programming interface)* , ja tendo rotinas e padrões definidos, trabalhando com metodos e funções montando a arvore de elementos do HTML transformando a pagina em objeto javascript e um de seus recursos são seletores: *(formas de selecionar determinado elemento)* , gerando objetos *(nó/node)*  

 - Por exemplo:   
```
                //< html>  

                //    < head>< /head>   

                //    < body>< /head>   

                //< /html>     

```
 - Ou no caso de um objeto JS:  

```
        objeto = {
            html : {
                head : {},
                body : {
                    h1 : {}
                },
            }
        }   
```

## DOM x JS  

- DOM pode ser usado por outras linguagens e o JS **precisa** do DOM pra trabalhar numa pagina da web.  

### Vantagem do JS  

- O código é executado pelo navegador; **tirando a carga da operação de processamento do desenvolvedor** e levando ao usuário *(ao inves de voce 'bancar o custo' do processamento, o usuário banca)* , portanto tornando a pagina mais dinâmica e **evita requisições desnecessárias** como por exemplo o conceito de SPA (single-page applications) que são paginas que não necessitam recarregar para computar alterações na mesma *(não precisa ficar atualizando)* **agindo de modo muito mais rapido às ações do usuário**  

### Desvantagens do JS  

- Código é executado pelo navegador, e o navegador tem qta. de processamento limitada, sendo limitada pela propria maquina do usuário correndo o risco do usuário ter uma maquina menos potente e ser travado pela sua aplicação.
- **O conteúdo NÃO FICA visivel pra indexadores de busca** , não aparecendo nas primeiras paginas dos mecanismos de buscas; relevancia na busca é de suma importancia para que to site tenha relevancia.
- Alteração em tempo de execução, sem back-end/utilização de qualquer forma de banco de dado/armazenamento local, **não fica salvo**. JS só é executado depois que toda a pagina é carregada, ou seja, se tem muito script demora ao usuário ver o conteúdo da pagina  

#### Callback
  
- Callback é passada como argumento de outra função e/ou chamada quando um evento for acontecido, ou quando uma parte de código receber uma resposta de que estava à espera; ou seja **libera a aplicação para que outras ações sejam tomadas sem que ela fique aguardando o retorno de processos síncronos, esperando uma resposta remota, ou com alto consumo de processamento.**
- Seleciona o objeto e disponibiliza métodos - *objeto.callback()* como por exemplo: *document.getElementById(id)*  

- Outros exemplos em: 
document.getElementeByTagName('div') <-- *seleciona todos elementos da pagina*
document.createElement('div')   <-- *cria o elemento na pagina*
parentNode.appendChild(node) // *html.appendChild(body)* <-- *insere um novo elemento dentro de um node*
element.setAttribute('name')    <-- *define o atributo do elemento*
element.getAttribtue('name')    <-- *pega o atributo do elemento*
elemente.addEventListener()     <-- *algo que observa o elemento*  

##### O inspetor de site é um sistema do proprio navegador que consulta a API do DOM, usando pra montar e exibir todas informações pro desenvolvedor. (o playground do dev)   

### Seletores   

- (...)
- Descritos por: 
    - *tag, ID, class, name, query*
    - *callback*
    - getElementById()          <-- Mais específico
    - getElementsByTagName()    <-- Mais genérico
    - getElementsByName()       
    - getElementsByClassName()  
    - querySelectorAll // *#id | .class*   

### Formulários   

- Precisa evitar que usuário passe dado incorreto, direcionando melhor o uso do sistema e proteger injeção de dados maliciosos.
- Tambem para evitar erros e formatar dados com objetivo de facilitar o processamento.

### Referencias:   

- [DOM](https://dom.spec.whatwg.org/)    

- [Tecnologia JS:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)