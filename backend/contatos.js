var http = require('http');
var port = 3000;

 var contatos = [
        {"nome": "Willian10", "telefone": "99998888", "cor": "yellow", "data": new Date()},
        {"nome": "Willian5", "telefone": "99994444", "cor": "blue", "data": new Date()},
        {"nome": "Willian2", "telefone": "99995556", "cor": "red", "data": new Date()}
    ];

var operadoras = [
        {nome: "Oi", codigo: 14, categoria: "Telefone", preco: 2},
        {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
        {nome: "Tim", codigo: 41, categoria: "Celular", preco: 3}
    ];

http.createServer(function(req, res) {
   
    var queryData = "";
    var url = req.url;

    res.writeHead(200, {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", 
            "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"});

    switch (req.method) {
        case 'GET':
            if (url == "/contatos") {
                res.write(JSON.stringify(contatos));
            } else {
                res.write(JSON.stringify(operadoras));
            }
        break;
        case 'POST':
            req.on('data', function(data) {
                queryData += data;
                if (queryData.length > 1e6) {
                    queryData = "";
                    res.writeHead(413, {'Content-Type': 'text/plain'}).end();
                    req.connection.destroy();
                }
            });

            req.on('end', function(data) {
                var obj = JSON.parse(queryData);
                console.log(obj);
                if (url == "/contatos") {
                    contatos.push(obj);
                } else {
                    operadoras.push(obj);
                }
            });
            
        break;
        case 'PUT':
            var $index = req.url.toString().substr(1,req.url.length); 
            var obj = {};

            req.on('data', function(data) {
                queryData += data;
            });
            req.on('end', function(data) {
                var obj = JSON.parse(queryData);
            });

            delete obj["index"];

            if (url == "/contatos") {
                contatos[$index] = obj;
            } else {
                operadoras[$index] = obj;
            }
        break;
        case 'DELETE':
            var $index = req.url.toString().substr(1,req.url.length);
            if (url == "/contatos") {
                var result = contatos.splice($index, 1);
            } else {
                var result = operadoras.splice($index, 1);
            }
        break;
    }

    res.end();
}).listen(port, function() {
    console.log("Server Iniciado!");
});