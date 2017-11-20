(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath', '$q', '$timeout']
function MenuDataService($http, ApiBasePath, $q, $timeout) {
  var service = this;

  // List of shopping items
  var items = [];

  // Pre-populate a no cookie list
  items.push({
    name: "Sugar",
    short_name: "2 bags",
    description: "Sugar used for baking delicious umm... baked goods."
  });
  items.push({
    name: "flour",
    short_name: "1 bags",
    description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
  });
  items.push({
    name: "Chocolate Chips",
    short_name: "3 bags",
    description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
  });

  // Simulates call to server
  // Returns a promise, NOT items array directly
  // service.getAllCategories = function () {
  //   var deferred = $q.defer();
  //
  //   // Wait 2 seconds before returning
  //   $timeout(function () {
  //     // deferred.reject(items);
  //     deferred.resolve(items);
  //   }, 800);
  //
  //   return deferred.promise;
  // };

  service.getAllCategories = function() {
    console.log('calling get all categories');
    return $http({
      method: "GET",
      url: (ApiBasePath + '/categories.json')
    });
  };

  service.getItemsForCategory = function(categoryShortName) {
    console.log('calling to get menu items' + categoryShortName);
    return $http({
      method: "GET",
      url: (ApiBasePath + '/menu_items.json'),
      params: {
        category: categoryShortName
      }
    });
  };
}

})();
