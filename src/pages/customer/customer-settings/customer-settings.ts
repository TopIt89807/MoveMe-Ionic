import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {CustomerProfilePage} from "../customer-profile/customer-profile";
import {CustomerChangePasswordPage} from "../customer-change-password/customer-change-password";
import {CustomerOtherSettingsPage} from "../customer-other-settings/customer-other-settings";
import { InAppBrowser } from '@ionic-native/in-app-browser';


/**
 * Generated class for the CustomerSettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-customer-settings',
  templateUrl: 'customer-settings.html',
})
export class CustomerSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerSettingsPage');
  }

  settingNevigateMe(type) {
    switch (type) {
      case 'profile':
        this.navCtrl.push(CustomerProfilePage);
        break;
      case 'changePassword':
        this.navCtrl.push(CustomerChangePasswordPage);
        break;
      case 'otherSettings':
        this.navCtrl.push(CustomerOtherSettingsPage );
        break;
      case 'privacyPolicy':
        this.iab.create('http://mooovme.com/privacy.html');
        break;
      case 'termsAndCondition':
        this.iab.create('http://mooovme.com/TermsofService.html');
        break;
      case 'aboutUs':
        this.iab.create('http://mooovme.com/#customers');
        break;

    }
  }

}
