var API = "http://localhost:3000";
            estoque.controller("estCtrl", function($scope, $http) {
                
                var carregaProdutos = function() {
                    $http.get(API).success(function(data, status){
                        $scope.estoque = data;
                    });
                };
                
                carregaProdutos();
                
                $scope.cadastrar = function(produto) {
                    $http.post(API, produto)
                        .then(function(response) {
                            console.log($scope.produto);
                            delete $scope.produto;
                            $scope.produtoForm.$setPristine();
                            carregaProdutos();
                        })
                };
                $scope.deletaProduto = function($index) {
                    $http.delete(API + '/' + $index)
                        .then(function(response) {
                            carregaProdutos();
                        })
                };
                $scope.alteraProduto = function($index) {
                    $scope.produto = $scope.estoque[$index];
                    $scope.produto.index = $index;
                    $scope.produto.alterar = true;
                }
                $scope.alteraProdutoSalvar = function($index) {
                    delete $scope.produto.alterar;
                    $http.put(API + '/' + $index, $scope.produto)
                        .then(function(response) {
                            delete $scope.produto;
                            $scope.produtoForm.$setPristine();
                        });
                };
                $scope.limpaProduto = function() {
                    $scope.produtoForm.$setPristine();
                    delete $scope.produto;
                };
                $scope.ordenarPor = function(campo) {
                    $scope.criterioOrdenacao = campo;
                    $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
                }
                
            });