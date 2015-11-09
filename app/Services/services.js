angular.module('app.services', [])
  .factory('PasswordHandler', function( $window, $location ){
    
    var generatePw = function() {
      //Establish zombie-themed injected words
      var zombieThings = ['brains', 'flesh', 'Zombie', 'undeath', 'undead', 'monster', 'walker'];
      //choose a random word
      var zombiePhrase = zombieThings[Math.floor(Math.random()*zombieThings.length)];
      //create a random 12 digit
      var basePhrase = Math.random().toString(36).slice(-12);
      //choose a random place to inject zombie word
      var randIndex = Math.floor(Math.random()*basePhrase.length);
      //join basephrase with zombie phrase
      return basePhrase.slice(0, randIndex).concat(zombiePhrase).concat(basePhrase.slice(randIndex+zombiePhrase.length));
    };

    var authUser = function() {

    };

    var savePassword = function ( site, password) {
      if($window.localStorage.getItem('PasswordList') === null ) {
        $window.localStorage.setItem('PasswordList', '{}')  
      }
      var currentList = JSON.parse($window.localStorage.getItem('PasswordList'));
      if( currentList[site] === undefined ){
        currentList[site] = sjcl.encrypt(site, password);
        $window.localStorage.setItem('PasswordList', JSON.stringify(currentList));
      }
    };
    var decryptPassword = function ( site ) {
      var currentList = $window.localStorage.getItem('PasswordList');
      if( currentList[site] !== undefined ) {
        return sjcl.decrypt(currentList[site], site)
      }
    };

    var getAll = function () {

    }

    return {
      generatePw : generatePw,
      authUser : authUser,
      savePassword : savePassword,
      getAll : getAll
    };
  })