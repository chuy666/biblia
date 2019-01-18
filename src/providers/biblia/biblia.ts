import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BIBLIA } from  '../../assets/data/biblia'
/*
  Generated class for the BibliaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BibliaProvider {
  datosBiblia:any = BIBLIA;

  constructor(public http: HttpClient) {
    console.log('Hello BibliaProvider Provider');
  }

  alldataBible(){

    // this.datosBiblia.forEach(function (value) {
    //   let numero:any;
    //   numero=value.chapters;
    //
    // })
    let alldata:any = [];
    for (let value of this.datosBiblia ){

        alldata.push(
          {
            abbrev:  value.abbrev,
            name: value.name,
            chapters: value.chapters.length
          }
        )

    }
    return alldata;
  }

  antiguotestamento(){
    let alldata:any = [];
    for (let i=0; i <=  38; i++ ){

        alldata.push(
          {
            abbrev:  this.datosBiblia[i].abbrev,
            name: this.datosBiblia[i].name,
            chapters: this.datosBiblia[i].chapters.length
          }
        )

    }
    return alldata;
  }

  nuevoTestamento(){
    let alldata:any = [];
    for (let i=39; i <  this.datosBiblia.length; i++ ){

      alldata.push(
        {
          abbrev:  this.datosBiblia[i].abbrev,
          name: this.datosBiblia[i].name,
          chapters: this.datosBiblia[i].chapters.length
        }
      )

    }
    return alldata;
  }

  libro(index,chapter){
     let data = {
       libro : this.datosBiblia[index].name,
       chapter: this.datosBiblia[index].chapters[chapter],
       numChapters: this.datosBiblia[index].chapters.length,
       index: index
     }
    return data;
  }

}
