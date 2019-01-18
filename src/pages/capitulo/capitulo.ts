import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { BibliaProvider } from '../../providers/biblia/biblia';
import {PopoverPage} from "../popover/popover";
/**
 * Generated class for the CapituloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capitulo',
  templateUrl: 'capitulo.html',
})
export class CapituloPage {
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
  capitulos:any=[];
  tituloLibro:any;
  numCaputulos:number;
  index:number;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl:ModalController,
              private _BibliaProvider: BibliaProvider,
              private popoverCtrl: PopoverController,
  ) {
    this.capitulos = this.navParams.get("chapter");
    this.tituloLibro = this.navParams.get("libro");
    this.numCaputulos = this.navParams.get("numChapters");
    this.index = this.navParams.get("index");
    console.log(navParams);
  }

  itemSelected(){
    let data = {
      index: this.index,
      chapters: this.numCaputulos
    }
    // console.log(data);
    const modal = this.modalCtrl.create("ModalCapitulosPage",data);
    modal.present();
    modal.onDidDismiss( parametros => {
      if (parametros) {
        console.log('datos recividos:');
        console.log(parametros);
         let data = this._BibliaProvider.libro(parametros.index,parametros.chapters);
        console.log('datos pedidos:');
        console.log(data);
        this.capitulos = data.chapter;
        this.tituloLibro = data.libro;
        this.numCaputulos = data.numChapters;
        this.index = data.index;
      }

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapituloPage');
  }

  presentPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverPage, {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });

    popover.present({
      ev: ev
    });
  }
}
