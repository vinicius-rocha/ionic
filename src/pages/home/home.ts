import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
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
    private _http: HttpClient,
    private _loadindCtrl: LoadingController,
    private _alterCtlr: AlertController
  ) {

    let loading = this._loadindCtrl.create({
      content: 'Carregando os carros...'
    });

    loading.present();

    this._http
      .get<Carro[]>('http://localhost:8080/api/carro/listaTodosx')
      .subscribe(carros => {
        this.carros = carros;

        loading.dismiss();
      }, error => {
        loading.dismiss();
        this._alterCtlr.create({
          title: 'Falha na conexão',
          subTitle: 'Não foi possível carregar a lista de carros. Tente novamente mais tarde.',
          buttons: [
            {
              text: 'OK'
            }
          ]
        }).present();
      });
  }
}