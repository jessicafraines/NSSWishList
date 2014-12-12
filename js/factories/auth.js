;(function(){
  'use strict';
  angular.module('wishApp')
  .factory('authFactory', function(FIREBASE_URL){
    var authFactory = {},
    ref = new Firebase(FIREBASE_URL);

  factory.login = function(){
  
  };

  factory.logout = function(){
  
  };

  factory.register = function(){
  
  };

  factory.resetPassword = function(){
  
  };
  return authFactory;
  };
}());
