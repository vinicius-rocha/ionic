import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

import { Agendamento } from '../../models/agendamento';

@Injectable()
export class AgendamentoDaoProvider {

  constructor(private http: HttpClient, private storage: Storage) { }

  private geraChave(agendamento: Agendamento) {
    return agendamento.emailCliente + agendamento.data.substr(0, 10);
  }

  salva(agendamento: Agendamento) {
    return Observable.fromPromise(this.storage.set(this.geraChave(agendamento), agendamento));
  }

  ehDuplicado(agendamento: Agendamento) {
    let promisse =
      this.storage
        .get(this.geraChave(agendamento))
        .then(dado => dado ? true : false);

    return Observable.fromPromise(promisse);
  }
}