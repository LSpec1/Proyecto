import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarScreenComponent } from './navbar-screen.component';

describe('NavbarScreenComponent', () => {
  let component: NavbarScreenComponent;
  let fixture: ComponentFixture<NavbarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
