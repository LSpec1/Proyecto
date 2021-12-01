import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsaEmpleadorComponent } from './bolsa-empleador.component';

describe('BolsaEmpleadorComponent', () => {
  let component: BolsaEmpleadorComponent;
  let fixture: ComponentFixture<BolsaEmpleadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolsaEmpleadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolsaEmpleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
