import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonitoramentoPage } from './monitoramento.page';

describe('MonitoramentoPage', () => {
  let component: MonitoramentoPage;
  let fixture: ComponentFixture<MonitoramentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonitoramentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
