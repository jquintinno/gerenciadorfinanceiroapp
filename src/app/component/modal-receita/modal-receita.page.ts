import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { IonInput, ModalController } from '@ionic/angular';
import { ArquivoService } from 'src/app/service/arquivo.service';
import { ContaBancariaService } from 'src/app/service/conta-bancaria.service';
import { RedirecionamentoTelaService } from 'src/app/service/redirecionamento-tela.service';
import { ModalPessoaSistemaPage } from '../modal-pessoa-sistema/modal-pessoa-sistema.page';
import { environment } from "../../../environments/environment.prod";
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-receita',
  templateUrl: './modal-receita.page.html',
  styleUrls: ['./modal-receita.page.scss'],
})
export class ModalReceitaPage implements OnInit {

  @ViewChild("autofocus", { static: false })
  public ionInput: IonInput;

  public contaBancariaModelList: any[] = [];

  public image: any;

  public formGroup = new FormGroup({
    favorecido: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(80)]),
    valor: new FormControl("", [Validators.required]),
    observacao: new FormControl("", [])
  });

  constructor(
    private redirecionamentoTelaService: RedirecionamentoTelaService,
    private modalController: ModalController,
    private contaBancariaService: ContaBancariaService,
    private arquivoService: ArquivoService,
    private httpClient: HttpClient
  ) { }

  ngOnInit() { 
    this.recuperarContaBancaria();
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.ionInput.setFocus();
    }, 1300);
  }

  public cadastrarReceita() { 
    this.modalController.dismiss(this.formGroup.controls["valor"].value);
  }

  public async cadastrarAnexo(eventParameter: any) {
    try {
      if(Capacitor.getPlatform() != 'web') await Camera.requestPermissions();
      const image = await Camera.getPhoto({
        quality: 90,
        source: CameraSource.Prompt,
        width: 600,
        resultType: CameraResultType.DataUrl
      });
      console.log('image: ', image);
      this.image = image.dataUrl;

      const blob = this.convertUrltoBlob(image.dataUrl);
      const imageFile = new File([blob], 'profile.png', { type: 'image/png' });
      console.log(imageFile);
      
      let postData = new FormData();
        postData.append('photo', imageFile, 'profile.png');
      const data$ = this.httpClient.post<any>('http://127.0.0.1:8080/arquivo', postData);
      const response = await lastValueFrom(data$);
      // this.arquivoService.createOne(postData).subscribe( (response) => {
      //   console.log(response);
      // });
    } catch(e) {
      console.log(e);
    }
  }

  private convertUrltoBlob(dataUrl: string) {
      var arr = dataUrl.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--) {
          u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {type:mime});
  }

  public async recuperarContaBancaria() {
    this.contaBancariaService.findAll().subscribe( (response) => {
      this.contaBancariaModelList = response;   
    });
  }

  public async redirecionarModalPessoaSistema() {
    const modal = await this.modalController.create({
      component: ModalPessoaSistemaPage,
      breakpoints: [0, 0.25, 0.50, 0.75, 0.85, 0.90, 1],
      initialBreakpoint: 0.85
    });
    modal.onDidDismiss().then( (parameter) => {
      this.formGroup.controls["favorecido"].setValue(parameter.data.nome);  
    });
    return await modal.present();
  }

}
