'use strict';
/*jshint esnext: true */

class RunCtrl {
  constructor ($scope, $http) {
    $scope.versions = {
      values: [],
      loading: true
    };

    $http.get('/versions').success(function(result) {
      var versions = [];
      angular.forEach(result, function(value, index) {
        versions.push({name: value});
      });
      $scope.versions.values = versions;
      $scope.versions.loading = false;
    })

    $scope.selects = {
      version: undefined
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
