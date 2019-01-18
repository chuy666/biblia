import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';



/**
 * Generated class for the ModalCapítulosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-capitulos',
  templateUrl: 'modal-capítulos.html',
})
export class ModalCapitulosPage {

  capitulos:any ;
  libro:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController
  ) {
    let num = this.navParams.get("chapters");
    this.libro = this.navParams.get("index");
    this.capitulos = Array.from(new Array(num), (x,i) => i+1);
    console.log('capitulo recivido enviado')
    console.log(num);
    console.log('libro recivido enviado')
    console.log(this.libro);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCapitulosPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  irCapitulo(cap,libro){
    console.log(cap,libro);
    let data ={
      index :  libro,
      chapters : cap
    }
    this.viewCtrl.dismiss(data);

  }

}
