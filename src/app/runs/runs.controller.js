'use strict';
/*jshint esnext: true */

class RunCtrl {
  constructor ($scope, $http) {
    $scope.versions = [
      {name: "devel"}
    ];

    $scope.cc = [
      {name: "tcc"}
    ];

    $scope.selectedVersion = $scope.versions[0];
    $scope.selectedCC = $scope.cc[0];
    $scope.input = undefined;

    $scope.results = [];

    $scope.execRun = function() {
      var run = {
        version: $scope.selectedVersion.name,
        cc: $scope.selectedCC.name,
        input: $scope.input
      };

      $http.post('/runs', run).success(function(result) {
        $scope.results.push(result);
      })
    }
  }
}

RunCtrl.$inject = ['$scope', '$http'];

export default RunCtrl;
