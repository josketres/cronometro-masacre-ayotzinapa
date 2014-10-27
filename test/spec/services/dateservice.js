'use strict';

describe('Service: dateService', function () {

  // load the service's module
  beforeEach(module('cronometroMasacreAyotzinapaApp'));

  // instantiate service
  var dateService;
  beforeEach(inject(function (_dateService_) {
    dateService = _dateService_;
  }));

  it('should return a date', function () {
    expect(dateService.now()).not.toBeNull();
  });

});
