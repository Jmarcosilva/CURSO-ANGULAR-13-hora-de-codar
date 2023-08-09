import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula13InterfacesComponent } from './aula13-interfaces.component';

describe('Aula13InterfacesComponent', () => {
  let component: Aula13InterfacesComponent;
  let fixture: ComponentFixture<Aula13InterfacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aula13InterfacesComponent]
    });
    fixture = TestBed.createComponent(Aula13InterfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
