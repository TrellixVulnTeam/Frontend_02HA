# Gulp   

# **Kit de ferramentas de automação de tarefas baseado em JS**    

### Alguns objetivos:
- Agilizar desenvolvimento
- Organizar orquestração de arquivos
- Reduzir repetitividade
- Flexibilização de configurações, voce cria as configurações necessárias de cada projeto
- Ajuda a focar no que realmente importa no processo de desenvolvimento
- Trabalha de forma muito otimizada, aplicando transformações no arquivo ainda na memoria, ou seja, antes de gravar qualquer coisa no disco rigido vendo que o processo de gravação no disco rigido é mais custoso no quesito de performance, gerenciando isso de modo muito mais rapido na memoria.   

### Automatizar:   

- Melhora organizacional
- Evitar repetição de tarefas redundantes, evitando erros por repetição
- Ajuda a focar no que importa; como por exemplo, a experiencia do usuário    

### Principais recursos   

- Minificação de arquivo: *pegar um arquivo e reduzir os espaços desnecessários*
- Otim. de imagen: *reduz informação desnecessária, "limpar" os bits, deixar arquivo mais rapido etc*
- Mescla de arquivos de dif. origens: *compila (copia) todos arquivos em um unico arquivo, importando um unico arquivo na pagina HTML*   

## Transpilação
- Processo da transformação da escrita em outras linguas de programação: escrever em typescript e converte em javascript puro
- **Todo processo executado a partir do node.js; por meio do gulp-cli**   

### Global x Local   

- Instalação do node é global; qualquer terminal de comando abre node
- Gulp precisa ser instalado localmente, ou seja, **em cada diretorio do projeto, precisando ser reinstalado em cada diretório**   

#### Gerenciador de pacote   

- NPM: *Node packet manager*
- Usa node.js
- Permite configuaração rapida e facil de ambiente de plguins Node, importando os plugins necessários.   

### Babel   

#### [babeljs.io](https://www.npmjs.com/package/gulp-babel)

- Compilador de JS