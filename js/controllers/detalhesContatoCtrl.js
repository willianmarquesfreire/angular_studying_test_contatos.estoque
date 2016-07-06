angular.module("listaTelefonica")
    .controller("detalhesContatoCtrl", detalhesContato);

function detalhesContato($scope, contato) {
    $scope.contato = contato;
}