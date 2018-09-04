import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HomePage } from '../home/home';
import { UsuariosServiceProvider } from '../../providers/usuarios/usuarios.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formLogin: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private usuarioService: UsuariosServiceProvider
  ) {
    this.formLogin = this.formBuilder.group({
      email: ['joao@alura.com.br', Validators.required],
      senha: ['alura123', Validators.required]
    });
  }

  efetuaLogin() {
    let email = this.formLogin.get('email').value;
    let senha = this.formLogin.get('senha').value;

    this.usuarioService
      .efetuaLogin(email, senha)
      .subscribe(
        () => this.navCtrl.setRoot(HomePage),
        () => {
          this.alertCtrl.create({
            title: 'Falha ao efetuar o login',
            subTitle: 'Email ou senha inválidos! Verifique',
            buttons: [
              { text: 'OK' }
            ]
          }).present();
        }
      );
  }
}