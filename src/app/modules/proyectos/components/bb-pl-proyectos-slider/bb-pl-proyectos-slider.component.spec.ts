import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbPlProyectosSliderComponent } from './bb-pl-proyectos-slider.component';

describe('BbPlProyectosSliderComponent', () => {
  let component: BbPlProyectosSliderComponent;
  let fixture: ComponentFixture<BbPlProyectosSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BbPlProyectosSliderComponent]
    });
    fixture = TestBed.createComponent(BbPlProyectosSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
