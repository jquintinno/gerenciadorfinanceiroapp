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

  public isModoEscuro: boolean = false;

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
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      promptLabelHeader: "Escolher Origem da Imagem",
      promptLabelPhoto: "Recuperar do Dispositivo",
      promptLabelPicture: "Usar a Câmera"
    });
    this.imagemUsuario = image.dataUrl;
    this.showToastSuccess();
    // const imagemAPI = this.readAsBase64(image);
    // const blob = this.dataURLtoBlob(image.dataUrl);
    // const imageFile = new File([blob], 'profile.png', { type: 'image/png' });
    // const formData: FormData = new FormData();
    //   formData.append('imagem', await imagemAPI);
    //   // CALL API
    //   console.log(formData);

    const response = await fetch(this.imagemUsuario);
    const blob = await response.blob();
    const formData = new FormData();
      formData.append('perfil-usuario', blob, this.imagemUsuario.name);
      console.log(formData);
  }

  dataURLtoBlob(dataurl: any) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
  }

  private async readAsBase64(image: any) {
    const response = await fetch(image.webPath!);
    const blob = await response.blob();
    return await this.convertBlobToBase64(blob) as string;
  }

  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

  private async showToastSuccess() {
    const toast = await this.toastController.create({
      message: 'Imagem alterada com Sucesso!',
      duration: 1600,
      position: "bottom",
      mode: "ios"
    });
    await toast.present();
  }

  public async configurarModoEscuro() {
    this.isModoEscuro = !this.isModoEscuro;
    if (this.isModoEscuro) {
      window.document.body.setAttribute("color-theme", "escuro");
    } else {
      window.document.body.setAttribute("color-theme", null);
    }
  }

}
