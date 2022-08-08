# Préprocessamento   

- Processo de interpretação intermediária, ou seja, antes do arquivo final ser interpretado pelo navegador, ele passa por um pre-processamento pela biblioteca executada
- Alguns dos objetivos: *Prevenção de erros, **organização**, reaproveitamento, etc*
- **Organização é crucial, especialmente no caso de varios contribuintes**
-  Advento de uma boa organização é conseguir *reaproveitar* o código; por exemplo: escrever um reset.css gigantesco que resolve "tudo" e usar em mais de um projeto
- 



## SASS; *CSS with superpower*   

- Responsável por trazer funcionalidades novas ao CSS, permitindo que programe o CSS de modo mais facil & produtivo.
- Pode introduzir variáveis E possuir transpilador
- *https://sass-lang.com/* 
- ***npm install -g sass*** (node)
- Mais famoso/usado por ser *(em teoria)* mais *facil*.   

## Stylus; *Expressivo, dinâmico e robusto*   

- CSS simplificado; pode omitir { } e ; 
- Do contrário, funciona parecido com CSS estruturalmente.
- *https://stylus-lang.com*   

## Less CSS; *É o css, com um pouco a mais*

- *Idem*
- Mais parecido tambem com JS
- *https://lesscss.org/#*
- *npm install less --save-dev*    

## PostCSS ; *Ferramenta pra transformar CSS com JS*

- MUITO mais parecido com JS 
- *https://postcss.org*

### Todos são alterações/modificações do CSS; instalado pelo npm   

#### Identação/Hierarquia   

- Estrutura os componentes, evitando sobreposição
- Segue regras parecidas a da herança de código   

### Partials   

- Modularização de código em pequenos *snippets*
- *snippets* são *'pedaços'* de código que podem ser re-usados em projetos diferentes 
- 