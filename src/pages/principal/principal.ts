import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BATTERYINFO }  from "../../data/data";


@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})

export class PrincipalPage {

  title:string;
  batteryInfo:any = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {

     this.title = "Battery power";
     this.batteryInfo = BATTERYINFO.slice(0);

     console.log(this.batteryInfo)

  }

  optimizer(){
    console.log(" Battery optimizada ")
  }


}
