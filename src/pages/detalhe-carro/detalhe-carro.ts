import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Carro } from '../../models/carro';
import { Acessorio } from '../../models/acessorio';

@IonicPage()
@Component({
  selector: 'page-detalhe-carro',
  templateUrl: 'detalhe-carro.html',
})
export class DetalheCarroPage implements OnInit{
  
  carro: Carro;
  acessorios: Acessorio[];
  private _precoTotal: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) { }
  
  ngOnInit(): void {
    this.carro = this.navParams.get('carro');
    this._precoTotal = this.carro.preco;
    this.acessorios = [
      { nome: 'Freio ABS', preco: 800 },
      { nome: 'Ar-Condicionado', preco: 1000 },
      { nome: 'MP3 Player', preco: 500 }
    ];
  }

  get precoTotal() {
    return this._precoTotal;
  }

  atualizaTotal(ativado: boolean, acessorio: Acessorio){
    ativado ? this._precoTotal += acessorio.preco : this._precoTotal -= acessorio.preco;
  }

}