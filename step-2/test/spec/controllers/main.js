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

  it('should correctly set an error message when non-numbers are introduced in both fields', function () {
    scope.first = 'foo';
    scope.operation = '*';
    scope.second = 'bar';
    
    scope.performOperation();
    expect(scope.total).toBe(undefined);
    expect(scope.error).toBe(scope.messages.noContent);
  });

  it('should correctly set an error message when a non-number is introduced in one fields', function () {
    scope.first = 'foo';
    scope.operation = '*';
    scope.second = 2;
    
    scope.performOperation();
    expect(scope.total).toBe(undefined);
    expect(scope.error).toBe(scope.messages.noContent);
  });

  it('should correctly set an error message when both fields are blank', function () {
    scope.first = '';
    scope.operation = '*';
    scope.second = '';
    
    scope.performOperation();
    expect(scope.total).toBe(undefined);
    expect(scope.error).toBe(scope.messages.error);
  });

  it('should correctly set an error message when one field is blank', function () {
    scope.first = 22;
    scope.operation = '*';
    scope.second = '';
    
    scope.performOperation();
    expect(scope.total).toBe(undefined);
    expect(scope.error).toBe(scope.messages.noContent);
  });
});
