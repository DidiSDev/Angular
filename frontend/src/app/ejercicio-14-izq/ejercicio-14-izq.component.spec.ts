import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio14IzqComponent } from './ejercicio-14-izq.component';

describe('Ejercicio14IzqComponent', () => {
  let component: Ejercicio14IzqComponent;
  let fixture: ComponentFixture<Ejercicio14IzqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio14IzqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio14IzqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
