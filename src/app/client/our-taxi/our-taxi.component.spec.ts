import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTaxiComponent } from './our-taxi.component';

describe('OurTaxiComponent', () => {
  let component: OurTaxiComponent;
  let fixture: ComponentFixture<OurTaxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurTaxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
