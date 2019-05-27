var app = angular.module('chatapp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider)
{
   
    $stateProvider.state('login',{
        url:'/login',
        templateUrl:'/templates/login.html',
        controller:'controlLogin'
    })

    $stateProvider.state('register',{
        url:'/register',
        templateUrl:'templates/register.html',
        controller:'controlRegister'
    })

    $stateProvider.state('forgotPassword',{
        url:'/forgotPassword',
        templateUrl:'templates/forgotPassword.html',
        controller:'controlForgotPassword'
   })

    $stateProvider.state('resetPassword',{
        url:'/resetPassword/:token',
        templateUrl:'templates/resetPassword.html',
        controller:'controlResetPassword'
    })
    $urlRouterProvider.otherwise('login');

})