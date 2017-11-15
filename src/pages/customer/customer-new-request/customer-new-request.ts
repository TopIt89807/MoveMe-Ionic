import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';


@Component({
  selector: 'page-customer-new-request',
  templateUrl: 'customer-new-request.html',
})
export class CustomerNewRequestPage {

  private truckType: string = 'regular_flatbed_truck';

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
