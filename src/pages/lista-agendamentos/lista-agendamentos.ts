import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Agendamento } from '../../models/agendamento';
import { AgendamentoDaoProvider } from '../../providers/agendamento-dao/agendamento.dao';
import { NavLifeCycle } from '../../utils/ionic/nav/nav-lifecycle';

@IonicPage()
@Component({
  selector: 'page-lista-agendamentos',
  templateUrl: 'lista-agendamentos.html',
})
export class ListaAgendamentosPage implements NavLifeCycle{

  agendamentos: Agendamento[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private agendamentoDao: AgendamentoDaoProvider
  ) { }

  ionViewDidLoad() {
    this.agendamentoDao
      .listaTodos()
      .subscribe(
        (agendamentos: Agendamento[]) => this.agendamentos = agendamentos
      )
  }

}