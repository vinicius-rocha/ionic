import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/finally';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CarrosServiceProvider } from '../providers/carros/carros.service';
import { AgendamentosServiceProvider } from '../providers/agendamentos/agendamentos.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CarrosServiceProvider,
    AgendamentosServiceProvider
  ]
})
export class AppModule { }