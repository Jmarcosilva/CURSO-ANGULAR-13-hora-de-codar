import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesdoAngularComponent } from './servicesdo-angular.component';

describe('ServicesdoAngularComponent', () => {
  let component: ServicesdoAngularComponent;
  let fixture: ComponentFixture<ServicesdoAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesdoAngularComponent]
    });
    fixture = TestBed.createComponent(ServicesdoAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
