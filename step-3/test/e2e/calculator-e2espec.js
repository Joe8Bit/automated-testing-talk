'use strict';

describe('E2E: The calculator', function () {

  beforeEach(function () {
    browser.get('http://0.0.0.0:9000/#/');
  });

  it('should correctly add two numbers together', function () {
    runOperation(4, 2, function (result) {
        expect(result).toBe('6');
    });
  });

  it('should correctly subtract two numbers together', function () {
    setOperation('-', function () {
        runOperation(6, 2, function (result) {
            expect(result).toBe('4');
        });
    });
  });

  it('should correctly multiple two numbers together', function () {
    setOperation('*', function () {
        runOperation(6, 2, function (result) {
            expect(result).toBe('12');
        });
    });
  });

  it('should correctly multiple two numbers together', function () {
    setOperation('/', function () {
        runOperation(6, 2, function (result) {
            expect(result).toBe('3');
        });
    });
  });

  it('should show the correct error on performing operations with non-numbers', function () {
    runErrorOperation('foo', 'bar', function (error) {
        expect(error).toBe('Please enter numbers into both fields');
    });
  });

  it('should show the correct error when trying operation with no data', function () {
    runErrorOperation('', '', function (error) {
        expect(error).toBe('Please enter only numbers into the boxes');
    });
  });

  function setOperation (op, callback) {
    element(by.cssContainingText('option', op)).click().then(callback);
  }

  function runOperation (first, second, callback) {
    element.all(by.css('#first')).then(function (items) {
      items[0].sendKeys(first).then(function () {
        element.all(by.css('#second')).then(function (items) {
          items[0].sendKeys(second).then(function () {
            element.all(by.css('#go')).then(function (items) {
              items[0].click().then(function () {
                element.all(by.css('#total')).then(function (items) {
                  items[0].getText().then(function (text) {
                   callback(text);
                  });
                });
              });
            });
          });
        });
      });
    });
  }

  function runErrorOperation (first, second, callback) {
    element.all(by.css('#first')).then(function (items) {
      items[0].sendKeys(first).then(function () {
        element.all(by.css('#second')).then(function (items) {
          items[0].sendKeys(second).then(function () {
            element.all(by.css('#go')).then(function (items) {
              items[0].click().then(function () {
                element.all(by.css('#error')).then(function (items) {
                  items[0].getText().then(function (text) {
                   callback(text);
                  });
                });
              });
            });
          });
        });
      });
    });
  }
  
});
