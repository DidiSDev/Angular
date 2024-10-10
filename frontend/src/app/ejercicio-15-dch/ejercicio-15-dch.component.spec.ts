import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio15DchComponent } from './ejercicio-15-dch.component';

describe('Ejercicio15DchComponent', () => {
  let component: Ejercicio15DchComponent;
  let fixture: ComponentFixture<Ejercicio15DchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio15DchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio15DchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
