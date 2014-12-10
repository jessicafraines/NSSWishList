;(function(){
  'use strict';
  angular.module('wishApp')
  .controller('EditController', function($routeParams, WishlistFactory){
    var vm = this;
    var id = $routeParams.id;

    WishlistFactory.getItem(id, function(data){
      vm.newItem = data;
    });
    vm.addItem = function(){
      WishFactory.editTodo(id, vm.newItem);
    };
  })
}());
