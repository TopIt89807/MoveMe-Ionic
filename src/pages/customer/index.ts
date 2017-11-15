import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {CustomerHomePage} from "./customer-home/customer-home";
import {CustomerChangePasswordPage} from "./customer-change-password/customer-change-password";
import {CustomerCloseJobPage} from "./customer-close-job/customer-close-job";
import {CustomerNewRequestPage} from "./customer-new-request/customer-new-request";
import {CustomerOtherSettingsPage} from "./customer-other-settings/customer-other-settings";
import {CustomerPaymentPage} from "./customer-payment/customer-payment";
import {CustomerProfilePage} from "./customer-profile/customer-profile";
import {CustomerProposalDetailsPage} from "./customer-proposal-details/customer-proposal-details";
import {CustomerProposalsPage} from "./customer-proposals/customer-proposals";
import {CustomerRequestDetailsPage} from "./customer-request-details/customer-request-details";
import {CustomerSettingsPage} from "./customer-settings/customer-settings";
import {CustomerTransactionHistoryPage} from "./customer-transaction-history/customer-transaction-history";
import {ActiveJobsPipe} from "../../pipes/active-jobs/active-jobs";
import {CompletedJobsPipe} from "../../pipes/completed-jobs/completed-jobs";

export {
  CustomerChangePasswordPage,
  CustomerCloseJobPage,
  CustomerHomePage,
  CustomerNewRequestPage,
  CustomerOtherSettingsPage,
  CustomerPaymentPage,
  CustomerProfilePage,
  CustomerProposalDetailsPage,
  CustomerProposalsPage,
  CustomerRequestDetailsPage,
  CustomerSettingsPage,
  CustomerTransactionHistoryPage
}

const CustomerModulePages = [
  CustomerChangePasswordPage,
  CustomerCloseJobPage,
  CustomerHomePage,
  CustomerNewRequestPage,
  CustomerOtherSettingsPage,
  CustomerPaymentPage,
  CustomerProfilePage,
  CustomerProposalDetailsPage,
  CustomerProposalsPage,
  CustomerRequestDetailsPage,
  CustomerSettingsPage,
  CustomerTransactionHistoryPage
];

@NgModule({
  imports: [
    IonicModule
  ],
  declarations: [
    ...CustomerModulePages,
    ActiveJobsPipe,
    CompletedJobsPipe
  ],
  entryComponents: [
    ...CustomerModulePages
  ],
  exports: [
    ...CustomerModulePages
  ]
})
export class CustomerModule {

}
