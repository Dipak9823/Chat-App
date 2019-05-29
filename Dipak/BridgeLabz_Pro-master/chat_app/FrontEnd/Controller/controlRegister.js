

app.controller('controlRegister', function ($scope, serviceRegister) {

    // for registration form
    $scope.register = function () {
        var user = {
            'FirstName': $scope.FirstName,
            'LastName': $scope.LastName,
            'Email': $scope.Email,
            'Password': $scope.Password,
            //'cpassword':$scope.cpassword,
        }
        console.log('in controller');
        console.log(user);
        serviceRegister.registerUser(user,$scope);
       /* if ($scope.password != $scope.cpassword) {
            $scope.message = "password does not match ";
        } else {
            serviceRegister.registerUser(user, $scope);
            
        }*/
    }
});