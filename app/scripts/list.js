angular.module('app.list', [])
  .controller('ListCtrl', function ( $scope, $window , PasswordHandler ) {
    $scope.list = {};
    $scope.curPassword = '';
    $scope.getAll = function () {
      $scope.list = PasswordHandler.getAll();
    };

    $scope.decryptPassword = function ( pw ) {
      $scope.curPassword = PasswordHandler.decryptPassword( pw );
    };
    $scope.getAll();
  });