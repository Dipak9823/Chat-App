app.controller($scope,serviceLogin);

var login=function($scope){
    var user={
        Email : "$scope.email",
        Password: "$scope.password"
    }
    console.log(user);
    serviceLogin.LogIn(user,$scope);
}