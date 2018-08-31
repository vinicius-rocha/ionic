import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

import { Carro } from '../../models/carro';
import { CarrosServiceProvider } from '../../providers/carros/carros.service';
import { NavLifeCycle } from '../../utils/ionic/nav/nav-lifecycle';
import { DetalheCarroPage } from '../detalhe-carro/detalhe-carro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifeCycle{

  carros: Carro[];

  constructor(
    public navCtrl: NavController,
    private carrosService: CarrosServiceProvider,
    private _loadindCtrl: LoadingController,
    private _alterCtlr: AlertController
  ) { }

  ionViewDidLoad(): void {
    let loading = this._loadindCtrl.create({
      content: 'Carregando os carros...'
    });

    loading.present();

    this.carrosService.lista()
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

  selecionaCarro(carro: Carro){
    console.log(carro);
    this.navCtrl.push(DetalheCarroPage.name, { carro });
  }
}