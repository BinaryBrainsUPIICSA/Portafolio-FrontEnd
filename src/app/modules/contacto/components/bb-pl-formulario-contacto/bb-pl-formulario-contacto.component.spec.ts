import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbPlFormularioContactoComponent } from './bb-pl-formulario-contacto.component';

describe('BbPlFormularioContactoComponent', () => {
  let component: BbPlFormularioContactoComponent;
  let fixture: ComponentFixture<BbPlFormularioContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BbPlFormularioContactoComponent]
    });
    fixture = TestBed.createComponent(BbPlFormularioContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
