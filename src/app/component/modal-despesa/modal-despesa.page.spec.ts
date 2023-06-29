import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalDespesaPage } from './modal-despesa.page';

describe('ModalDespesaPage', () => {
  let component: ModalDespesaPage;
  let fixture: ComponentFixture<ModalDespesaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalDespesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
