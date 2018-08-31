import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Agendamento } from '../../models/agendamento';

const API_URL = 'http://localhost:8080/api';

@Injectable()
export class AgendamentosServiceProvider {

  constructor(private http: HttpClient) { }

  agenda(agendamento: Agendamento) {
    return this.http
      .post(API_URL + '/agendamento/agenda', agendamento)
      .do(() => agendamento.enviado = true)
      .catch(error => Observable.of(new Error('Falha no agendamento! Tente novamente mais tarde!')));
  }
}