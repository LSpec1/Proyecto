import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleoScreenComponent } from './empleo-screen.component';

describe('EmpleoScreenComponent', () => {
  let component: EmpleoScreenComponent;
  let fixture: ComponentFixture<EmpleoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
