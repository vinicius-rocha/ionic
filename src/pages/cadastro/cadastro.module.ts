import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CadastroPage } from './cadastro';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CadastroPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CadastroPage)
  ],
  exports: [
    CadastroPage
  ]
})
export class CadastroPageModule { }