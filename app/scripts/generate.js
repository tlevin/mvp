angular.module('app.generate', [])
  .controller('GenerateCtrl', function( $scope ) {
    $scope.brainGen = '';
    $scope.genPassword = function () {
      var zombieThings = ['brains', 'flesh', 'undeath', 'undead', 'monster', 'walker'];
      var zombiePhrase = zombieThings[Math.floor(Math.random()*zombieThings.length)];
      var basePhrase = Math.random().toString(36).slice(-8);
      var randIndex = Math.floor(Math.random()*basePhrase.length)
      $scope.brainGen = basePhrase.slice(0, randIndex).concat(zombiePhrase).concat(basePhrase.slice(randIndex));
    };
  })