angular.module('app', ['app.login', 'app.generate', 'app.list', 'app.services', 'ui.router', 'ngclipboard'])
  
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
        controller: 'ListCtrl',
        views: {
          'nav' :  { templateUrl: 'partials/nav.html'},
          'main' : { templateUrl: 'partials/list.html' }
        }
      });
    });