angular.module("listaTelefonica")
    .directive("uiAlert", uiAlertDirective);

function uiAlertDirective() {
    return {
        templateUrl: "view/alert.html",
        replace: true,
        restrict: "E",
        scope: {
            title: "@", //vincula valor
            message: "=" //vincula data-bind
        },
        transclude: true
    };
}