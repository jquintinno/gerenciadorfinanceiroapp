import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalReceitaPage } from './modal-receita.page';

describe('ModalReceitaPage', () => {
  let component: ModalReceitaPage;
  let fixture: ComponentFixture<ModalReceitaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalReceitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
