import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio14DchComponent } from './ejercicio-14-dch.component';

describe('Ejercicio14DchComponent', () => {
  let component: Ejercicio14DchComponent;
  let fixture: ComponentFixture<Ejercicio14DchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio14DchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio14DchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
