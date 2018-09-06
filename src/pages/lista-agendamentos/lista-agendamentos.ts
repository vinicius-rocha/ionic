import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Agendamento } from '../../models/agendamento';
import { AgendamentoDaoProvider } from '../../providers/agendamento-dao/agendamento.dao';
import { NavLifeCycle } from '../../utils/ionic/nav/nav-lifecycle';
import { AgendamentosServiceProvider } from '../../providers/agendamentos/agendamentos.service';

@IonicPage()
@Component({
  selector: 'page-lista-agendamentos',
  templateUrl: 'lista-agendamentos.html',
})
export class ListaAgendamentosPage implements NavLifeCycle {

  agendamentos: Agendamento[];
  private alerta;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private agendamentoDao: AgendamentoDaoProvider,
    private agendamentoService: AgendamentosServiceProvider
  ) { }

  ionViewDidLoad() {
    this.agendamentoDao
      .listaTodos()
      .subscribe(
        (agendamentos: Agendamento[]) => this.agendamentos = agendamentos
      )
  }

  ionViewDidEnter() {
    setTimeout(() => this.atualizaAgendamentos(), 5000);
  }
  
  atualizaAgendamentos() {
    this.agendamentos
      .filter(agendamento => agendamento.confirmado)
      .forEach(agendamento => {
        agendamento.visualizado = true;

        this.agendamentoDao.salva(agendamento);
      });
  }

  reenvia(agendamento: Agendamento) {
    console.log(agendamento);
    
    this.alerta = this.alertCtrl.create({
      title: 'Aviso',
      buttons: [
        {
          text: 'OK'
        }
      ]
    });

    let mensagem = '';

    this.agendamentoService.agenda(agendamento)
      .mergeMap(valor => {
        let observable = this.agendamentoDao.salva(agendamento);
        if (valor instanceof Error)
          throw valor;
        return observable;
      })
      .finally(() => this.alerta.setSubTitle(mensagem).present())
      .subscribe(
        () => mensagem = 'Agendamento reenviado!',
        (err: Error) => mensagem = err.message
      );
  }
}