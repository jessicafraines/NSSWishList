;(function(){
  'use strict';
  angular.module('wishApp')
  .controller('AuthController', function(authFactory, $scope, $location){
    var vm = this;

    vm.login = function(){
      authFactory.login(vm.email, vm.password, function(){
        $location.path('/');
        $scope.$apply();
      })
    };

    vm.logout = function(){
      authFactory.logout(function(){
        $location.path('/');
        $scope.$apply();
      })
    };

    vm.register = function(){
      authFactory.register(vm.email, vm.password, function(){
        vm.login();
      });
    };

    vm.forgotPassword = function(){
      authFactory.forgotPassword(vm.email);
      //NEED TO ADD HOW TO RESET PASSWORD
    };
  })
}());
