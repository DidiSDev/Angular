import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio12Component } from './ejercicio-12.component';

describe('Ejercicio12Component', () => {
  let component: Ejercicio12Component;
  let fixture: ComponentFixture<Ejercicio12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
