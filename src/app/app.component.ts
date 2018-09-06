import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal, OSNotification } from '@ionic-native/onesignal';

import { ListaAgendamentosPage } from '../pages/lista-agendamentos/lista-agendamentos';
import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';
import { UsuariosServiceProvider } from '../providers/usuarios/usuarios.service';
import { AgendamentoDaoProvider } from '../providers/agendamento-dao/agendamento.dao';
import { Agendamento } from '../models/agendamento';

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
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private usuarioService: UsuariosServiceProvider,
    private agendamentoDao: AgendamentoDaoProvider,
    private oneSignal: OneSignal
  ) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //config onesignal
      this.oneSignal.startInit('8fdceab6-364c-4fa8-b8e1-58a227623104', '419962267366');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
      
      this.oneSignal.handleNotificationReceived()
        .subscribe((notificacao: OSNotification) => {
          let dadosAdicionais = notificacao.payload.additionalData;

          let agendamentoId = dadosAdicionais['agendamento-id'];

          this.agendamentoDao
            .recupera(agendamentoId)
            .subscribe((agendamento: Agendamento) => {
              agendamento.confirmado = true;
              this.agendamentoDao.salva(agendamento);
            });
        });
      
      this.oneSignal.handleNotificationOpened()
        .subscribe(() => this.nav.push(ListaAgendamentosPage.name));

      this.oneSignal.endInit();
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