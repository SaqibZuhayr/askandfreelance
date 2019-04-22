import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GigsAppliedComponent } from './gigs-applied.component';

describe('GigsAppliedComponent', () => {
  let component: GigsAppliedComponent;
  let fixture: ComponentFixture<GigsAppliedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GigsAppliedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GigsAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
