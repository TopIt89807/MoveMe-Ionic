import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {CustomerProposalsPage} from "../customer-proposals/customer-proposals";

/**
 * Generated class for the CustomerRequestDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-customer-request-details',
  templateUrl: 'customer-request-details.html',
})
export class CustomerRequestDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerRequestDetailsPage');
  }
  proposalList(){
    this.navCtrl.push(CustomerProposalsPage)
  }

}
