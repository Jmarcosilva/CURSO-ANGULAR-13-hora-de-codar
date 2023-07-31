import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula182Component } from './aula18.2.component';

describe('Aula182Component', () => {
  let component: Aula182Component;
  let fixture: ComponentFixture<Aula182Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aula182Component]
    });
    fixture = TestBed.createComponent(Aula182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
