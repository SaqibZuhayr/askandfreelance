import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceMainComponent } from './freelance-main.component';

describe('FreelanceMainComponent', () => {
  let component: FreelanceMainComponent;
  let fixture: ComponentFixture<FreelanceMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelanceMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelanceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
