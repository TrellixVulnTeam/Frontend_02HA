# [APIs](https://aws.amazon.com/pt/what-is/api/) - **Application Programming Interface**     

- *Interface de Programamção de Aplicação* ; ou seja, um conjunto de normas que possibilita comunicação entre plataformas através de padrões e protocolos. Por meio dessa devs podem  criar software e aplicativo capaz de se comunicar com outras plataformas   

## Aplicação - Software com função distinta    

## Interface - Nesse sentido a interface pode ser pensada como um contrato de serviço entre duas aplicações definindo que as duas se comunicam por meio de solicitações e respostas
- A documentação das respectivas APIs contém informações sobre como os desenvolvedores devem estruturar as solicitações/respostas   

### Como funcionam:   

- Geralmente a arquitetura da API é explicada entre o cliente e o servidor; a aplicação que envia solicitação é chamada de cliente e a que envia resposta é chamada de servidor.
- Existem 4 maneiras que APIs funcionam: *SOAP, RPC, WebSocket e REST*   

#### SOAP - Simple Object Access Protocol (*Protocolo de Acesso a Objetos Simples*): Cliente e servidor trocam mensagens usando XML. Esta é uma API menos flexível que era mais popular no passado.

#### RPC - Remote Procedure Calls (*Chamadas de Procedimento Remoto*). O cliente conclui uma função (ou um procedimento) no servidor e o servidor envia a saída de volta ao cliente.     

#### WebSocket - Desenvolvimento de API Web moderno que usa objetos JSON para transmitir dados oferencendo dados para comunicação bidimensional entre aplicativos cliente e o servidor e o servidor pode enviar mensagens de retorno a clientes conectados. É mais efficiente que *REST*    

#### REST - Representational state transfer  (*Transferência Representacional de Estado*) - Mais populares e flexíveis encontradas na Web atualmente. O cliente envia solicitações ao servidor como dados. O servidor usa essa entrada do cliente para iniciar funções internas e retorna os dados de saída ao cliente.   

- Estabelece padrões de comunicação entre fronte-end e back-end 
- Métodos:
    1. Get
    2. Post
    3. Put
    4. Delete

### Exemplos:   

- [Vtex](https://developers.vtex.com/vtex-rest-api/reference/post-product)
- [Swagger](https://petstore.swagger.io/#/pet/findPetsByStatus)
- [Github Users](https://docs.github.com/en/rest/reference/users)
- [JsonPlaceholder Posts](https://jsonplaceholder.typicode.com/posts)   