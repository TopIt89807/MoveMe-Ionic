import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {ForgotPasswordPage} from "./forgot-password/forgot-password";
import {LoginPage} from "./login/login";
import {SignUpPage} from "./sign-up/sign-up";

export {
  ForgotPasswordPage,
  LoginPage,
  SignUpPage
}

const AuthModulePages = [
  ForgotPasswordPage,
  LoginPage,
  SignUpPage
];

@NgModule({
  imports: [
    IonicModule
  ],
  declarations: [
    ...AuthModulePages
  ],
  entryComponents: [
    ...AuthModulePages
  ],
  exports: [
    ...AuthModulePages
  ]
})
export class AuthModule {
}
