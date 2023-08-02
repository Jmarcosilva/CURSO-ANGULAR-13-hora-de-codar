import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula18RevisaoComponent } from './aula18-revisao.component';

describe('Aula18RevisaoComponent', () => {
  let component: Aula18RevisaoComponent;
  let fixture: ComponentFixture<Aula18RevisaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aula18RevisaoComponent]
    });
    fixture = TestBed.createComponent(Aula18RevisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
