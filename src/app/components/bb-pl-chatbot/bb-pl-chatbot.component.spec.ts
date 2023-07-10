import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbPlChatbotComponent } from './bb-pl-chatbot.component';

describe('BbPlChatbotComponent', () => {
  let component: BbPlChatbotComponent;
  let fixture: ComponentFixture<BbPlChatbotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BbPlChatbotComponent]
    });
    fixture = TestBed.createComponent(BbPlChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
