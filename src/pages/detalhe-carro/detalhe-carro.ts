import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NavLifeCycle } from '../../utils/ionic/nav/nav-lifecycle';

@IonicPage()
@Component({
  selector: 'page-detalhe-carro',
  templateUrl: 'detalhe-carro.html',
})
export class DetalheCarroPage implements NavLifeCycle{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheCarroPage');
  }

}
