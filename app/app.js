angular.module("firstMeanApp",['ui.router','ngFileUpload','loginView','signup','editProfile','main','follow'])
.config(function($stateProvider,$urlRouterProvider){

$urlRouterProvider.otherwise('/');

  $stateProvider
.state('login',{
  url:"/",
  templateUrl:"app/login/login.view.html",
  controller:"loginController",
})


      .state('signUp',{
        url:"/signup",
        templateUrl:"app/signup/signup.html",
        controller:"signupController"
      })
      .state('editProfileState',{
        url:"/editProfile",
        templateUrl:"app/editProfile/editProfile.view.html",
        controller:"editProfileController"
      })
      .state('mainState',{
        url:"/main",
        templateUrl:"app/main/main.html",
        controller:"mainController"
      })
      .state('follow',{
        url:"/follow-users",
        templateUrl:"app/follow/follow.html",
        controller:"followController"
      })
});
