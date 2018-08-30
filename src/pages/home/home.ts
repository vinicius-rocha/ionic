import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { Carro } from '../../app/models/carro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  carros: Carro[];

  constructor(
    public navCtrl: NavController,
    private http: HttpClient
  ) {

    this.http
      .get<Carro[]>('http://localhost:8080/api/carro/listaTodos')
      .subscribe(carros => {
        this.carros = carros;
      });
  }
}