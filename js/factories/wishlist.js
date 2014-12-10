;(function(){
  'use strict';
  angular.module('wishApp')
  .factory('WishlistFactory', function($http, $location){
    function deleteItem(itemID, cb){
      var url = 'https://nss-group-wishlist.firebaseio.com/' + itemID + '.json';
      $http.delete(url)
      .success(function(){
        console.log('ITEMSSSSSSS');
        cb();
      })
      .error(function(err){
        alert('Delete no worky');
      });
    }
    function getItem(id, cb){
      var url = 'https://nss-group-wishlist.firebaseio.com/' + id + '.json';
      $http.get(url)
      .success(function(data) {
        cb(data);
      })
      .error(function(err){
        alert('wish not created, because yeah');
      });
    }
    function editItem(id, item){
      var url = 'https://nss-group-wishlist.firebaseio.com/' + id + '.json';
      $http.put(url, item)
        .success(function(data){
          $location.path('/');
        })
        .error(function(err){
          alert('Edit broke');
        });
      }
    function getItems(cb){
      var url = 'https://nss-group-wishlist.firebaseio.com/.json';
      $http.get(url)
        .success(function(data){
          cb(data);
        })
        .error(function(err){
          alert('Get items not working');
        });
      }
    function addItem(item, cb){
      $http.post('https://nss-group-wishlist.firebaseio.com/.json', item)
        .success(function(data){
          cb(data);
          $location.path('/');
        })
        .error(function(err){
          alert('nope');
        });
    };
    return{
      deleteItem: deleteItem,
      getItem: getItem,
      getItems: getItems,
      editItem: editItem,
      addItem: addItem
    };
  });
}());
