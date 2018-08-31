import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carro } from '../../models/carro';

const API_URL = 'http://localhost:8080/api';

@Injectable()
export class CarrosServiceProvider {

  constructor(private _http: HttpClient) { }

  lista() {
    return this._http.get<Carro[]>(API_URL + '/carro/listaTodos');
  }
}
