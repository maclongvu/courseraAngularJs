(function() {
"use strict";

angular.module('public')
.service('RegisterService', RegisterService);

RegisterService.$inject = ['$http', 'ApiPath'];

function RegisterService($http, ApiPath) {
  var service = this;

  var user = {};

  service.validateMenuItem = function (menuItem) {
    var response =  $http.get(ApiPath + '/menu_items/' + menuItem + '.json');
    return response;
  }

  service.saveUser = function (regUser) {
    user = regUser;
    // console.log(user);
  }

  service.getUser = function () {
    return user;
  }

  service.clearUser = function() {
    user = {};
  }
}
})();
