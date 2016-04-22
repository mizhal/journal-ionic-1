angular.module('app', ['ionic', 'ngResource', 'ngCordova', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'app.filters'])

.run(["$ionicPlatform", "DBWrapper", "$rootScope", function($ionicPlatform, DBWrapper, $rootScope) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    
    DBWrapper.Create();
    
  });
}])