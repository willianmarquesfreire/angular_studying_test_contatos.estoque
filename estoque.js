var http = require('http');
var qs = require('querystring');
var url = require('url');

var estoque = [
    {descricao: '5', qtd: 6, valor: 1.00},
    {descricao: '3', qtd: 3, valor: 5.00},
    {descricao: '4', qtd: 1, valor: 2.00},
    {descricao: '2', qtd: 2, valor: 4.00}
    ];

var port = 3000;
var app = http.createServer(function(req,res, callback) {
    
                
     var queryData = "";
     
     res.writeHead(200, {
                'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", 
                "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"});
     res.write(JSON.stringify(estoque));
     
     switch(req.method) {
        case 'POST':
            req.on('data', function(data) {
                queryData += data;
                if(queryData.length > 1e6) {
                    queryData = "";
                    res.writeHead(413, {'Content-Type': 'text/plain'}).end();
                    req.connection.destroy();
                }
                
            });
            req.on('end', function() {
                var obj = JSON.parse(queryData);
                estoque.push(obj);
                console.log("Inserido: " + obj);
            });
            break;
        case 'GET':
            console.log('Requisitado!');
            break;
        case 'PUT':
            console.log('Alterado');
            break;
        case 'DELETE':
            //TODO: capitura rota
            var $index = req.url.toString().substr(1,req.url.length);
            var result = estoque.splice($index, 1);
            console.log('Deletado ' + result);
            break;
        default:
        console.log("ERROR!");
     }
     res.end();
}).listen(port, function() {
    console.log("Server Iniciado!");
});