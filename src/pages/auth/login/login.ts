import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ForgotPasswordPage, SignUpPage} from "..";
import {CustomerHomePage} from "../../customer";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  action(type: string) {
    if (type == 'login') {
      this.navCtrl.setRoot(CustomerHomePage)
    }
  }

  navigate(page: string) {
    if (page == 'forgotPassword') {
      this.navCtrl.push(ForgotPasswordPage)
    } else if (page == 'signUp') {
      this.navCtrl.push(SignUpPage)
    }
  }

}
