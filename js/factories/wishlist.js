;(function(){
  'use strict';
  angular.module('wishApp')
  .factory('WishlistFactory', function(FIREBASE_URL, $rootScope, $http, $location){

    function _wishUrl(id){
      if (id) {
        return FIREBASE_URL + '/users/' + $rootScope.user.uid + '/tasks/' + id + '.json';
      } else {
        return FIREBASE_URL + '/users/' + $rootScope.user.uid + '/tasks.json';
      }
    }

    function deleteItem(itemID, cb){
      var url = FIREBASE_URL + itemID + '.json';
      $http.delete(_wishUrl(itemId))
      .success(function(){
        console.log('ITEMSSSSSSS');
        cb();
      })
      .error(function(err){
        alert('Delete no worky');
      });
    }
    function getItem(id, cb){
      $http.get(_wishUrl(id))
      .success(function(data) {
        cb(data);
      })
      .error(function(err){
        alert('wish not created, because yeah');
      });
    }
    function editItem(id, item){
      $http.put(_wishUrl(id), item)
        .success(function(data){
          $location.path('/');
        })
        .error(function(err){
          alert('Edit broke');
        });
      }
    function getItems(cb){
      var url = 'https://nss-group-wishlist.firebaseio.com/.json';
      $http.get(_wishUrl())
        .success(function(data){
          cb(data);
        })
        .error(function(err){
          alert('Get items not working');
        });
      }
    function addItem(item, cb){
      $http.post(_wishUrl(), item)
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
