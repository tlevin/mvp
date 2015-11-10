angular.module('app.generate', [])
  .controller('GenerateCtrl', function( $scope, $window, PasswordHandler ) {
    $scope.brainGen = null;
    $scope.pwWrong = false;
    $scope.genPassword = function () {
      $scope.brainGen = PasswordHandler.generatePw();
    };
    $scope.savePassword = function () {
      if ( $scope.brainGen === '' ) {
        $scope.genPassword();
      }
      try {
        PasswordHandler.savePassword( $scope.userSite, $scope.brainGen, PasswordHandler.authUser($scope.userPass) );
        $scope.pwWrong = false;
      } catch(e) {
        $scope.pwWrong = true;
      }
      $scope.userSite = '';
      $scope.brainGen = '';
      $scope.userPass = '';
    };
  });