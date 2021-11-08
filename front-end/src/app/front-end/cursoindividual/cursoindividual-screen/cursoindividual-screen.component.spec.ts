import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoindividualScreenComponent } from './cursoindividual-screen.component';

describe('CursoindividualScreenComponent', () => {
  let component: CursoindividualScreenComponent;
  let fixture: ComponentFixture<CursoindividualScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoindividualScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoindividualScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
