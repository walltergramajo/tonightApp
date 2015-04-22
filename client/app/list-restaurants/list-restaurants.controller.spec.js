'use strict';

describe('Controller: ListRestaurantsCtrl', function () {

  // load the controller's module
  beforeEach(module('applicationtonightApp'));

  var ListRestaurantsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListRestaurantsCtrl = $controller('ListRestaurantsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
