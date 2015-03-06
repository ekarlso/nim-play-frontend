'use strict';
/*jshint esnext: true */

import RunCtrl from './runs/runs.controller';
import NavbarCtrl from '../components/navbar/navbar.controller';

angular.module('play', ['ngSanitize', 'ui.router', 'lumx', 'ui.ace'])
  .controller('RunCtrl', RunCtrl)
  .controller('NavbarCtrl', NavbarCtrl)

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('runs', {
        url: '/',
        templateUrl: 'app/runs/index.html',
        controller: 'RunCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
