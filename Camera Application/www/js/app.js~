angular.module('ngCordova', ['ionic', 'ngCordova'])

.factory('Camera', function($q) {

   return {
      getPicture: function(options) {
         var q = $q.defer();

         navigator.camera.getPicture(function(result) {
            q.resolve(result);
         }, function(err) {
            q.reject(err);
         }, options);

         return q.promise;
      }
   }

})

.controller("CamController",function($scope, $ionicPopup, $ionicListDelegate, Camera) {
   $scope.images = [];
   $scope.takePicture = function (options) {
      var options = {
         quality : 100,
         targetWidth: 600,
         targetHeight: 300,
         sourceType: 1
      };

      Camera.getPicture(options).then(function(imageData) {
         $scope.images.push(imageData);
      }, function(err) {
         console.log(err);
      });

   };
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
})
