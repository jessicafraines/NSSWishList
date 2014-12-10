;(function(){
    'use: strict';
    angular.module("wishApp") 
    function deleteItem(itemID, cb){
      var url = 'https://nss-group-wishlist.firebaseio.com/' + itemID + '.json';
       
      $http.delete(url)
        .success(function(){
            cb();
        })
        .error(function(err){
        console.log(err);
        });
}
})();

