var http = require('http');
var port = 3000;
var app = http.createServer(function(req,res) {
    var estoque = [
                    {descricao: '5', qtd: 6, valor: 1.00},
                    {descricao: '3', qtd: 3, valor: 5.00},
                    {descricao: '4', qtd: 1, valor: 2.00},
                    {descricao: '2', qtd: 2, valor: 4.00}
                ];
     console.log(estoque);
     res.writeHead(200, {
            'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", 
            "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"});
     res.write(JSON.stringify(estoque));
     res.end();
}).listen(port, function() {
    console.log("Server Iniciado!");
});