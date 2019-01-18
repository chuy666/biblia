import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the InicioPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  nuevoRoot: any = 'NuevoPage'
  todoRoot: any = 'TodoPage'
  antiguoRoot: any = 'AntiguoPage'


  constructor(public navCtrl: NavController) {}

}
