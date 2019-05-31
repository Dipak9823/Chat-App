
/*****************************************************************************************************
 *@Purpose -CHATAPP
 *@file    -controlForgotPassword.js
 *@author  - Dipak Patil
 *@version - 1.0
 *@since   - 26/05/2019
 **************************************************************************************************/
app.controller('controlForgotPassword', function ($scope, serviceForgotPassword) {

    $scope.forgotPassword = function () {
        var data = {
            'email': $scope.email,
            // 'password': $scope.password
        }
        serviceForgotPassword.forgotPassword(data, $scope);
    }
});