import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../../models/usuario';
import { environment } from '../../environments/enviroment';

const API_URL = environment.API_URL;

@Injectable()
export class UsuariosServiceProvider {

  private _usuarioLogado: Usuario;

  constructor(private http: HttpClient) { }

  efetuaLogin(email, senha){
    return this.http
      .post<Usuario>(API_URL + '/login',{email, senha})
      .do(usuario => this._usuarioLogado = usuario);
  }

  get usuarioLogado(){
    return this._usuarioLogado;
  }
}