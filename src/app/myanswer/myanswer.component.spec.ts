import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyanswerComponent } from './myanswer.component';

describe('MyanswerComponent', () => {
  let component: MyanswerComponent;
  let fixture: ComponentFixture<MyanswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyanswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
