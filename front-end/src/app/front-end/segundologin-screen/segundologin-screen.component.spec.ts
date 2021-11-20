import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundologinScreenComponent } from './segundologin-screen.component';

describe('SegundologinScreenComponent', () => {
  let component: SegundologinScreenComponent;
  let fixture: ComponentFixture<SegundologinScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundologinScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundologinScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
