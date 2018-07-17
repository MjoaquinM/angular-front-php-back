import { TestBed, inject } from '@angular/core/testing';

import { ServicioHttpService } from './servicio-http.service';

describe('ServicioHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioHttpService]
    });
  });

  it('should be created', inject([ServicioHttpService], (service: ServicioHttpService) => {
    expect(service).toBeTruthy();
  }));
});
