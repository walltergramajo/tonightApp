'use strict';

describe('Controller: ListEntertainmentCtrl', function () {

  // load the controller's module
  beforeEach(module('applicationtonightApp'));

  var ListEntertainmentCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListEntertainmentCtrl = $controller('ListEntertainmentCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
