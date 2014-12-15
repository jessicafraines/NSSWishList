;(function(){
  'use strict';
  angular.module('wishApp')
  .controller('ChangePasswordController', function(authFactory, $scope, $location){
    var vm = this;

    vm.changePassword = function(){
      authFactory.changePassword(vm.oldPassword, vm.newPassword, function(){
        $location.path('/logout');
        $scope.$apply();
      });
    };
  })
}());
