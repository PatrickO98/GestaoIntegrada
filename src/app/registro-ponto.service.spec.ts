import { TestBed, inject } from '@angular/core/testing';

import { RegistroPontoService } from './registro-ponto.service';

describe('RegistroPontoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistroPontoService]
    });
  });

  it('should be created', inject([RegistroPontoService], (service: RegistroPontoService) => {
    expect(service).toBeTruthy();
  }));
});
