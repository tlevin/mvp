angular.module('app', ['app.login', 'app.generate', 'ui.router'])
  
  .config(function( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('login', {
        url: '/',
        controller: 'LoginCtrl',
        views: {
          'main' : { templateUrl: 'partials/login.html' }
        }
      })
      .state('generate', {
        url: '/create',
        controller: 'GenerateCtrl',
        views: {
          'nav' :  { templateUrl: 'partials/nav.html'},
          'main' : { templateUrl: 'partials/generate.html' }
        }
      })
      .state('list', {
        url: '/list',
        controller: 'ListController',
        views: {
          'nav' :  { templateUrl: 'partials/nav.html'},
          'main' : { templateUrl: 'partials/generate.html' }
        }
      });
    });