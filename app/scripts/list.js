angular.module('app.list', [])
  .controller('ListCtrl', function ( $scope, PasswordHandler ) {
    $scope.list = {};

    $scope.getAll = function () {
      $scope.list = PasswordHandler.getAll();
    };

    $scope.decryptPassword = function ( pw ) {
      $scope.displayPw = PasswordHandler.decryptPassword( pw );
    };
    $scope.getAll();
    console.log($scope.list)
  });