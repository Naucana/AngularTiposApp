import { TestBed, inject } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';

import { LeerUsuariosService } from './leer-usuarios.service';

describe('LeerUsuariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  // httpTestingController = TestBed.get(HttpTestingController);

  it('should be created', () => {
    const service: LeerUsuariosService = TestBed.get(LeerUsuariosService);
    expect(service).toBeTruthy();
  });

  it('Tiene que leer usuarios', () => {
    const service: LeerUsuariosService = TestBed.get(LeerUsuariosService);
    service.leerGithub().subscribe((user: any[]) => {
      expect(user.length).toBeGreaterThan(1);
    })
  });

  // it('Tiene que leer usuarios Fake', 
  //   inject([HttpTestingController, LeerUsuariosService], (httpMock: HttpTestingController, dataService: LeerUsuariosService) => {
      
  // }));
});
