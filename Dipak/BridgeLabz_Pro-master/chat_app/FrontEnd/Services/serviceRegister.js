
app.service('serviceRegister', function ($http, $location) {

    this.registerUser = function (data, $scope) {
        console.log("data on service register--- ", data);
        
        $http({
            method: 'POST',
            url: 'http://localhost:3000/registration',
            data: data

        }).then(
            function successCallback(response) {
                alert("register successfull")
                console.log("register successfull ");
                console.log(response);
                $scope.message = "register successfull";
                $location.path('/login');

            },
            function errorCallback(response) {
            alert("register Unsuccessfull")
                console.log("register Unsuccessfull ");
             $scope.message =response.data.message.message;


            }
        );
    }
});