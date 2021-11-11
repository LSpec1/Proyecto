import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsaScreenComponent } from './bolsa-screen.component';

describe('BolsaScreenComponent', () => {
  let component: BolsaScreenComponent;
  let fixture: ComponentFixture<BolsaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolsaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolsaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
