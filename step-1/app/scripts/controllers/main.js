'use strict';

/**
 * @ngdoc function
 * @name testingAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testingAppApp
 */
angular.module('testingAppApp')
  .controller('MainCtrl', function ($scope) {

    $scope.operation = '+';
    $scope.total = undefined;

    $scope.performOperation = function () {
      // To keep this simple, we'll use a switch statement instead of some funky
      // evalulations of mathmatical expressions, remember, eval() is evil
      switch ($scope.operation) {
        case '+':
          $scope.total = $scope.first + $scope.second;
          break;
        case '-':
          $scope.total = $scope.first - $scope.second;
          break;
        case '/':
          $scope.total = $scope.first / $scope.second;
          break;
        case '*':
          $scope.total = $scope.first * $scope.second;
          break;
      }
    };

  });
