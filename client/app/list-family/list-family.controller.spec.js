'use strict';

describe('Controller: ListFamilyCtrl', function () {

  // load the controller's module
  beforeEach(module('applicationtonightApp'));

  var ListFamilyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListFamilyCtrl = $controller('ListFamilyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
