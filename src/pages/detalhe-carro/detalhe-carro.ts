import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NavLifeCycle } from '../../utils/ionic/nav/nav-lifecycle';
import { Carro } from '../../models/carro';

@IonicPage()
@Component({
  selector: 'page-detalhe-carro',
  templateUrl: 'detalhe-carro.html',
})
export class DetalheCarroPage implements NavLifeCycle{

  carro: Carro;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carro = this.navParams.get('carro');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheCarroPage');
  }

}
