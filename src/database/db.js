// importar dependencia do sqlite3
// informando que aparecam mensagens no terminal
const sqlite3 = require("sqlite3").verbose()
// criar o objeto que ira fazer operacoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")
// utilizar o objeto de banco de dados, para as operacoes
// exportar o db.js
module.exports = db
// db.serialize(() => {
//     // com comandos sql
//     // 1 criar uma tabela
//     db.run(`CREATE TABLE IF NOT EXISTS places(
//         id  INTEGER PRIMARY KEY AUTOINCREMENT,
//         image TEXT,
//         name TEXT,
//         address TEXT,
//         address2 TEXT,
//         state TEXT,
//         city TEXT,
//         items TEXT
//     );`)
//     // 2 inserir dados na tabela
//     const query = `
//     INSERT INTO places(
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);`
//     const values = [
//         "https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//         "Colectoria",
//         "Guilherme Gemballa, Jardim América",
//         "Nº 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]
//     function afterInsertData(err){
//         if(err){
//             return console.log(err)
//         }
//         console.log("Cadastrado com sucesso")
//         // retornar o que foi salvo no database
//         console.log(this)
//     }
//     // callback function/ passada como referencia, 
//     // para ser executada apenas depois de rodar
//     db.run(query, values, afterInsertData)
//     // 3 Consultar os dados da tabela
//     db.all(`SELECT * FROM places`, function(err, rows){
//         if(err){
//             return console.log(err)
//         }
//         console.log("Aqui estão os registros")
//         console.log(rows)
//     })
//     // 4 Deletar um dado da tabela
//     db.run(`DELETE FROM places WHERE id = ?`, [], function(err){
//         if(err){
//             return console.log(err)
//         }
//         console.log("Registro deletado com sucesso!")
//     })
// })