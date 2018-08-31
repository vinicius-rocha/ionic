import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Carro } from '../../models/carro';
import { AgendamentosServiceProvider } from '../../providers/agendamentos/agendamentos.service';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage implements OnInit {

  carro: Carro;
  precoTotal: number;

  cadastroForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private agendamentoService: AgendamentosServiceProvider) {
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
    let agendamento = {
      nomeCliente: this.cadastroForm.get('nome').value,
      enderecoCliente: this.cadastroForm.get('endereco').value,
      emailCliente: this.cadastroForm.get('email').value,
      modeloCarro: this.carro.nome,
      precoTotal: this.precoTotal
    };
    
    console.log(agendamento);
    
    this.agendamentoService
      .agenda(agendamento)
      .subscribe(
        () => alert('Agendou!'),
        () => alert('Deu ruim!')
      );
  }
}