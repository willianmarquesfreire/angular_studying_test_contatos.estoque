var API = "http://localhost:3000";
angular.module("estoque")
    .controller("estoqueCtrl", estoqueCtrl);

function estoqueCtrl($scope, $http, estoqueAPI, $location) {
    listagemAberta = false;
    console.log($scope.$id);
    $scope.inverteListagem = function () {
        listagemAberta = !listagemAberta;
        $scope.listagemLink = (listagemAberta == true) ? "#/" : "#/listar";
    }

    var carregaProdutos = function () {
        estoqueAPI.getProdutos().success(function (data, status) {
            $scope.estoque = data;
        });
    };

    carregaProdutos();

    $scope.cadastrar = function (produto) {
        estoqueAPI.saveProduto(produto)
            .then(function (response) {
                delete $scope.produto;
                $scope.produtoForm.$setPristine();
                carregaProdutos();
            })
    };
    $scope.deletaProduto = function ($index) {
        estoqueAPI.deleteProduto($index)
            .then(function (response) {
                carregaProdutos();
            })
    };
    $scope.alteraProduto = function ($index) {
        $scope.produto = $scope.estoque[$index];
        $scope.$parent.produto = $scope.produto;
        $scope.$parent.produto.index = $index;
        $scope.$parent.produto.alterar = true;
    }
    $scope.alteraProdutoSalvar = function ($index) {
        delete $scope.$parent.produto.alterar;
        estoqueAPI.putProduto($index, $scope.$parent.produto)
            .then(function (response) {
                $scope.limpaProduto();
                $scope.produtoForm.$setPristine();
            });
    };
    $scope.limpaProduto = function () {
        window.location.assign("/estoque");
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioOrdenacao = campo;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    }
}