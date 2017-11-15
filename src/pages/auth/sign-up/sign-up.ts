import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {CustomerHomePage} from "../../customer";


@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  action(type: string) {
    if (type == 'signUp') {
      this.navCtrl.setRoot(CustomerHomePage)
    }
  }

  navigate(page: string) {
    if (page == 'login') {
      this.navCtrl.pop()
    }
  }

}
