import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MooovMeApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {NativeStorage} from "@ionic-native/native-storage";
import {MooovMeModules} from "./mooovme";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {CloudModule} from "@ionic/cloud-angular";
import {CloudSettings} from "@ionic/cloud/dist/es5";

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'b3fb34eb'
  }
};

@NgModule({
  declarations: [
    MooovMeApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MooovMeApp, {
      mode: "ios",
      backButtonText: "",
      backButtonIcon: "ios-arrow-round-back"
    }),
    CloudModule.forRoot(cloudSettings),
    ...MooovMeModules,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MooovMeApp
  ],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
