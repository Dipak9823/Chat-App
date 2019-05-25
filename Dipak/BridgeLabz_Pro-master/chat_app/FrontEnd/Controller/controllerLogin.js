app.controller($scope,serviceLogin);

var login=function($scope){
    var user={
        Email : "$scope.Email",
        Password: "$scope.Password"
    }
    console.log(user);
    serviceLogin.LogIn(user,$scope);
}