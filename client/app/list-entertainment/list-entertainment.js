'use strict';

angular.module('applicationtonightApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/list-entertainment', {
        templateUrl: 'app/list-entertainment/list-entertainment.html',
        controller: 'ListEntertainmentCtrl'
      });
  });
