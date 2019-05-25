app.service("serviceRegister",function($http,$location){

    var registerUser=function(data,$scope) {
        $http({
            method:"POST",
            url: "mongodb://localhost/register",
            data: data    
        })
    }
}).then(
    function successCallback(res){
        console.log("Register Successfully");
        console.log(res);
        $scope.message="User Register Successfully";
        $location.path('/login');

    },
    function errorCallback(res){
        console.log("Error in  login Registration");
        console.log(res);
        $scope.message="Error while register user",
        $location.path('/register');
    }
)

