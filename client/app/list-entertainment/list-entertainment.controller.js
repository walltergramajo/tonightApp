'use strict';

angular.module('applicationtonightApp')
  .controller('ListEntertainmentCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
    
    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });