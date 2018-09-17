import { Component } from '@angular/core';
import { PrincipalPage }  from "../principal/principal";
import { FastchargePage } from "../fastcharge/fastcharge";
import { AboutPage } from "../about/about";
import { BoostPage } from "../boost/boost";



@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;

  constructor() {

      this.tab1 = PrincipalPage;
      this.tab2 = BoostPage;
      this.tab3 = FastchargePage;
      this.tab4 = AboutPage;

  }



}
