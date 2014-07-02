'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('testingAppApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should expose a performOperation scope method', function () {
    expect(typeof scope.performOperation).toBe('function');
  });

  it('should correctly perform addition operations', function () {
    scope.first = 2;
    scope.operation = '+';
    scope.second = 2;

    scope.performOperation();
    expect(scope.total).toBe(4);
  });

  it('should correctly perform minus operations', function () {
    scope.first = 4;
    scope.operation = '-';
    scope.second = 2;
    
    scope.performOperation();
    expect(scope.total).toBe(2);
  });

  it('should correctly perform division operations', function () {
    scope.first = 10;
    scope.operation = '/';
    scope.second = 2;
    
    scope.performOperation();
    expect(scope.total).toBe(5);
  });

  it('should correctly perform multiplication operations', function () {
    scope.first = 5;
    scope.operation = '*';
    scope.second = 2;
    
    scope.performOperation();
    expect(scope.total).toBe(10);
  });

});
