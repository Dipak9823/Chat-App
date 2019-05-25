

app.controller("controllerRegister",($scope, serviceRegister)=>{

    $scope.register=function(){
        var user={
            FirstName: "$scope.FirstName",
            LastName: "$scope.LastName",
            Email: "$scope.LastName",
            Password: "$scope.Password",
            CPassword: "$scope.CPassword"
        }

        if($scope.Password==$scope.CPassword) {
            $scope.message="Password Does Not Match";
        } else {
            serviceRegister.registerUser(user,$scope)
        } 
        

    }

})