(function() {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['myInfo', 'ApiPath'];
function MyInfoController(myInfo, ApiPath) {
  var $ctrl = this;

  $ctrl.myInfo = myInfo;

  console.log(myInfo);
  $ctrl.basePath = ApiPath;
}
})();