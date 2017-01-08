angular.module('loginView')
    .controller('loginController',['$scope',"$http","$state",function($scope,$http,$state){

      $scope.emailValid=false;

            if(localStorage['User-Data']){
              $scope.loggedIn=true;
            }  else {
                $scope.loggedIn=false;
              }

      $scope.logUserIn=function(){
        $http.post('api/user/login',$scope.login).success(function(response){
            localStorage.setItem('User-Data',JSON.stringify(response));
            $scope.loggedIn=true;
            $scope.displayState();
        }).error(function(error){
          console.log(error);
        });
      }


      $scope.checkUsername=function(){

        $http.post('api/user/login/checkUsername',$scope.login).success(function(response){
            console.log(response);
            $scope.emailValid=response.isValid;
          if($scope.emailValid){
            console.log("email validated in front end");
          }
          //animation for username field
          //enable password field
        })
      }

      $scope.logOut= function(){
        localStorage.clear();
        $scope.loggedIn=false;
        $scope.displayState();
      }



$scope.displayState=function(){
  if($scope.loggedIn)
  {
  $state.go('mainState');
}
else{
  $state.go('login');
}
}

    }]);
