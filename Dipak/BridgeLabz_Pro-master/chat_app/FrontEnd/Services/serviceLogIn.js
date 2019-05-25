app.service("servicelogin",function($http,$location){

    var loginuser=function(data,$scope){
        $http({
            method : "POST",
            url : "http://localhost:3000/login",
            data : data
        }).then(
            function successCallback(response){
            console.log("Login successfull at serviceLogin in client side");
                var userid = response.data.message[0]._id;
                var name = response.data.message[0].firstname;
 
           },
            function errorCallback(response){
                alert("login unsucessfully")
                console.log("registration Unsuccessfull please check your username or password");
                console.log(response);
                $scope.loginMessage = 'EmailId or Password Incorrect ';
            })
    }
})