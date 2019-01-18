import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {PopoverPage} from "../pages/popover/popover";



import { MyApp } from './app.component';

import { InicioPage } from '../pages/inicio/inicio';
import { CapituloPage } from  '../pages/capitulo/capitulo'
import { BibliaProvider } from '../providers/biblia/biblia';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    CapituloPage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    CapituloPage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BibliaProvider
  ]
})
export class AppModule {}
