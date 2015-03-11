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

    $scope.selects = {
      version: $scope.versions.values[0]
    };

    $scope.compilerOptions = "--cc:gcc";
    $scope.input = undefined;

    $scope.results = [];
    $scope.running = false;

    $scope.execRun = function() {
      var run = {
        version: $scope.selects.version.name,
        input: $scope.input,
        compilerOptions: $scope.compilerOptions.split(" ")
      };

      $http.post('/runs', run).success(function(result) {
        result.output = result.output.join("\n");
        $scope.results.push(result);
      });
    };

    $scope.aceLoaded = function(_editor) {
      var session = _editor.getSession();
      session.setTabSize(4);
      session.setUseSoftTabs(true);
    };
  }
}

RunCtrl.$inject = ['$scope', '$http'];

export default RunCtrl;
