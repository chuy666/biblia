import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { BibliaProvider } from '../../providers/biblia/biblia';

import { CapituloPage } from '../capitulo/capitulo';

/**
 * Generated class for the AntiguoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-antiguo',
  templateUrl: 'antiguo.html',
})
export class AntiguoPage implements OnInit{
  datosantiguotesTamento:any ;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _BibliaProvider: BibliaProvider,
    private modalCtrl:ModalController) {

  }

  ngOnInit(){

    this.datosantiguotesTamento = this._BibliaProvider.antiguotestamento();
    console.log(this._BibliaProvider.antiguotestamento());
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AntiguoPage');
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
      let data = this._BibliaProvider.libro(parametros.index,parametros.chapters);
      console.log('datos del modal');
      console.log(parametros);
      console.log(data);
      this.navCtrl.push( CapituloPage,data)
    })
  }

}
