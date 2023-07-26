import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbPlCarrouselComponent } from './bb-pl-carrousel.component';

describe('BbPlCarrouselComponent', () => {
  let component: BbPlCarrouselComponent;
  let fixture: ComponentFixture<BbPlCarrouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BbPlCarrouselComponent]
    });
    fixture = TestBed.createComponent(BbPlCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
