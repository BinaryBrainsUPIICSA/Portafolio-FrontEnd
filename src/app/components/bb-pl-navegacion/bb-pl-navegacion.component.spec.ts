import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbPlNavegacionComponent } from './bb-pl-navegacion.component';

describe('BbPlNavegacionComponent', () => {
  let component: BbPlNavegacionComponent;
  let fixture: ComponentFixture<BbPlNavegacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BbPlNavegacionComponent]
    });
    fixture = TestBed.createComponent(BbPlNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
