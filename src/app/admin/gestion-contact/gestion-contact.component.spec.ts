import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionContactComponent } from './gestion-contact.component';

describe('GestionContactComponent', () => {
  let component: GestionContactComponent;
  let fixture: ComponentFixture<GestionContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
