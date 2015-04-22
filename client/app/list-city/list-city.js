'use strict';

angular.module('applicationtonightApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/list-city', {
        templateUrl: 'app/list-city/list-city.html',
        controller: 'ListCityCtrl'
      });
  });
