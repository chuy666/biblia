import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { BibliaProvider } from '../../providers/biblia/biblia';

import { CapituloPage } from '../capitulo/capitulo';
/**
 * Generated class for the NuevoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo',
  templateUrl: 'nuevo.html',
})
export class NuevoPage implements OnInit {

  datanuevoTestamento:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _BibliaProvider:BibliaProvider,
    private modalCtrl:ModalController) {
  }

  ngOnInit(){

    this.datanuevoTestamento = this._BibliaProvider.nuevoTestamento();
    console.log(this.datanuevoTestamento);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoPage');
  }

  itemSelected(i,chapters){
    let data = {
      index: i,
      chapters: chapters
    }
    console.log(data);
    const modal = this.modalCtrl.create("ModalCapitulosPage",data);
    modal.present();
    modal.onDidDismiss( parametros => {
      let data = this._BibliaProvider.libro(parametros.index + 39,parametros.chapters);
      console.log('datos del modal');
      console.log(parametros);
      console.log(data);
      this.navCtrl.push( CapituloPage,data)
    })
  }
}
