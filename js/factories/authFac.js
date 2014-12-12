;(function(){
  'use strict';
  angular.module('wishApp')
  .factory('authFactory', function($rootScope,FIREBASE_URL, $location){
    var authFactory = {},
    ref = new Firebase(FIREBASE_URL);

    $rootScope.user = ref.getAuth();
  
  authFactory.requireLogin = function(){
    if(!_isLoggedIn()){
      $location.path('/login');
    } else if (_hasTemporaryPassword()){
      $location.path('/changePassword');
    }
  };
  authFactory.disallowLogin = function(){
    if (_isLoggedIn()) {
      $location.path('/');
    }
  };

  function _isLoggedIn(){
    return !!ref.getAuth();
  }

  function _hasTemporaryPassword(){
    return ref.getAuth().password.isTemporaryPassword;
  }

  authFactory.login = function(email, pswd, cb){
    ref.authWithPassword({
        email : email,
        password: pswd
      }, function(error, authData){
       if (error === null) {
         $rootScope.user = authData;
         ref.child('users').child(authData.uid).child('authData').set(authData);
          cb();
        } else {
          alert('Login unsuccessful');
        }
      }
    );
  };

  authFactory.logout = function(cb){
    ref.unauth(function(){
      $rootScope.user = null;
      cb();
    });
  };

  authFactory.register = function(email, pswd, cb){
    ref.createUser({
      email : email,
      password : pswd
    }, function (error){
      if (error === null){
        cb();
      }else{
        alert("Oops, something didn't work. Please try again");
      }
    }
    );
  };

  authFactory.forgotPassword = function(email, cb){
    ref.resetPassword({
      email : email
    }, function(error){
      if(error === null){
        alert('Password reset email sent, check your mail');
        cb();
      } else {
        alert('Email address not recognized, please try again');
      }
    }
  );
  };
  authFactory.changePassword = function(oldPswd, newPswd, cb){
    ref.changePassword({
      email : ref.getAuth().password.email,
      oldPassword : oldPswd,
      newPassword : newPswd
    }, function(error){
      if(error === null){
        alert('Password changed successfully');
        cb();
      } else {
        alert('Error changing password');
      };
      }
    );
  };

  return authFactory;
  })
}());
