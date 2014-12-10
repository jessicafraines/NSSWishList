;(function(){
  'use strict';
  angular.module('wishApp')
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'views/wishlist.html',
      controller: 'WishController',
      controllerAs: 'wish'
    })
    .when('/new', {
      templateUrl: 'views/create.html',
      controller: 'WishController',
      controllerAs: 'wish'
    })
    .when('/:id', {
      templateUrl: 'view/wish.html',
      controller: 'ShowController',
      controllerAs: 'show'
    })
    .when('/:id/edit', {
      templateUrl: 'views/create.html',
      controller: 'EditController',
      controllerAs: 'wish'
    })
    .otherwise({redirectTo: '/'});
  })
}());
