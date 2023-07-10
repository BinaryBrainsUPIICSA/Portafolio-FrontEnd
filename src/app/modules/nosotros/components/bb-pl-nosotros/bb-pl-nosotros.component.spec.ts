import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbPlNosotrosComponent } from './bb-pl-nosotros.component';

describe('BbPlNosotrosComponent', () => {
  let component: BbPlNosotrosComponent;
  let fixture: ComponentFixture<BbPlNosotrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BbPlNosotrosComponent]
    });
    fixture = TestBed.createComponent(BbPlNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
