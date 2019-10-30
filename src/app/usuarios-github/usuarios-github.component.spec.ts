import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosGithubComponent } from './usuarios-github.component';

describe('UsuariosGithubComponent', () => {
  let component: UsuariosGithubComponent;
  let fixture: ComponentFixture<UsuariosGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
