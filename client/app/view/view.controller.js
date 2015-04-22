'use strict';

angular.module('applicationtonightApp')
  .controller('ViewCtrl', function ($scope, $http, socket, $routeParams) {
    $scope.awesomeThings = {};

    $http.get('/api/things/'+ $routeParams.id ).success(function(thing) {
      console.log('WORKING');
      $scope.thing = thing;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

  })