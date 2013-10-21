'use strict';

describe('Service: carroService', function () {

  // load the service's module
  beforeEach(module('motorHelperApp'));

  // instantiate service
  var carroService;
  beforeEach(inject(function (_carroService_) {
    carroService = _carroService_;
  }));

  it('should do something', function () {
    expect(!!carroService).toBe(true);
  });

});
