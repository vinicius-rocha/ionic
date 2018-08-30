import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Carro } from '../../models/carro';

@IonicPage()
@Component({
  selector: 'page-detalhe-carro',
  templateUrl: 'detalhe-carro.html',
})
export class DetalheCarroPage {

  carro: Carro;
  acessorios = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carro = this.navParams.get('carro');
    this.acessorios = [
      { nome: 'Freio ABS', preco: 800 },
      { nome: 'Ar-Condicionado', preco: 1000 },
      { nome: 'MP3 Player', preco: 500 }
    ];
  }
}