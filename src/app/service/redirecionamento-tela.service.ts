import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirecionamentoTelaService {

  constructor(
    private router: Router
  ) { }

  public async redirecionarTelaMonitoramento() {
    return this.router.navigateByUrl("monitoramento");
  }

}
