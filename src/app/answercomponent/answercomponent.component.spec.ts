import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswercomponentComponent } from './answercomponent.component';

describe('AnswercomponentComponent', () => {
  let component: AnswercomponentComponent;
  let fixture: ComponentFixture<AnswercomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswercomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
