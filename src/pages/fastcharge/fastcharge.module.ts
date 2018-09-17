import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FastchargePage } from './fastcharge';

@NgModule({
  declarations: [
    FastchargePage,
  ],
  imports: [
    IonicPageModule.forChild(FastchargePage),
  ],
})
export class FastchargePageModule {}
