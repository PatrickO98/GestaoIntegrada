import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorDetalhesComponent } from './colaborador-detalhes.component';

describe('ColaboradorDetalhesComponent', () => {
  let component: ColaboradorDetalhesComponent;
  let fixture: ComponentFixture<ColaboradorDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradorDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradorDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
