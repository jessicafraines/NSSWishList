;( function() {
    'use strict';
    angular.module('todoApp', ['ngRoute'])
    .controller('wishController', function($http, $routeParams) {
      var vm = this;
      var id = $routeParams.id;
      var url = 'https://nss-group-wishlist.firebaseio.com' + id + '.json';
      $http.get(url)
      .success(function(data) {
        vm.newWish = data;
      }).error(function(err) {
        alert(err);
      });

      vm.addItem = function() {
        $http.post('https://nss-group-wishlist.firebaseio.com/wishlist.json', item)
        .success(function(data) {
          cb(data);
        }).error(function(err) {
          alert(err);
        });
        vm.wish.push(vm.newWish);
        vm.newWish = null;
      };
    });
  }());
