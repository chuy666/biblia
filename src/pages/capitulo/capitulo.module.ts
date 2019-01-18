import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CapituloPage } from './capitulo';

@NgModule({
  declarations: [
    CapituloPage,
  ],
  imports: [
    IonicPageModule.forChild(CapituloPage),
  ],
})
export class CapituloPageModule {}
