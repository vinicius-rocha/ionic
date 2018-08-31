import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Agendamento } from '../../models/agendamento';

const API_URL = 'http://localhost:8080/api';

@Injectable()
export class AgendamentosServiceProvider {

  constructor(private http: HttpClient) { }

  agenda(agendamento: Agendamento) {
    return this.http
      .post(API_URL + '/agendamento/agenda', agendamento)
      .do(() => agendamento.enviado = true);
  }
}