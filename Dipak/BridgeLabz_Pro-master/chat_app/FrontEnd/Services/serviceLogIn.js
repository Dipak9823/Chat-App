app.service("serviceLogIn",function($http,$location){

    this.LogIn=function(data,$scope){
        $http({
            method : "POST",
            url : "http://localhost:3000/login",
            data : data
        }).then(
            function successCallback(response){
                console.log("service: Response",response)
                console.log("Login successfull at serviceLogin in client side");
               //var userid = response.data.message._id;
                //var name = response.data.message.FirstName;
                localStorage.setItem("userid", JSON.stringify(data.Email));
                localStorage.setItem("name", JSON.stringify(data.FirstName));
                //localStorage.setItem("token",token);
                console.log(localStorage);

                // $scope.loginMessage = "login successful";
                $location.path('/Dashboard');
           },
            function errorCallback(response){
                alert("login unsucessfully")
                console.log("registration Unsuccessfull please check your username or password");
                console.log(response);
                $scope.loginMessage = 'EmailId or Password Incorrect ';
            })
    }
})