# Webpack   

- Responsável por fazer separação de codigo, permitindo foco no desenvolvimento individual de codigo; ou seja, um **empacotador de módulos JS** e utilizado por varios frameworks como React e Angular
- Pode unir e separar pelo **sistema de modulos** ajudando na produtividade.
- Trabalha com node.js   

### Instalação   

1. Iniciar projeto no diretório 
```
npm init -y
```
2. Instalar como dependencia de desenvolvimento
```
npm install --save-dev webpack webpack-cli
```   

### Trabalhando com HTML   

- Necessita um plugin para ampliar a possibilidade de uso:   

```
npm install --save-dev html-webpack-plugin
```

### Adicionando CSS   

- Para trabalhar com estilo tambem precisa de algumas extensões  

1. node-sass: compilador sass para node
2. sass-loader: carrega para o webpack compilar 
3. style-loader: injeta estilos na árvore de objetos (DOM)
4. css-loader: interpreta diretivas do CSS (import,..)
5. extract: extrai css do JS  

```
npm install --save-dev node-sass sass-loader style-loader css-loader mini-css-extract-plugin
```   

### Compatibilidade com Babel JS    

- Relembrado: Babel transforma codigo JS para ser mais compatível com navegadores antigos
```
npm install --save-dev @babel/core @babel/preset-env babel-loader
```   

### Trabalhando com imagens    

- Adicionar file loader
```
npm install --save-dev file-loader
```

