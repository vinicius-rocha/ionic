import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, normalizeURL } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

import { UsuariosServiceProvider } from '../../providers/usuarios/usuarios.service';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private usuarioService: UsuariosServiceProvider,
    private camera: Camera
  ) { }

  get usuarioLogado() {
    return this.usuarioService.usuarioLogado;
  }

  tiraFoto() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.FILE_URI,
      saveToPhotoAlbum: true,
      correctOrientation: true
    })
      .then(fotoUri => {
        fotoUri = normalizeURL(fotoUri);
        this.usuarioService.salvaProfile(fotoUri);
      })
      .catch(err => console.log(err));
  }

  get profileFoto() {
    return this.usuarioService.profileFoto;
  }
}