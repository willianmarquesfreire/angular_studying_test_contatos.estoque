app.controller("listaTelefonicaCtrl",function($scope, $filter, contatosAPI, operadorasAPI, serialGenerator) {
                $scope.app = "Lista Telefonica";

                var API = "http://localhost:3000";

                var carregarContatos = function() {
                    contatosAPI.getContatos().success(function(data, status) {
                        $scope.contatos = data;
                        console.log(data);
                    });
                };
                
                var carregarOperadoras = function() {
                    operadorasAPI.getOperadoras().success(function(data, status) {
                        $scope.operadoras = data;
                        console.log(data);
                    });
                };

                $scope.adicionarContato = function(contato) {
                    contato.serial = serialGenerator.generate();
                    contato.data = new Date();
                    contatosAPI.saveContato(contato).success(function(data) {
                        delete $scope.contato;
                        $scope.contatoForm.$setPristine();
                        carregarContatos();
                        console.log(data);
                    }).error(function(data, status) {
                        console.log("ERRO");
                    });;
                }
                $scope.apagarContatos = function(contatos) {
                    $scope.contatos = contatos.filter(function(contato) {
                        if (!contato.selecionado) return contato;
                    });
                }
                $scope.isContatoSelecionado = function(contatos) {
                    return contatos.some(function(contato) {
                        return contato.selecionado;
                    });
                }
                $scope.ordenarPor = function(campo) {
                    $scope.criterioDeOrdenacao = campo;
                    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
                }
                carregarContatos();
                carregarOperadoras();
            });