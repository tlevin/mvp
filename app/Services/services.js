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

    var configUser = function ( password ) {
      emptyList();
      secretKey = Math.random().toString(36).slice(-24);
      $window.localStorage.setItem('com.1p4z', JSON.stringify({ 'isAuth' : true, 'sk' : sjcl.encrypt( password, secretKey) }));
    };

    var authUser = function( password ) {
      var secretKey = JSON.parse($window.localStorage.getItem('com.1p4z'));
      try {
        sjcl.decrypt( password, secretKey.sk )
        return sjcl.decrypt( password, secretKey.sk );
      } catch(e) {
        return false; 
      }
    };

    var savePassword = function ( site, password, secretKey ) {
      if($window.localStorage.getItem('PasswordList') === null ) {
        $window.localStorage.setItem('PasswordList', '{}');
      }
      var currentList = JSON.parse($window.localStorage.getItem('PasswordList'));
      currentList[site] = {'siteName' : site, 'Password' : sjcl.encrypt(secretKey, password)};
      $window.localStorage.setItem('PasswordList', JSON.stringify(currentList));
    };
    var decryptPassword = function ( site, secretKey ) {
      var currentList = JSON.parse($window.localStorage.getItem('PasswordList'));
      try {
        return sjcl.decrypt(secretKey, currentList[site].Password)
      } catch(e) {
        return false;
      }
    };

    var getAll = function () {
      var currentList = JSON.parse($window.localStorage.getItem('PasswordList'));
      return currentList;
    };

    var emptyList = function () {
      $window.localStorage.setItem('PasswordList', '{}');
    };

    return {
      generatePw : generatePw,
      authUser : authUser,
      savePassword : savePassword,
      getAll : getAll,
      decryptPassword : decryptPassword,
      configUser: configUser,
      emptyList: emptyList
    };
  })