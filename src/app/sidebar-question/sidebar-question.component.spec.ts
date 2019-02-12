import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarQuestionComponent } from './sidebar-question.component';

describe('SidebarQuestionComponent', () => {
  let component: SidebarQuestionComponent;
  let fixture: ComponentFixture<SidebarQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
