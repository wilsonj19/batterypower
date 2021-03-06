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
  Optimizer:boolean = false;
  brand:string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.title = "Battery power";
     this.optimizerFun();
     console.log(BATTERYINFO);

     this.brand = BATTERYINFO[1].assets.images.brand;


  }

  optimizerFun(){
    if( this.Optimizer == false ){
      this.batteryInfo = BATTERYINFO[0].ratingBad;
    }else{
      this.batteryInfo = BATTERYINFO[0].ratingGood;
    }
  }

  optimizer(){
    alert(" Your Battery now is optimizer ")
    this.Optimizer = true;
    this.optimizerFun();
  }


}
