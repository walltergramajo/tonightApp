'use strict';

angular.module('applicationtonightApp')
  .controller('PostCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing, date: $scope.thingDate, category: $scope.thingCategory, location: $scope.thingLocation, body: $scope.thingBody, promos: $scope.thingPromo, image: $scope.thingImage
       });
      $scope.newThing = '';
      $scope.thingDate = '';
      $scope.thingCategory = '';
      $scope.thingLocation = '';
      $scope.thingBody = '';
      $scope.thingPromo = '';
      $scope.thingImage = '';
    };

    // app.post('/file-upload', function(req, res, next) {
    // console.log(req.body);
    // console.log(req.files);
    // });

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });




  });

