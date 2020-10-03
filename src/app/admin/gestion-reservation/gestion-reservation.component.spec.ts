import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionReservationComponent } from './gestion-reservation.component';

describe('GestionReservationComponent', () => {
  let component: GestionReservationComponent;
  let fixture: ComponentFixture<GestionReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
