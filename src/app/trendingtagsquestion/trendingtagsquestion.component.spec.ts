import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingtagsquestionComponent } from './trendingtagsquestion.component';

describe('TrendingtagsquestionComponent', () => {
  let component: TrendingtagsquestionComponent;
  let fixture: ComponentFixture<TrendingtagsquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingtagsquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingtagsquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
