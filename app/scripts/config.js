angular.module('app.config', [])
  .controller('ConfigCtrl', function ( $scope, $location, PasswordHandler ) {
    $scope.configureUser = function ( password ) {
      PasswordHandler.configUser( password );
        $location.path('/');
    };
  });