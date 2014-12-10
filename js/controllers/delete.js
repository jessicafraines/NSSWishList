;(function(){
    'use: strict';
    angular.module('wishApp')
  .controller('DeleteController', function(WishlistFactory){
      var vm = this;

      vm.deleteItem = function(itemID){      
        WishlistFactory.deleteItem(itemID, function(){
          delete vm.items[itemID];
          console.log('ITEMID', itemID);
        });
      };
  });
})();

