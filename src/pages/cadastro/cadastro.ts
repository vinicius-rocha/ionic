import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Carro } from '../../models/carro';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage implements OnInit{
  
  carro: Carro;
  precoTotal: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }
  
  ngOnInit(): void {
    this.carro = this.navParams.get('carro');
    this.precoTotal = this.navParams.get('precoTotal');
  }
}