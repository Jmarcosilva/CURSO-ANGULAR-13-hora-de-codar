import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula03EstruturaAngularComponent } from './aula03-estrutura-angular.component';

describe('Aula03EstruturaAngularComponent', () => {
  let component: Aula03EstruturaAngularComponent;
  let fixture: ComponentFixture<Aula03EstruturaAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aula03EstruturaAngularComponent]
    });
    fixture = TestBed.createComponent(Aula03EstruturaAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
