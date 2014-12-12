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
      controllerAs: 'auth',
      resolve: {
        data: function(authFactory){
          authFactory.disallowLogin();  
        }
      }
    })
    .when('/logout', {
      template: '',
      controller: 'AuthController',
      resolve: {
        data: function(authFactory){
          authFactory.logout();  
        }
      }
    })
    .when('/changePassword', {
      templateUrl: 'views/changePswd.html',
      controller: 'AuthController',
      controllerAs: 'auth',
      private: true
    })
    .when('/new', {
      templateUrl: 'views/create.html',
      controller: 'WishController',
      controllerAs: 'wish',
      private: true
    })
    .when('/:id', {
      templateUrl: 'views/wish.html',
      controller: 'ShowController',
      controllerAs: 'show',
      private: true
    })
    .when('/:id/edit', {
      templateUrl: 'views/create.html',
      controller: 'EditController',
      controllerAs: 'wish',
      private: true
    })
    .otherwise({redirectTo: '/'});
  })
  .run(function($rootScope, authFactory){
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, priorRoute){
      if(nextRoute.$$route && nextRoute.$$route.private){
        authFactory.requireLogin();
      }
    })
  })
}());
