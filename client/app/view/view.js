'use strict';

angular.module('applicationtonightApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/view/:id', {
        templateUrl: 'app/view/view.html',
        controller: 'ViewCtrl'
      });
  });
