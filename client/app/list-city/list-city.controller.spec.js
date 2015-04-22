'use strict';

describe('Controller: ListCityCtrl', function () {

  // load the controller's module
  beforeEach(module('applicationtonightApp'));

  var ListCityCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListCityCtrl = $controller('ListCityCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
