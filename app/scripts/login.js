angular.module('app.login', [])
  .controller('LoginCtrl', function ( $scope, $location, $window, PasswordHandler ) { 

    $scope.isConfig = function () {
      if( $window.localStorage.getItem('com.1p4z') === null ){
        $location.path( '/config' );
      }
    };
    $scope.noLogin = false;

    $scope.login = function () {
      if( PasswordHandler.authUser( $scope.userPass )){
        console.log( 'You matched' );
      } else {
        console.log( 'You errored' );
      }
      
    };
    $scope.isConfig();
  });