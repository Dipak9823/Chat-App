/*****************************************************************************************************
 *@Purpose -CHATAPP
 *@file    - controlResetPassword.js
 *@author  - Dipak Patil
 *@version - 1.0
 *@since   - 26/05/2019
 **************************************************************************************************/

app.controller('controlResetPassword', function ($scope,$stateParams, serviceResetPassword) {

    // for registration form
    $scope.resetPassword = function () {
        var user = {
            'password': $scope.password,
            'cpassword': $scope.cpassword
        }

        console.log("register calling", user);
        if ($scope.password != $scope.cpassword) {
            $scope.message = "password not match ";
        } else {
            serviceResetPassword.resetPassword(user, $scope,$stateParams.token);
        }
    }
});