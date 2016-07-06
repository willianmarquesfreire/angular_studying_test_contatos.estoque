angular.module("estoque")
    .factory("estoqueAPI", estoqueAPI);

function estoqueAPI($http, config) {
    var _getProdutos = function () {
        return $http.get(config.baseUrl);
    };
    var _getProduto = function (id) {
        return $http.get(config.baseUrl + "/" + id);
    };
    var _saveProduto = function (produto) {
        return $http.post(config.baseUrl, produto);
    };
    var _deleteProduto = function(id) {
        return $http.delete(config.baseUrl + "/" + id);
    };
    var _putProduto = function(id, produto) {
        return $http.put(config.baseUrl + "/" + id, produto);
    }
    return {
        getProdutos: _getProdutos,
        getProduto: _getProduto,
        saveProduto: _saveProduto,
        deleteProduto: _deleteProduto,
        putProduto: _putProduto
    }
}

