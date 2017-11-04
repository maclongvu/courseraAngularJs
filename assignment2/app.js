(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [ { 'quantity': 10, 'name': 'cookies' },
    { 'quantity': 5, 'name': 'cakes' },
    { 'quantity': 30, 'name': 'candies' },
    { 'quantity': 15, 'name': 'sugary drinks' },
    { 'quantity': 20, 'name': 'pepto bizmols' } ];

  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    var boughtItem = toBuyItems[itemIndex];
    boughtItems.push(boughtItem);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

}

})();
