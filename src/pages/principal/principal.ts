import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BATTERYINFO }  from "../../data/data";
import * as $ from 'jquery';


@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})

export class PrincipalPage {

  title:string;
  batteryInfo:any = [];
  Optimizer:boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.title = "Battery power";
     this.optimizerFun();

     $(window).ready( ()=> {

         //Sequential Text Animation Plugin For jQuery - autochange_text.js
         var counter = 0;
         const elem = document.getElementById("changing");

         function startChangingText(textList, textDuration = 3){
         	textDuration *= 1000
         	elem.innerHTML = textList[0];
         	const inst = setInterval(function() {change(textList);}, textDuration);
         	}
         function change(textList) {
             $("#changing").fadeOut('slow');
             $("#changing").promise().done(function(){
                 elem.innerHTML = textList[counter];
                 $("#changing").fadeIn('slow');
             });
         	counter++;
         	if (counter >= textList.length) {
         		counter = 0;
         	}
         }

         startChangingText(['Cierra las Apps en segundo plano', 'Evita siempre que puedas el "modo reunión"', 'Ajusta el brillo de la pantalla', 'Desactiva Bluetooth, Wi-Fi y NFC cuando no los uses','Reduce el tiempo de bloqueo','Activa el modo ahorro de energía','Desactiva las actualizaciones automáticas','Recarga la batería antes de que se agote'], 3)
         // End Sequential Text Animation Plugin For jQuery - autochange_text.js

         //  charge
         $('.charge').on('click', function(){
            var width = $('.inner').width();
            var length = $('.inner').width();
            length += 40;

            $('.inner').animate({width: length});
            if(width >= 80) {
                $('.mouth.sad').css('visibility', 'hidden');
                $('.mouth.happy').css('visibility', 'visible');
            }
            if(width > 200) {
                alert("Battery now is full");
                //$('.full').css('visibility', 'visible');
            }
         })

         //drain
         $('.drain').on('click', function() {
            $('.inner').animate({
               width: '20px',
            },1000);
            $('.full').css('visibility', 'hidden');
            $('.mouth.happy').css('visibility', 'hidden');
            $('.mouth.sad').css('visibility', 'visible');
         })

//  setTimeout(function(){
// $('.inner').css('width', '10px');
//  }, 1000);



     } )

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
