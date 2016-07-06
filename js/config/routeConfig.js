/** Rotas de Estoque */
angular.module("estoque")
    .config(estoqueRoutes);

function estoqueRoutes($routeProvider) {
    console.log($routeProvider);
    $routeProvider.when("/listar", {
        templateUrl: "view/listagemEstoque.html",
        controller: "estoqueCtrl"
    });
    $routeProvider.otherwise({ redirectTo: "/" });
}
/** Rotas de Lista Telefonica */
angular.module("listaTelefonica")
    .config(contatosRoutes);

function contatosRoutes($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "view/contatos.html",
        controller: "listaTelefonicaCtrl",
        resolve: {
            contatos: function (contatosAPI) {
                return contatosAPI.getContatos();
            },
            operadoras: function (operadorasAPI) {
                return operadorasAPI.getOperadoras();
            }
        }
    });
    $routeProvider.when("/novocontato", {
        templateUrl: "view/novoContato.html",
        controller: "novoContatoCtrl",
        resolve: {
            operadoras: function (operadorasAPI) {
                return operadorasAPI.getOperadoras();
            }
        }
    });
    $routeProvider.when("/detalhesContato/:id", {
        templateUrl: "view/detalhesContato.html",
        controller: "detalhesContatoCtrl",
        resolve: {
            contato: function (contatosAPI, $route) {
                return contatosAPI.getContato($route.current.params.id);
            }
        }
    });
    $routeProvider.when("/error", {
        templateUrl: "view/error.html"
    });
    $routeProvider.otherwise({ redirectTo: "/" });
}