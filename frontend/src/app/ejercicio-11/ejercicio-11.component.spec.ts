import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio11Component } from './ejercicio-11.component';

describe('Ejercicio11Component', () => {
  let component: Ejercicio11Component;
  let fixture: ComponentFixture<Ejercicio11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
