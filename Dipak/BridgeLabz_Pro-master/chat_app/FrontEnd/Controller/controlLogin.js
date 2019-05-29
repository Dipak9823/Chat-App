app.controller('controlLogin',function($scope,serviceLogIn){
    $scope.login=function(){
        var user={
            'Email' : $scope.Email,
            'Password': $scope.Password
        }
        console.log("In Log in");
        console.log(user);
        serviceLogIn.LogIn(user,$scope);
    }
});

