import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFreelanceComponent } from './account-freelance.component';

describe('AccountFreelanceComponent', () => {
  let component: AccountFreelanceComponent;
  let fixture: ComponentFixture<AccountFreelanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountFreelanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountFreelanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
