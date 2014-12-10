;(function(){
  'use strict';
  angular.module('wishApp')
  .controller('ShowController', function($routeParams, WishlistFactory){
    var vm = this;
    var id = $routeParams.id;
    WishlistFactory.getItem(id, function(data){
      vm.item = data;
    });
  })
}());
