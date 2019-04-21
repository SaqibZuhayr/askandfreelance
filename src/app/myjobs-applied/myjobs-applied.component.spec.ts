import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyjobsAppliedComponent } from './myjobs-applied.component';

describe('MyjobsAppliedComponent', () => {
  let component: MyjobsAppliedComponent;
  let fixture: ComponentFixture<MyjobsAppliedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyjobsAppliedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyjobsAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
