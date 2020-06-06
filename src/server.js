const express = require("express")
const server = express()

// importar o banco de dados que foi exportado
const db = require("./database/db.js")

// configurar a pasta public
server.use(express.static("public"))
// habilitar o uso do req.body
server.use(express.urlencoded({extended: true}))

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    // enquanto esta no desenvolvimento deixar noCache = true
    noCache: true
})

// configurar caminhos para a aplicação
// pagina inicial
// "atraves do verbo get que pediu a '/' rodar a função"/
// configuração do caminho '/' para o servidor executar a função
// req: request
// res: response
server.get("/", (req, res) => {
    // renderizar a pagina
    return res.render("index.html")
})

// pagina criar ponto de coleta
server.get("/create-point", (req, res) => {
    // req.query: query string da url
    // mas so funciona com o verbo get
    // console.log(req.query)
    return res.render("create-point.html")
})
server.post("/saved-point", (req, res) => {
    // req.body: pega o corpo do formulario
    // mas tem que ser habilitado anteriormente
    console.log(req.body)
    // inserir dados no banco de dados
    const query = `
    INSERT INTO places(
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);`
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]
    function afterInsertData(err){
        if(err){
            console.log(err)
            return res.send("Erro no cadastro!")
        }
        console.log("Cadastrado com sucesso")
        // retornar o que foi salvo no database
        console.log(this)
        // retornar a pagina renderizada com um objeto 
        // chamado saved 
        return res.render("create-point.html", {saved: true})
    }
    // callback function/ passada como referencia, 
    // para ser executada apenas depois de rodar
    db.run(query, values, afterInsertData)
})

// pagina resultados
server.get("/search-results", (req, res) => {
    // pegar por query strings
    const search = req.query.search
    if(search == ""){
        // pesquisa vazia
        return res.render("search-results.html", {total: 0})
    }
    // pesquisa que contenha a palavra usando valor injetado
    // % no valor injetado significa que pode ter palavras 
    // antes ou depois da palavra pesquisada
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
        if(err){
            console.log(err)
            // dica de complemento criar pagina de erro
            return res.send("Erro no cadastro!")
        }
        const total = rows.length
        console.log("Aqui estão os registros")
        console.log(rows)
        // mostrar a pagina html com os dados do banco de dados
        // que esta na propriedade de nome places
        return res.render("search-results.html", {places: rows, total: total})
    })
})

// ligar o servidor
server.listen(3000)