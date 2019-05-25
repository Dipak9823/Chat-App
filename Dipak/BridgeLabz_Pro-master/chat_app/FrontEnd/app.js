var app=angular.module('chatapp', ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/login",{
        url:"/login",
        templateUrl:"template/login.html",
        controller:"controllerLogin"
    })
    .when("/register",{
        url:"/register",
        templateUrl:"template/register.html",
        controller:"controllerRegister"
    })
    .otherwise({
        redirectTo:"/"
    });

})