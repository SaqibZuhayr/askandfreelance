import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommededQuestionComponent } from './recommeded-question.component';

describe('RecommededQuestionComponent', () => {
  let component: RecommededQuestionComponent;
  let fixture: ComponentFixture<RecommededQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommededQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommededQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
