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
    .when('/login', {
      templateUrl: 'views/auth.html',
      controller: 'AuthController',
      controllerAs: 'auth'
    })
    .when('/logout', {
      template: '',
      controller: 'AuthController',
    })
    .when('/new', {
      templateUrl: 'views/create.html',
      controller: 'WishController',
      controllerAs: 'wish'
    })
    .when('/:id', {
      templateUrl: 'views/wish.html',
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
