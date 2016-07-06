angular.module("listaTelefonica").config(serialGeneratorConfg);

function serialGeneratorConfg(serialGeneratorProvider) {
    serialGeneratorProvider.setLength(10);
}