import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {CustomerNewRequestPage} from "..";
import {CustomerRequestDetailsPage} from "../customer-request-details/customer-request-details";

/**
 * Generated class for the CustomerHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-customer-home',
  templateUrl: 'customer-home.html'
})
export class CustomerHomePage {

  private jobType: string = "active";
  private allJobs = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    for(let i=1; i<15; i++) {
      this.allJobs.push({
        name: "Job " + i,
        active: true,
        completed: i%3 == 0
      });
    }
    console.log(this.allJobs);
  }

  newRequirementPage() {
    this.modalCtrl.create(CustomerNewRequestPage).present();
  }
  proposalDetail(){
    this.navCtrl.push(CustomerRequestDetailsPage);
  }
}
