angular.module('app.list', [])
  .controller('ListCtrl', function ( $scope, $window , PasswordHandler ) {
    $scope.list = {};
    $scope.curPassword = '';
    $scope.pwWrong = false;

    $scope.getAll = function () {
      $scope.list = PasswordHandler.getAll();
    };

    $scope.decryptPassword = function ( site, pw ) {
      try {
        var key = PasswordHandler.authUser( pw );
        $scope.curPassword = PasswordHandler.decryptPassword( site, key );
        $scope.pwWrong = false;
      } catch(e) {
        $scope.pwWrong = true;
      }
    };
    $scope.getAll();
  });