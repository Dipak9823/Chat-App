var app=angular.module('myapp',[]);
app.controller("mycontroller",function($scope){
    $scope.submit=function(){
        console.log($scope);
        var data=$.param({
           people: JSON.stringify({
                FirstName : $scope.fname,
                LastName  : $scope.lname,
                Email     : $scope.email,
                Password  : $scope.password
            })
        });


        $http.post("/registration", data).success(function(data, status) {
            console.log('Data posted successfully');
          })
    }
})