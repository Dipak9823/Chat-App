angular.module("abc",
"abc.auth",
"ngRoute"

)   
.config(function($routeProvider,$httpProvider){
    $routeProvider

    .when('/signin', {
        templateUrl: "auth/signin.html",
        controller: 'AuthController'
    })
    .when('/signup',{
        templateUrl: "auth/signup.html",
        controller: "AuthController"
    })
    $httpProvider.interceptors.push('AttachTokens');

})