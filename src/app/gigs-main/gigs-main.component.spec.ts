import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GigsMainComponent } from './gigs-main.component';

describe('GigsMainComponent', () => {
  let component: GigsMainComponent;
  let fixture: ComponentFixture<GigsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GigsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GigsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
