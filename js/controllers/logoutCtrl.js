;(function(){
  'use strict';
  angular.module('wishApp')
  .controller('LogoutController', function(authFactory, $scope, $location){

    authFactory.logout(function(){
      $location.path('/login');
      $scope.$apply();
    })
  })
}());
