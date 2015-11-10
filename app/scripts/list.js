angular.module('app.list', [])
  .controller('ListCtrl', function ( $scope, $window , PasswordHandler ) {
    $scope.list = null;
    $scope.curPassword = '';
    $scope.pwWrong = false;

    $scope.getAll = function () {
      $scope.list = PasswordHandler.getAll();
    };

    $scope.decryptPassword = function ( site, pw ) {
      try {
        var key = PasswordHandler.authUser( pw );
        $scope.curPassword = PasswordHandler.decryptPassword( site, key );
        if( $scope.curPassword ) {
          $scope.pwWrong = false;
        } else {
          $scope.pwWrong = true;
        }
      } catch(e) {
      }
    };
    $scope.getAll();
  });