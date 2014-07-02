'use strict';

/**
 * @ngdoc function
 * @name testingAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testingAppApp
 */
angular.module('testingAppApp')
  .controller('MainCtrl', function ($scope, $window) {

    $scope.messages = {
      error: 'Please enter only numbers into the boxes',
      noContent: 'Please enter numbers into both fields'
    };

    $scope.operation = '+';
    $scope.total = undefined;
    $scope.error = undefined;

    $scope.performOperation = function () {
      var first = parseInt($scope.first, 10),
          second = parseInt($scope.second, 10);

      // Check that both input fields contain numbers
      if (!$window.isNaN(first) && !$window.isNaN(second)) {
        $scope.error = undefined;
        // To keep this simple, we'll use a switch statement instead of some funky
        // evalulations of mathmatical expressions
        switch ($scope.operation) {
          case '+':
            $scope.total = first + second;
            break;
          case '-':
            $scope.total = first - second;
            break;
          case '/':
            $scope.total = first / second;
            break;
          case '*':
            $scope.total = first * second;
            break;
        }
      } else if (!$scope.first && !$scope.second) {
        $scope.error = $scope.messages.error;
      } else {
        $scope.error = $scope.messages.noContent;
      }
    };

  });
