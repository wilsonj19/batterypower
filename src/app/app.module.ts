import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { PrincipalPage }  from "../pages/principal/principal";
import { TabsPage } from "../pages/tabs/tabs";
import { FastchargePage }  from "../pages/fastcharge/fastcharge";
import { AboutPage } from "../pages/about/about";
import { BoostPage } from "../pages/boost/boost";
import { FrontPage } from "../pages/front/front";

@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    TabsPage,
    FastchargePage,
    BoostPage,
    AboutPage,
    FrontPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    TabsPage,
    FastchargePage,
    BoostPage,
    AboutPage,
    FrontPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
