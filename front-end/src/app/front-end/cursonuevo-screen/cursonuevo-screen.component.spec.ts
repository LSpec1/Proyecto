import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursonuevoScreenComponent } from './cursonuevo-screen.component';

describe('CursonuevoScreenComponent', () => {
  let component: CursonuevoScreenComponent;
  let fixture: ComponentFixture<CursonuevoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursonuevoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursonuevoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
