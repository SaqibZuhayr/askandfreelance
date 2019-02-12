import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFreelanceComponent } from './sidebar-freelance.component';

describe('SidebarFreelanceComponent', () => {
  let component: SidebarFreelanceComponent;
  let fixture: ComponentFixture<SidebarFreelanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarFreelanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarFreelanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
