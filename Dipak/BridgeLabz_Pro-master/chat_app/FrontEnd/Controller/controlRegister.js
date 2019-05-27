

app.controller('controlRegister', function ($scope, serviceRegister) {

    // for registration form
    $scope.register = function () {
        var user = {
            'FirstName': $scope.firstname,
            'LastName': $scope.lastname,
            'Email': $scope.email,
            'Password': $scope.password,
            //'cpassword':$scope.cpassword,
        }

        console.log("register calling", user);
        serviceRegister.registerUser(user,$scope);
       /* if ($scope.password != $scope.cpassword) {
            $scope.message = "password does not match ";
        } else {
            serviceRegister.registerUser(user, $scope);
            
        }*/
    }
});