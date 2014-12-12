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

      authFactory.logout(function(){
        $location.path('/login');
        $scope.$apply();
      })

    vm.register = function(){
      authFactory.register(vm.email, vm.password, function(){
        vm.login();
      });
    };

    vm.forgotPassword = function(){
      authFactory.resetPassword(vm.email);
      };
    vm.changePassword = function(){
      authFactory.changePassword(vm.oldPassword, vm.newPassword, function(){
        $location.path('/logout');
        $scope.$apply();
      });
    };
  })
}());
