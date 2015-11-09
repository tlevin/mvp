angular.module('app.login', [])
  .controller('LoginCtrl', function( $scope, $location ) { 
    $scope.password = 'Brains4Me';
    $scope.noLogin = false;

    $scope.login = function () {
      if( $scope.userPass === $scope.password ){
        $location.path ( '/list' );
        $scope.noLogin = false;
      } else {
        $scope.noLogin = true;
      }
    };
  })