import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolhasDePagamentoComponent } from './folhas-de-pagamento.component';

describe('FolhasDePagamentoComponent', () => {
  let component: FolhasDePagamentoComponent;
  let fixture: ComponentFixture<FolhasDePagamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolhasDePagamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolhasDePagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
