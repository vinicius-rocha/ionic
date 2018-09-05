import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    private usuarioService: UsuariosServiceProvider
  ) { }

  get usuarioLogado() {
    return this.usuarioService.usuarioLogado;
  }
}