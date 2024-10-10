import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio10Component } from './ejercicio-10.component';

describe('Ejercicio10Component', () => {
  let component: Ejercicio10Component;
  let fixture: ComponentFixture<Ejercicio10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
