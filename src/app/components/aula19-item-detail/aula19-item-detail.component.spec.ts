import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula19ItemDetailComponent } from './aula19-item-detail.component';

describe('Aula19ItemDetailComponent', () => {
  let component: Aula19ItemDetailComponent;
  let fixture: ComponentFixture<Aula19ItemDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aula19ItemDetailComponent]
    });
    fixture = TestBed.createComponent(Aula19ItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
