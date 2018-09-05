import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carro } from '../../models/carro';
import { environment } from '../../environments/enviroment.prod';

const API_URL = environment.API_URL;

@Injectable()
export class CarrosServiceProvider {

  constructor(private _http: HttpClient) { }

  lista() {
    return this._http.get<Carro[]>(API_URL + '/carro/listaTodos');
  }
}
