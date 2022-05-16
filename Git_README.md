# Curso_Frontend

# GIT

## Conceitos de Versionamento

 - Historico
 - Controle de Versao
 - Quem alterou oque e quando
 - Todos arquivos
 - Evolucao continua

 - Arquivo A | Ver. 1 | Ver. 2
 - Arquivo B | Ver. 1 | Ver. 2

## Instalacao Git

## Criar conta

## Clonar projeto

## Commits
Informacao de alteracao 
 - apos testado todo codigo
 - git add *
 - git commit -m "mensagem"
 - git pull "puxa" alteracoes do Git
 - git push "manda" alteracoes ao Git
 - so se faz alteracao se o codigo estiver atualizado, primeir "pull" depois "push"

## Git Flow
 - Fluxo do Git
### Branchs
 - são ramificações / versões que podem correr de modo paralelo, usadas pra "teste" caso necessário
 - versionamento 0.1.2: o primeiro digito é pra "versão principal", o segundo indica mais alterações, o terceiro serve pra correção de bug e coisas mais corriqueiras, quando o ocorrem mais mudanças altera-se o segundo digito, e quando esta pronto, altera-se o primeiro
 - DOD = Definition Of Done, ou seja, critérios de aceite
 - NÃO COMITAR CODIGO SE TA QUEBRANDO A PAGINA (pode atrapalhar outros devs)
 - git checkout -b "nome" (pra criar uma branch)
 - git checkout (pra mudar de branch)

 ### Merge 
 - Mescla as Branchs (quando mesclar diretamente voce assume toda responsabilidade de qualquer erro que acontecer)
 - Pode precisar resolver conflitos manualmente 
 - git merge main (mescla as branches)

### Pull request
 - Mescla de branch no repositório
 - Permite code review (enviar para outros verem)
 - Repositorio resolve conflitos automaticamente
 