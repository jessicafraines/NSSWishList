;(function(){
  'use strict';
  angular.module('wishApp')
  .controller('EditController', function($routeParams, WishFactory){
    var vm = this;
    var id = $routeParams.id;
    WishFactory.getItem(id, function(data){
      vm.item = data;
    });
    vm.addItem = function(){
      WishFactory.editTodo(id, vm.item);
    };
  })
}());
