import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Carro } from '../../models/carro';
import { AgendamentosServiceProvider } from '../../providers/agendamentos/agendamentos.service';
import { HomePage } from '../home/home';
import { Agendamento } from '../../models/agendamento';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage implements OnInit {

  carro: Carro;
  precoTotal: number;
  alerta: Alert;
  cadastroForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    private agendamentoService: AgendamentosServiceProvider
  ) {
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

  criaAlerta() {
    return this.alertCtrl.create({
      title: 'Aviso',
      buttons: [
        {
          text: 'OK',
          handler: () => { this.navCtrl.setRoot(HomePage); }
        }
      ]
    });
  }
  agenda() {
    this.alerta = this.criaAlerta();

    let agendamento: Agendamento = {
      nomeCliente: this.cadastroForm.get('nome').value,
      enderecoCliente: this.cadastroForm.get('endereco').value,
      emailCliente: this.cadastroForm.get('email').value,
      modeloCarro: this.carro.nome,
      precoTotal: this.precoTotal
    };

    console.log(agendamento);

    let mensagem = '';

    this.agendamentoService
      .agenda(agendamento)
      .finally(() => this.alerta.setSubTitle(mensagem).present())
      .subscribe(
        () => mensagem = 'Agendamento realizado!',
        () => mensagem = 'Falha no agendamento! Tente novamente mais tarde'
      );
  }
}