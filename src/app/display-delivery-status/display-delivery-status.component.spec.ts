import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDeliveryStatusComponent } from './display-delivery-status.component';

describe('DisplayDeliveryStatusComponent', () => {
  let component: DisplayDeliveryStatusComponent;
  let fixture: ComponentFixture<DisplayDeliveryStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDeliveryStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDeliveryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
