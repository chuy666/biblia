import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController  } from 'ionic-angular';
import { BibliaProvider } from '../../providers/biblia/biblia';
//import { ModalCapitulosPage } from '../modal-capítulos/modal-capítulos'

import { CapituloPage } from '../capitulo/capitulo';
import { PopoverController } from 'ionic-angular';

/**
 * Generated class for the TodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage implements OnInit {
  datosBiblia:any ;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams ,
    private modalCtrl:ModalController,
    private _BibliaProvider: BibliaProvider,
    public popoverCtrl: PopoverController
  ) {


  }

  ngOnInit(){
    this.datosBiblia = this._BibliaProvider.alldataBible();
    console.log(this.datosBiblia);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoPage');
  }

  itemSelected(i,chapters){
    let data = {
      index: i,
      chapters: chapters
    }
    // console.log(data);
    const modal = this.modalCtrl.create("ModalCapitulosPage",data);
    modal.present();
    modal.onDidDismiss( parametros => {
      if (parametros) {
        let data = this._BibliaProvider.libro(parametros.index,parametros.chapters);
        // console.log('datos del modal');
        // console.log(parametros);
        // console.log(data);
        this.navCtrl.push(CapituloPage,data);
        // let popover = this.popoverCtrl.create("CapituloPage",data);
        // popover.present();
      }

    })
  }
  presentPopover(i,chapters) {
    let data = {
      index: i,
      chapters: chapters
    }
    let popover = this.popoverCtrl.create("ModalCapitulosPage",data);
    popover.present();
  }

}
