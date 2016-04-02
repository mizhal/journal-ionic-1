angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
  .state('tabsController.focus', {
    url: '/focus',
    views: {
      'tab4': {
        templateUrl: 'templates/focus.html',
        controller: 'focusCtrl'
      }
    }
  })

  .state('tabsController.quests', {
    url: '/quests',
    views: {
      'tab5': {
        templateUrl: 'templates/quests.html',
        controller: 'questsCtrl'
      }
    }
  })

  .state('tabsController.journal', {
    url: '/journal',
    views: {
      'tab6': {
        templateUrl: 'templates/journal.html',
        controller: 'journalCtrl'
      }
    }
  })

  .state('tabsController.codex', {
    url: '/codex',
    views: {
      'tab7': {
        templateUrl: 'templates/codex.html',
        controller: 'codexCtrl'
      }
    }
  })

  .state('tabsController.map', {
    url: '/map',
    views: {
      'tab8': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/home',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/home/focus')

});