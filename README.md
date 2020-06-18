<h1 align="center">
    <img src="public/projectPreview/presentationnlwsite.gif"/>
</h1>

## Indice

- [Sobre](#-sobre)
- [Tecnoligias utilizadas](#-tecnoligias-utilizadas)
- [Como baixar e utilizar o projeto](#-como-baixar-e-utilizar-o-projeto)
- [Um pouco do walkthrough](#-um-pouco-do-walkthrough)

---

## Sobre

Projeto **Ecoleta** referente a trilha starter da <next_level_week/> #01, evento  online e gratuito oferecido pela <a href="https://rocketseat.com.br/">Rocketseat</a> com aulas ministradas pelo expert na Rocketseat Mayk Brito e um grupo dedicado no discord para tirar dúvidas e interagir com outros devs participando da semana.
Este projeto consistiu em criar um site chamado Ecoleta no qual uma empresa  pode cadastrar um ponto de coleta de resíduos com nome, imagem, endereço e objetos nos quais essa empresa recebe e o usuário pode pesquisar esses pontos por cidade.

---

## Tecnoligias utlilizadas

- HTML
- CSS
- NODEJS
- EXPRESS
- NUNJUCKS
- SQLITE3

---

## Como baixar e utilizar o projeto

```bash
    # clonar o repositorio
    $ git clone https://github.com/rodrigobcintra/nextlevelweek-1.git

    # acessar a pasta
    $ cd nextlevelweek-1

    # ligar o servidor local
    $ npm start

```
Em seguida é somente entrar no navegador e digitar

- localhost:3000

Caso queira utilizar sem os dados previamente salvos, é necessário excluir o arquivo antes de ligar o servidor local

- scr/database/database.db

---

## Um pouco do walkthrough

Para configuração do servidor foi utilizado o nodejs, primeiro utilizando os seguintes comandos:

- Para configuração dos módulos necessários para a configuração do servidor.

        npm init -y

- Modulo para possibilitar subir um servidor

        npm install express

- Para instalar a dependência de nodemon como ferramenta de desenvonvimento para não ter de ficar manualmente reiniciando o servidor durante o desenvolvimeto.

        npm install nodemon -D

- Para iniciar o servidor, segundo as configurações em package.json

        npm start

- Para tornar o HTML mais dinâmico, poder reaproveitar sessões das paginas utilizando blocos e possibilitar utilizar estruturas condicionais no HTML foi utilizado o nunjucks, o qual foi instalado com o seguinte comando

        npm install nunjucks

- E para o banco  de dados foi utilizado o sqlite3, para criar e gerenciar o banco de dados localmente. Tive problemas ao instalar ,talvez por está rodando a current version do nodejs e apenas consegui instalar com o comando

        npm install https://github.com/mapbox/node-sqlite3/tarball/master

---

Desenvolvido por Rodrigo B Cintra

# nextlevelweek-1
