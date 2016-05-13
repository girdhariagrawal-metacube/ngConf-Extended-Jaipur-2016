angular.module('starter', ['ionic'])

.controller("TodoController",function($scope, $ionicPopup, $ionicListDelegate) {

  $scope.tasks = [
    {title: "Wake Up", completed : false},
    {title : "Breakfast" , completed : false},
    {title : "Bathing", completed : false},
  ];

  $scope.newtask = function() {
      $ionicPopup.prompt({
          title : "New Task",
          inputPlaceholder : "What to do?",
          okText  : "Create",
      }).then(function(res) {
        if(res) $scope.tasks.push({title : res, completed : false});
      });
  }


  $scope.edit = function(task) {
    $scope.data = {response : task.title};
    $ionicPopup.prompt({
      title : "Edit Task",
      scope : $scope
    }).then(function(res) {
      if(res !== undefined) task.title = $scope.data.response;
      $ionicListDelegate.closeOptionButtons();
    });
  }


})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
