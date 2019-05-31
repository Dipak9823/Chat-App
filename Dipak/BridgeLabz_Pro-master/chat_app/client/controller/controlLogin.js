/*****************************************************************************************************
 *@Purpose -CHATAPP
 *@file    - controlLogin.js
 *@author  - Dipak Patil
 *@version - 1.0
 *@since   - 26/05/2019
 **************************************************************************************************/

app.controller('controlLogin',function($scope,serviceLogin){
    $scope.login= function(){
        var data = {
            'email':$scope.email,
            'password':$scope.password
        }
         console.log(data);
         
        serviceLogin.login(data);
    }
});