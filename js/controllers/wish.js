;( function() {
    'use strict';
    angular.module('wishApp')
    .controller('WishController', function(WishlistFactory, $location) {
      var vm = this;


      WishlistFactory.getItems(function(data){
        vm.items = data;
      });

      vm.addItem = function() {
        WishlistFactory.addItem(vm.newItem, function(data){
          vm.items = vm.items || {};
          vm.items[data.name] = vm.newItem;
        });
      };

      vm.deleteItem = function(itemID){
        WishlistFactory.deleteItem(itemID, function(){
          delete vm.items[itemID];
        });
      };
    });
  }());
