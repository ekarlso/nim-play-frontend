'use strict';
/*jshint esnext: true */

class RunCtrl {
  constructor ($scope, $http) {
    $scope.versions = {
      values: [
        {name: "devel"},
        {name: "v0.10.2"}
      ]
    };

    $scope.cc = {
      values: [
        {name: "gcc"},
        {name: "tcc"},
        {name: "ucc"}
      ]
    };

    $scope.selects = {
      version: $scope.versions.values[0],
      cc: $scope.cc.values[0]
    }

    $scope.opts = {
      checks: true,
      threads: false,
      stackTrace: false
    };

    $scope.input = undefined;

    $scope.results = [];

    $scope.execRun = function() {
      var opts = $scope.opts;
      opts.cc = $scope.selects.cc.name;

      var run = {
        version: $scope.selects.version.name,
        input: $scope.input,
        compilerOptions: opts
      };

      $http.post('/runs', run).success(function(result) {
        $scope.results.push(result);
      })
    }
  }
}

RunCtrl.$inject = ['$scope', '$http'];

export default RunCtrl;
