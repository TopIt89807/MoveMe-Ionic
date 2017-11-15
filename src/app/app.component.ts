import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {NativeStorage} from "@ionic-native/native-storage";
import {CustomerHomePage, CustomerTransactionHistoryPage, CustomerSettingsPage} from "../pages/customer";
import {LoginPage} from "../pages/auth";

@Component({
  templateUrl: 'app.html'
})
export class MooovMeApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = CustomerHomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private nativeStorage: NativeStorage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Home', component: CustomerHomePage},
      {title: 'Transaction History', component: CustomerTransactionHistoryPage},
      {title: 'Settings', component: CustomerSettingsPage},
      {title: 'Logout', component: LoginPage},
    ];

  }

  initializeApp() {
    let that = this;
    that.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      that.statusBar.styleDefault();
      that.nativeStorage.getItem("userId").then(userId => {
        that.nav.setRoot(that.rootPage).then(() =>{
          that.splashScreen.hide();
        })

      }, (err) => {
        that.nav.setRoot(LoginPage).then(() =>{
          that.splashScreen.hide();
        })
      })
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
