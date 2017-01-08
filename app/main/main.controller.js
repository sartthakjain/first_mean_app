angular.module('main')
.controller('mainController',['$http','$scope','$interval',function($http,$scope,$interval){

if(localStorage['User-Data']!== undefined){
  $scope.user=JSON.parse(localStorage['User-Data']);
  console.log($scope.user);
}




$scope.sendThought=function(event){
  if(event.which===13){
    var request={
      user : $scope.user.username||$scope.user.email,
      userId: $scope.user._id,
      userImage:$scope.user.image,
      content:$scope.newThought
    }

    $http.post('api/newsfeeds/post',request).success(function(response){
      console.log(response);
  //    $scope.thoughts=response;
    }).error(function(err){
      console.error(err);
    })
  }
};

function getThoughts(initial){
  $http.get('api/newsfeeds/get').success(function(response){
    if(initial){
      $scope.thoughts=response;
      console.log($scope.user.image);
    }else{
      if(response.length>$scope.thoughts.length)
      {
      $scope.incomingThoughts=response;
    }
    }
  })
};



$interval(function(){
  getThoughts(false);
  if($scope.incomingThoughts)
  {
  $scope.difference=$scope.incomingThoughts.length-$scope.thoughts.length;
}
  console.log("its working");
},1000);



$scope.showNewThoughts= function(){
  $scope.thoughts=angular.copy($scope.incomingThoughts);
  $scope.incomingThoughts=undefined;
}


//init getThoughts
getThoughts(true);

}]);
