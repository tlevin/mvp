angular.module('app.login', [])
  .controller('LoginCtrl', function ( $scope, $location, $window, PasswordHandler ) { 

    $scope.isConfig = function () {
      if( $window.localStorage.getItem('com.1p4z') === null ){
        PasswordHandler.emptyList();
        $location.path( '/config' );
      }
    };
    $scope.noLogin = false;

    $scope.login = function () {
      if( PasswordHandler.authUser( $scope.userPass )){
        $location.path('/list');
      } else {
        $scope.noLogin = true;
      }
      
    };
    $scope.isConfig();
  });