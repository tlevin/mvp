angular.module('app.generate', [])
  .controller('GenerateCtrl', function( $scope, $window, PasswordHandler ) {
    $scope.brainGen = '';
    $scope.genPassword = function () {
      $scope.brainGen = PasswordHandler.generatePw();
    };
    $scope.savePassword = function () {
      if ( $scope.brainGen === '' ) {
        $scope.genPassword();
      }
      PasswordHandler.savePassword( $scope.userSite, $scope.brainGen );
      $scope.userSite = '';
      $scope.brainGen = '';
    }
  });