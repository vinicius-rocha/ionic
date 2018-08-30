import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheCarroPage } from './detalhe-carro';

@NgModule({
  declarations: [
    DetalheCarroPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheCarroPage),
  ],
})
export class DetalheCarroPageModule {}
