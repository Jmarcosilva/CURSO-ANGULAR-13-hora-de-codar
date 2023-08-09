import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula06CssComponent } from './aula06-css.component';

describe('Aula06CssComponent', () => {
  let component: Aula06CssComponent;
  let fixture: ComponentFixture<Aula06CssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aula06CssComponent]
    });
    fixture = TestBed.createComponent(Aula06CssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
