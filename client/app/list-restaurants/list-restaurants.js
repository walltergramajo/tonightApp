'use strict';

angular.module('applicationtonightApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/list-restaurants', {
        templateUrl: 'app/list-restaurants/list-restaurants.html',
        controller: 'ListRestaurantsCtrl'
      });
  });
