;(function(){
  'use strict';
  .controller ('wishController', function($http, $routeParams){
    var vm = this;
    var id = $routeParams.id;
    var url = 'https://nss-group-wishlist.firebaseio.com' + id + '.json';
    $http.get(url)
    .success(function(data){
      vm.newWish = data;
    })
    .error(function(err){
      alert(err);
    });
    
    vm.addNewWish = function(){
      
      vm.wish.push(vm.newWish);
      vm.newWish = null;
    };
  });
  
}());
