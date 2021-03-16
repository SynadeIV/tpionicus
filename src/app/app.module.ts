import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GamesListPageModule } from '../pages/games-list/games-list.module';
import { AboutPageModule } from '../pages/about/about.module';
import { TabPageModule } from '../pages/tab/tab.module';
import { GamePageModule } from '../pages/games-list/game/game.module';
import { GameNewPageModule } from '../pages/games-list/game-new/game-new.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { GameProvider } from '../providers/game/game';
import { PhotoPageModule } from '../pages/photo/photo.module';

const firebase = {
  apiKey: "AIzaSyAnJCscR8eR4H0U7vxHwurFei9DBngDtds",
  authDomain: "tpangular-ed8f3.firebaseapp.com",
  projectId: "tpangular-ed8f3",
  storageBucket: "tpangular-ed8f3.appspot.com",
  messagingSenderId: "362633782084",
  appId: "1:362633782084:web:9f2c1722466ee407172d11",
  measurementId: "G-8SDPB0ZNP3"
};

import { Camera } from '@ionic-native/camera';
import { EastereggPageModule } from '../pages/easteregg/easteregg.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    GamesListPageModule,
    AboutPageModule,
    TabPageModule,
    GamePageModule,
    GameNewPageModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    PhotoPageModule,       
    EastereggPageModule, 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GameProvider,
    Camera,

  ]
})
export class AppModule {}
