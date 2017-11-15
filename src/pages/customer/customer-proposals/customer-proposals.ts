import {Component} from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {CustomerPaymentPage} from "../customer-payment/customer-payment";
import {CustomerProposalDetailsPage} from "../customer-proposal-details/customer-proposal-details";

/**
 * Generated class for the CustomerProposalsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-customer-proposals',
  templateUrl: 'customer-proposals.html',
})
export class CustomerProposalsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerProposalsPage');
  }
  newRequirementPaymentPage() {
    this.modalCtrl.create(CustomerPaymentPage).present();
  }
  newRequirementProposalPage() {
    this.modalCtrl.create(CustomerProposalDetailsPage).present();
  }

}
