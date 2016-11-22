angular.module('signup')
    .controller('signupController',['$scope','$state','$http',function($scope,$state,$http){

      $scope.createUser = function(req,resp){
        $http.post('api/user/signup',$scope.newuser).success(function(response){

        }).error(function(error){
                console.log(error);
            })
      }
    }]);
