import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAtR0AjclnrorO-z7zeTmYjeHi8GP0k2D4',
      authDomain: 'autent-kwikbox-dev.firebaseapp.com',
      databaseURL: 'https://autent-kwikbox-dev.firebaseio.com',
      projectId: 'autent-kwikbox-dev',
      storageBucket: 'autent-kwikbox-dev.appspot.com',
      messagingSenderId: '1008045390307',
      appId: '1:1008045390307:web:52e2160a18a9439649c8d6',
      measurementId: 'G-GB843NXJLV',
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
