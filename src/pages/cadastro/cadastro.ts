import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

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
    private agendamentoService: AgendamentosServiceProvider,
    private storage: Storage
  ) {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      data: [new Date().toISOString(), Validators.required]
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
      precoTotal: this.precoTotal,
      data: this.cadastroForm.get('data').value,
      enviado: false,
      confirmado: false
    };

    console.log(agendamento);

    let mensagem = '';

    this.agendamentoService
      .agenda(agendamento)
      .mergeMap(valor => {
        let observable = this.salva(agendamento);
        if (valor instanceof Error)
          throw valor;
        return observable;
      })
      .finally(() => this.alerta.setSubTitle(mensagem).present())
      .subscribe(
        () => mensagem = 'Agendamento realizado!',
        (err: Error) => mensagem = err.message
      );
  }

  salva(agendamento: Agendamento) {
    let chave = agendamento.emailCliente + agendamento.data.substr(0, 10);
    return Observable.fromPromise(this.storage.set(chave, agendamento))
  }
}