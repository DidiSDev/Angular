import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio13Component } from './ejercicio-13.component';

describe('Ejercicio13Component', () => {
  let component: Ejercicio13Component;
  let fixture: ComponentFixture<Ejercicio13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
