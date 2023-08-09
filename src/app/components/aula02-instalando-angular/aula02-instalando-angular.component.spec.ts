import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula02InstalandoAngularComponent } from './aula02-instalando-angular.component';

describe('Aula02InstalandoAngularComponent', () => {
  let component: Aula02InstalandoAngularComponent;
  let fixture: ComponentFixture<Aula02InstalandoAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aula02InstalandoAngularComponent]
    });
    fixture = TestBed.createComponent(Aula02InstalandoAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
