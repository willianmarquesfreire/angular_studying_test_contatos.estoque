angular.module("listaTelefonica")
    .config(interceptorsConfig); 

function interceptorsConfig($httpProvider) {
    $httpProvider.interceptors.push("timestampInterceptor");
    $httpProvider.interceptors.push("errorInterceptor");
    $httpProvider.interceptors.push("loadingInterceptor");  
}