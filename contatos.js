var http = require('http');
var port = 3000;
http.createServer(function(req, res) {
    var contatos = [
        {"nome": "Willian10", "telefone": "99998888", "cor": "yellow", "data": new Date()},
        {"nome": "Willian5", "telefone": "99994444", "cor": "blue", "data": new Date()},
        {"nome": "Willian2", "telefone": "99995556", "cor": "red", "data": new Date()}
    ];
    console.log(contatos);
    res.writeHead(200, {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", 
            "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"});
    res.write(JSON.stringify(contatos));
    res.end();
}).listen(port, function() {
    console.log("Server Iniciado!");
});