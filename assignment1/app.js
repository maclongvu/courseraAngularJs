(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishInput = "";
  $scope.message = "";

  $scope.checkMeal = function () {
    var str = $scope.dishInput;

    if (str == "") {
      $scope.message = "Please enter data first";
    } else {
      var dishList = str.split(',');
      var count = 0;
      dishList.forEach( function(curr) {
        if (curr.trim().length > 0) {
          count++
        }
      });
      if (count == 0) {
        $scope.message = "Please enter data between commas (,)";
      } else if (count > 3) {
        $scope.message = "Too much!";
      } else {
        $scope.message = "Enjoy!";
      }
    }
    return;
  };

}

})();
