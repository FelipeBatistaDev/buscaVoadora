# Busca Voadora

Um projeto com objetivo de consultar a api Voadora da Tegra utilizando Angular 9 com apoio do prime-ng, ng-rx e bootstrap. Mostrando em uma interface simples e amigável uma busca de voôs disponíveis com o tempo e preço descritos em uma tabela.

## Iniciando o Projeto

1 - Primeiro passo para inciar o projeto é clonar o repositório localmente em sua máquina:

```
git clone https://github.com/FelipeBatistaDev/buscaVoadora.git
```
2 - Atente-se aos pré requisitos para rodar o projeto, caso não tenha algum deles na máquina não será possível executar o programa!

3 - Após clonar o projeto é necessário fazer o download das dependências rodando um comando do npm em sua raiz, caso não esteja na raiz primeiro deve rodar no prompt ou terminal:
```
cd buscaVoadora
```
e em seguida
```
npm install
```
isso irá baixar todas as dependências do projeto e deixá-lo pronto para rodar

4 - Agora com as dependências baixadas podemos executar o comando para rodar o programa e em seguida visualizá-lo no browser, então primeiro no mesmo prompt/ terminal em que rodamos o npm install iremos executar o seguinte comando:
```
ng serve
```
após terminar o processo de compilação basta digitar ou copiar o endereço abaixo no seu browser:
```
http://localhost:4200/
```
e pronto a aplicação está pronta para uso!

### Pré Requisitos

Para Rodar a aplicação precisamos ter instalados na máquina o Node e o Angular/Cli

Link para Download do Node:
```
https://nodejs.org/en/
```
Após instalar o node na máquina acesse seu terminal/prompt e digite

```
npm install -g @angular/cli
```
esse comando instalará o Angular/Cli na sua máquina

### Instalações

As instalações necessárias para o projeto são apenas as descritas na seção de pré requisitos e na etapa de Iniciando o projeto:
- Node
```
https://nodejs.org/en/
```
- Angular/Cli
```
 npm install -g @angular/cli
```
- dependencias
```
 npm install
```

## Deploy

Para deixar a aplicação pronta para o deploy basta rodar na raiz do projeto o seguinte comando:
```
 ng build --prod
```
Esse comando irá adicionar uma pasta dist no projeto com os arquivos minificados pronta para ser colocada no servidor em que desejar hospedar a aplicação

## Built With

* [Angular9](https://angular.io/) - Framework Web utilizado
* [ng-rx](https://ngrx.io/) - Controle de States da Aplicação
* [prime-ng](https://primefaces.org/primeng/showcase/#/) - componentes utilizados
* [bootstrap](https://getbootstrap.com/) - responsividade e posicionamento de elementos

## Autor

* **Felipe Batista** - *Criação Inicial* - [FelipeBatistaDev](https://github.com/FelipeBatistaDev)
