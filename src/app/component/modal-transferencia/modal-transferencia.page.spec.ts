import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalTransferenciaPage } from './modal-transferencia.page';

describe('ModalTransferenciaPage', () => {
  let component: ModalTransferenciaPage;
  let fixture: ComponentFixture<ModalTransferenciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalTransferenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
