import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Carro } from '../../app/models/carro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  carros: Carro[];

  constructor(public navCtrl: NavController) {
    this.carros = [
      { nome: 'Azera V6', preco: 85000 },
      { nome: 'Onix 1.6', preco: 40000 },
      { nome: 'Fiesta 2.0', preco: 52000 },
      { nome: 'C3 2.0', preco: 60000 }
    ]
  }

}