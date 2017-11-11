(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;

  list.noItemFound = function () {
    return (list.items.length == 0);
  };
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.found = [];
  menu.searchTerm = "";

  menu.getMatchedMenuItems = function () {
    var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

    promise.then(function (response) {
      menu.found = response;
      console.log("Found:", menu.found);
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  menu.removeItem = function(itemIndex) {
    console.log('removing item ' + itemIndex);
    menu.found.splice(itemIndex, 1);
  };

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function(result) {
      var foundItems = [];

      if (searchTerm === "")
        return foundItems;

      result.data.menu_items.forEach(function(menuEntry) {
        if ((menuEntry.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) ||
          (menuEntry.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)) {
          foundItems.push(menuEntry);
        }
      });

      return foundItems;
    });
  };

}

})();
