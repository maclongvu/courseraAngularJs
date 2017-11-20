(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', 'item'];
function ItemsController(MenuDataService, item) {
  var catItems = this;
  catItems.item = item;
  catItems.catitems = item.data;
  catItems.title = 'this is somethig';
  console.log(item.data);
}

})();
