import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsidebarUserDetailComponent } from './rightsidebar-user-detail.component';

describe('RightsidebarUserDetailComponent', () => {
  let component: RightsidebarUserDetailComponent;
  let fixture: ComponentFixture<RightsidebarUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightsidebarUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightsidebarUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
