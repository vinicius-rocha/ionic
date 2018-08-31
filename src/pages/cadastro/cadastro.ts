import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Carro } from '../../models/carro';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage implements OnInit{
  
  carro: Carro;
  precoTotal: number;

  cadastroForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.cadastroForm = this.formBuilder.group({
      nome: [''],
      endereco: [''],
      email: [''],
      data: ['']
    });
  }
  
  ngOnInit(): void {
    this.carro = this.navParams.get('carro');
    this.precoTotal = this.navParams.get('precoTotal');
  }

  agenda() {
    console.log('Agendou');
    console.log(this.cadastroForm.value);
  }
}