import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbPlProyectosComponent } from './bb-pl-proyectos.component';

describe('BbPlProyectosComponent', () => {
  let component: BbPlProyectosComponent;
  let fixture: ComponentFixture<BbPlProyectosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BbPlProyectosComponent]
    });
    fixture = TestBed.createComponent(BbPlProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
