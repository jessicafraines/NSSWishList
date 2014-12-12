;(function(){
  'use strict';
  angular.module('wishApp')
  .factory('authFactory', function(FIREBASE_URL){
    var authFactory = {},
    ref = new Firebase(FIREBASE_URL);

  authFactory.login = function(email, pswd, cb){
    ref.authWithPassword({
        email : email,
        password: pswd
      }, function(error, authData){
        if(error === null) {
          cb();
        } else {
          alert('Login unsuccessful');
        }
      }
    );
  };

  authFactory.logout = function(cb){
    ref.unauth(function(){
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
      } else {
        alert('Email address not recognized, please try again');
      }
    }
  );
  };
  return authFactory;
  })
}());
