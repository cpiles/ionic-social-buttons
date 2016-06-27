angular.module('app', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })
  .state('social', {
      url: '/home/:social',
      params:{social:''},
      templateUrl: 'templates/social.html',
      controller: 'SocialCtrl'
    });
  $urlRouterProvider.otherwise('/home');
})
.controller('HomeCtrl', function($scope) {})
.controller('SocialCtrl', function($scope,$stateParams) {
  $scope.social = $stateParams.social;
});
