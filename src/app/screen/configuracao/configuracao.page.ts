import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ToastController } from '@ionic/angular';
import { RedirecionamentoTelaService } from 'src/app/service/redirecionamento-tela.service';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  public imagemUsuario: any;

  constructor(
    private redirecionamentoService: RedirecionamentoTelaService,
    private toastController: ToastController
  ) { }

  ngOnInit() { 
    this.imagemUsuario = "../../../assets/image/avatar5.jpg";
  }

  public async redirecionarTelaMonitoramento() {
    return await this.redirecionamentoService.redirecionarTelaMonitoramento();
  }

  public async alterarImagemPerfil() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      saveToGallery: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt
    });
    this.imagemUsuario = image.webPath;
    console.log(image);
    this.showToastSuccess();
  }

  private async showToastSuccess() {
    const toast = await this.toastController.create({
      message: 'Imagem alterada com Sucesso!',
      duration: 1600,
      position: "bottom",
      mode: "ios"
    });
    await toast.present();
  }

}
