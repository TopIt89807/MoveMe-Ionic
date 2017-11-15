import {Component} from '@angular/core';
import {AlertController, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the CustomerPaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-customer-payment',
  templateUrl: 'customer-payment.html',
})
export class CustomerPaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private alertCtrl: AlertController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  action(type: string) {
    let that = this;
    if(type == 'submitPayment') {
      let alert = that.alertCtrl.create({
        title: "Thank you.",
        message: "Your payment is completed successfully.",
        buttons: [
          {
            text: "OK",
            handler: () => {
              that.dismiss();
            }
          }
        ]
      })
      alert.present();
    }
  }

}
