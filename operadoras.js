var http = require('http');
var port = 3001;
http.createServer(function(req, res) {
    var operadoras = [
        {nome: "Oi", codigo: 14, categoria: "Telefone", preco: 2},
        {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
        {nome: "Tim", codigo: 41, categoria: "Celular", preco: 3}
    ];
    console.log(req);
    res.writeHead(200, {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"});
    res.write(JSON.stringify(operadoras));
    res.end();
}).listen(port, function() {
    console.log("Server Iniciado!");
});