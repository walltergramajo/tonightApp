'use strict';

angular.module('applicationtonightApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/list-family', {
        templateUrl: 'app/list-family/list-family.html',
        controller: 'ListFamilyCtrl'
      });
  });
