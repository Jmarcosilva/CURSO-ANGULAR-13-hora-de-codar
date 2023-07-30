import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula18Component } from './aula18.component';

describe('Aula18Component', () => {
  let component: Aula18Component;
  let fixture: ComponentFixture<Aula18Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aula18Component]
    });
    fixture = TestBed.createComponent(Aula18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
