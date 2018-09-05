import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListaAgendamentosPage } from '../pages/lista-agendamentos/lista-agendamentos';
import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';
import { UsuariosServiceProvider } from '../providers/usuarios/usuarios.service';

@Component({
  selector: 'myapp',
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  paginas = [
    { titulo: 'Perfil', componente: PerfilPage.name, icone: 'person' },
    { titulo: 'Agendamentos', componente: ListaAgendamentosPage.name, icone: 'calendar' }
  ];
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private usuarioService: UsuariosServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  irParaPagina(componente) {
    this.nav.push(componente);
  }
  
  get usuarioLogado() {
    return this.usuarioService.usuarioLogado;
  }

  get profileFoto() {
    return this.usuarioService.profileFoto;
  }
}