import { Component } from '@angular/core';
import { BATTERYINFO }  from "../../data/data";
import { NavController, LoadingController } from 'ionic-angular';

import {TabsPage}  from "../tabs/tabs";


@Component({
  selector: 'page-front',
  templateUrl: 'front.html',
})

export class FrontPage {

  loadingImg:string;

  constructor(public loadingCtrl: LoadingController, private navCtrl:NavController ) {
    //this.loadingImg = BATTERYINFO[1].assets.images.loading;
    this.loadingImg = BATTERYINFO[1].assets.images.loading;

  }



  ionViewDidLoad(){

  let loading = this.loadingCtrl.create({
   spinner: 'show',
   content: 'Loading Please Wait...'
  });

  setTimeout(() => {
  loading.present();
  }, 4000);

   setTimeout(() => {
     this.navCtrl.push(TabsPage);
   }, 6000);

   setTimeout(() => {
     loading.dismiss();
   }, 5900);

  }



}
