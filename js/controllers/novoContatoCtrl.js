app.controller("novoContatoCtrl",function($scope, $filter, contatosAPI, operadorasAPI, serialGenerator, $location, operadoras) {
    $scope.operadoras = operadoras.data;
                $scope.adicionarContato = function(contato) {
                    contato.serial = serialGenerator.generate();
                    contato.data = new Date();
                    contatosAPI.saveContato(contato).success(function(data) {
                        delete $scope.contato;
                        $scope.contatoForm.$setPristine();
                        $location.path("/contatos");
                    }).error(function(data, status) {
                        console.log("ERRO");
                    });
                }
            });