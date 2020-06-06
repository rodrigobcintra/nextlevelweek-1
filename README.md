Projeto referente a trilha starter da <next_level_week/> #01, evento  online e gratuito oferecido pela Rocketseat com aulas ministradas pelo expert na Rocketseat Mayk Brito e um grupo dedicado no discord para tirar dúvidas e interagir com outros devs participando da semana.
Este projeto consistiu em criar um site chamado Ecoleta no qual uma empresa  pode cadastrar um ponto de coleta de resíduos com nome, imagem, endereço e objetos nos quais essa empresa recebe e o usuário pode pesquisar esses pontos por cidade.
Para isso foram utilizadas as linguagens HTML, CSS e JavaScript para implementar a aplicação. Para configuração do servidor foi utilizado o nodejs, primeiro utilizando os seguintes comandos:
    npm init -y -> para configuração dos módulos necessários para a configuração do servidor.
    npm install express -> modulo para possibilitar subir um servidor
    npm install nodemon -D -> para instalar a dependência de nodemon como ferramenta de desenvonvimento para não ter de ficar manualmente reiniciando o servidor durante o desenvolvimeto.
    npm start -> para iniciar o servidor, segundo as configurações em package.json
    npm install nunjucks -> para tornar o HTML mais dinâmico para   poder reaproveitar sessões das paginas utilizando blocos e possibilitando utilizar estruturas condicionais no HTML.
E para o banco  de dados foi utilizado o sqlite3, para criar e gerenciar o banco de dados localmente. Tive problemas ao instalar ,talvez por está rodando a current version do nodejs e apenas consegui instalar com o comando -> npm install https://github.com/mapbox/node-sqlite3/tarball/master# nextlevelweek-1
# nextlevelweek-1
