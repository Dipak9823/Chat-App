/*****************************************************************************************************
 *@Purpose -CHATAPP
 *@file    - controlRegister.js
 *@author  - Dipak Patil
 *@version - 1.0
 *@since   - 26/05/2019
 **************************************************************************************************/

app.controller('controlRegister', function ($scope, serviceRegister) {

    // for registration form
    $scope.register = function () {
        var user = {
            'firstname': $scope.firstname,
            'lastname': $scope.lastname,
            'email': $scope.email,
            'password': $scope.password,
            'cpassword':$scope.cpassword,
        }

        console.log("register calling", user);
        if ($scope.password != $scope.cpassword) {
            $scope.message = "password does not match ";
        } else {
            serviceRegister.registerUser(user, $scope);
            
        }
    }
});