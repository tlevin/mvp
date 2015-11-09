angular.module('app.generate', [])
  .controller('GenerateCtrl', function( $scope, $window, PasswordHandler ) {
    $scope.brainGen = '';
    $scope.test = ''
    $scope.genPassword = function () {
      $scope.brainGen = PasswordHandler.generatePw();
    };
    $scope.savePassword = function () {
      PasswordHandler.savePassword( $scope.userSite, $scope.brainGen );
      $scope.test = $window.localStorage.getItem('Password');
    }
  });