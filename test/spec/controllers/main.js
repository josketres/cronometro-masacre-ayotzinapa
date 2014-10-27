'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('cronometroMasacreAyotzinapaApp'));

  var MainCtrl,
    scope, dateServiceMock;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    dateServiceMock = jasmine.createSpyObj("dateService", ["now"]);
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      dateService: dateServiceMock
    });
  }));

    it('should calculate 1 day from 26/09/2014 to 27/11/2014', function() {
    var november_27_2014 = new Date(2014, 10, 27, 22, 35, 0);
    dateServiceMock.now = jasmine.createSpy("now() spy").andReturn(november_27_2014);
    scope.calculateDate();
    expect(scope.day).toBe(1);
  });
});