import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

import { Agendamento } from '../../models/agendamento';

@Injectable()
export class AgendamentoDaoProvider {

  constructor(private storage: Storage) { }

  private geraChave(agendamento: Agendamento) {
    return agendamento.emailCliente + agendamento.data.substr(0, 10);
  }

  salva(agendamento: Agendamento) {
    return Observable.fromPromise(this.storage.set(this.geraChave(agendamento), agendamento));
  }

  ehDuplicado(agendamento: Agendamento) {
    let promise =
      this.storage
        .get(this.geraChave(agendamento))
        .then(dado => dado ? true : false);

    return Observable.fromPromise(promise);
  }

  listaTodos() {
    let agendamentos: Agendamento[] = [];

    let promise = this.storage
      .forEach((agendamento: Agendamento) => {
        agendamentos.push(agendamento);
      })
      .then(() => agendamentos);

    return Observable.fromPromise(promise);
  }

  recupera(agendamentoId){
    let promise =
      this.storage
        .get(agendamentoId);
    return Observable.fromPromise(promise);
  }
}