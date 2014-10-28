'use strict';

describe('Directive: facebookLike', function () {

  // load the directive's module
  beforeEach(module('cronometroMasacreAyotzinapaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<facebook-like></facebook-like>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the facebookLike directive');
  }));
});
