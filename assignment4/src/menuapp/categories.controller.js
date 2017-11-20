(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService', 'items'];
function CategoriesController(MenuDataService, items) {
  var menu = this;
  menu.items = items;
  menu.allCategories = items.data;
  console.log(items.data);
}

})();
