import {Component} from '@angular/core';
import {NavController, NavParams, ViewController, ModalController} from 'ionic-angular';
import {CustomerPaymentPage} from "../customer-payment/customer-payment";


/**
 * Generated class for the CustomerProposalDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-customer-proposal-details',
  templateUrl: 'customer-proposal-details.html',
})
export class CustomerProposalDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public modalCtrl: ModalController) {
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerProposalDetailsPage');
  }
  paymentPage() {

    this.modalCtrl.create(CustomerPaymentPage).present();
  }
}
