(function() {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['RegisterService', 'myInfo'];
function SignupController(RegisterService, myInfo) {
  var reg = this;

  reg.user = myInfo;

  reg.submit = function () {
    var promise = RegisterService.validateMenuItem(reg.user.favorite);
    // console.log(promise);

    promise.then( function (response) {
      reg.user.menuItem = response.data;
      RegisterService.saveUser(reg.user);
      reg.completed = true;
      reg.invalidItem = false;
    }).catch( function (error) {
      reg.completed = false;
      reg.invalidItem = true;
    });
  };
}


})();
