webpackJsonp([0],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerPaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CustomerPaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CustomerPaymentPage = (function () {
    function CustomerPaymentPage(navCtrl, navParams, viewCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
    }
    CustomerPaymentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CustomerPaymentPage.prototype.action = function (type) {
        var that = this;
        if (type == 'submitPayment') {
            var alert_1 = that.alertCtrl.create({
                title: "Thank you.",
                message: "Your payment is completed successfully.",
                buttons: [
                    {
                        text: "OK",
                        handler: function () {
                            that.dismiss();
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    return CustomerPaymentPage;
}());
CustomerPaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-customer-payment',template:/*ion-inline-start:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-payment/customer-payment.html"*/'<ion-header no-border>\n\n  <ion-navbar color="mooovme">\n    <ion-buttons start>\n      <button ion-button icon-start (click)="dismiss()">\n        <ion-icon name="ios-arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Payment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h3 text-center>Total Amount: $100</h3>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Card Name</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Card Number</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Expire Month</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Expire Year</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>CVV</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button block round (click)="action(\'submitPayment\')">Submit</button>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-payment/customer-payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CustomerPaymentPage);

//# sourceMappingURL=customer-payment.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__ = __webpack_require__(543);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__login_login__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuthModulePages = [
    __WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
    __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */],
    __WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__["a" /* SignUpPage */]
];
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */]
        ],
        declarations: AuthModulePages.slice(),
        entryComponents: AuthModulePages.slice(),
        exports: AuthModulePages.slice()
    })
], AuthModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 224;

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerRequestDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_proposals_customer_proposals__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CustomerRequestDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CustomerRequestDetailsPage = (function () {
    function CustomerRequestDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CustomerRequestDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerRequestDetailsPage');
    };
    CustomerRequestDetailsPage.prototype.proposalList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__customer_proposals_customer_proposals__["a" /* CustomerProposalsPage */]);
    };
    return CustomerRequestDetailsPage;
}());
CustomerRequestDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-customer-request-details',template:/*ion-inline-start:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-request-details/customer-request-details.html"*/'<!--\n  Generated template for the CustomerRequestDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="mooovme">\n    <ion-title>Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <div class="profile-section" text-center padding>\n    <div class="image">\n      <img class="user-image" src="assets/icon/favicon.png" width="30%"/>\n    </div>\n    <button ion-button outline color="light" small round (click)="proposalList()">View Proposals</button>\n  </div>\n  <div class="list-section">\n    <ion-list>\n      <ion-list-header>\n        Personal Info\n      </ion-list-header>\n      <ion-item>Name: <span>Mark Johnson</span></ion-item>\n      <ion-item>Email: <span>John@gmail.com</span></ion-item>\n      <ion-item>Contact: <span>9662825456</span></ion-item>\n    </ion-list>\n    <ion-list text-wrap>\n      <ion-list-header>\n        Vehicle Info\n      </ion-list-header>\n      <ion-item>Tyre: <span>Mark Double decker</span></ion-item>\n      <ion-item>Other type: <span>Diesel</span></ion-item>\n      <ion-item>No of movers needed: <span>02</span></ion-item>\n      <ion-item>Description: <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</span></ion-item>\n    </ion-list>\n    <ion-list text-wrap>\n      <ion-list-header>\n        Source Address\n      </ion-list-header>\n      <ion-item>Address: <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</span></ion-item>\n      <ion-item>City: <span>Seward</span></ion-item>\n      <ion-item>State: <span>Alaska</span></ion-item>\n      <ion-item>Zip code: <span>99664</span></ion-item>\n    </ion-list>\n    <ion-list text-wrap>\n      <ion-list-header>\n        Destination Address\n      </ion-list-header>\n      <ion-item>Address: <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</span></ion-item>\n      <ion-item>City: <span>Seward</span></ion-item>\n      <ion-item>State: <span>Alaska</span></ion-item>\n      <ion-item>Zip code: <span>99664</span></ion-item>\n    </ion-list>\n  </div>\n\n  <div class="profile-section" text-center padding>\n    <div class="title">\n      This job is assigned to\n    </div>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/icon/favicon.png">\n      </ion-avatar>\n      <h2 class="name">James Furry</h2>\n      <p class="ratting">\n        Ratting: 5.0 <ion-icon name="star"></ion-icon>\n      </p>\n    </ion-item>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-request-details/customer-request-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CustomerRequestDetailsPage);

//# sourceMappingURL=customer-request-details.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerProposalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_payment_customer_payment__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_proposal_details_customer_proposal_details__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CustomerProposalsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CustomerProposalsPage = (function () {
    function CustomerProposalsPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    CustomerProposalsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerProposalsPage');
    };
    CustomerProposalsPage.prototype.newRequirementPaymentPage = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__customer_payment_customer_payment__["a" /* CustomerPaymentPage */]).present();
    };
    CustomerProposalsPage.prototype.newRequirementProposalPage = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__customer_proposal_details_customer_proposal_details__["a" /* CustomerProposalDetailsPage */]).present();
    };
    return CustomerProposalsPage;
}());
CustomerProposalsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-customer-proposals',template:/*ion-inline-start:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-proposals/customer-proposals.html"*/'<!--\n  Generated template for the CustomerProposalsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="mooovme">\n    <ion-title>Proposals</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-item text-wrap>\n    <ion-avatar item-start>\n      <img src="assets/icon/favicon.png">\n    </ion-avatar>\n    <h2 class="name" (click)="newRequirementProposalPage()">\n      Suzane Fonsi\n      <ion-note class="ratting" float-right>\n        Rating: 5.0\n        <ion-icon name="star"></ion-icon>\n      </ion-note>\n    </h2>\n    <h2 class="proposal">Proposal: $50 (Fixed Price)</h2>\n    <div float-right class="btn-grp">\n      <button ion-button color="secondary" outline (click)="newRequirementPaymentPage()">Accept</button>\n      <button ion-button color="danger" outline>Decline</button>\n    </div>\n  </ion-item>\n\n  <ion-item text-wrap>\n    <ion-avatar item-start>\n      <img src="assets/icon/favicon.png">\n    </ion-avatar>\n    <h2 class="name" (click)="newRequirementProposalPage()">\n      Tylor Ford\n      <ion-note class="ratting" float-right>\n        Rating: 2.1\n        <ion-icon name="star"></ion-icon>\n      </ion-note>\n    </h2>\n    <h2 class="proposal">Proposal: $5/hr (2 Hours)</h2>\n    <div float-right class="btn-grp">\n      <button ion-button color="secondary" outline (click)="newRequirementPaymentPage()">Accept</button>\n      <button ion-button color="danger" outline>Decline</button>\n    </div>\n  </ion-item>\n\n  <ion-item text-wrap>\n    <ion-avatar item-start>\n      <img src="assets/icon/favicon.png">\n    </ion-avatar>\n    <h2 class="name" (click)="newRequirementProposalPage()">\n      James Furry\n      <ion-note class="ratting" float-right>\n        Rating: 3.5\n        <ion-icon name="star"></ion-icon>\n      </ion-note>\n    </h2>\n    <h2 class="proposal">Proposal: $7/hr (3 Hours)</h2>\n    <div float-right class="btn-grp">\n      <button ion-button color="secondary" outline (click)="newRequirementPaymentPage()">Accept</button>\n      <button ion-button color="danger" outline>Decline</button>\n    </div>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-proposals/customer-proposals.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
], CustomerProposalsPage);

//# sourceMappingURL=customer-proposals.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerProposalDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_payment_customer_payment__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CustomerProposalDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CustomerProposalDetailsPage = (function () {
    function CustomerProposalDetailsPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    CustomerProposalDetailsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CustomerProposalDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerProposalDetailsPage');
    };
    CustomerProposalDetailsPage.prototype.paymentPage = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__customer_payment_customer_payment__["a" /* CustomerPaymentPage */]).present();
    };
    return CustomerProposalDetailsPage;
}());
CustomerProposalDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-customer-proposal-details',template:/*ion-inline-start:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-proposal-details/customer-proposal-details.html"*/'<!--\n  Generated template for the CustomerProposalDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="mooovme">\n    <ion-buttons start>\n      <button ion-button icon-start (click)="dismiss()">\n        <ion-icon name="ios-arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content >\n<ion-item>\n    <ion-avatar item-start>\n        <img src="assets/icon/favicon.png">\n    </ion-avatar>\n      <h2>Suzane Fonsi</h2>\n      <p>Rating: 5.0</p>\n  <ion-grid>\n    <ion-row>\n      <h2>Suzane Fonsi</h2>\n    </ion-row>\n  </ion-grid>\n</ion-item>\n<ion-item>\n    <ion-row>\n      <p>Price: </p><h2> $50</h2>\n    </ion-row>\n    <ion-row>\n      <p>Rate type: </p><h2> Hourly</h2>\n    </ion-row>\n    <ion-row>\n      <p>Estimated Duration: </p><h2> 2 Hours</h2>\n    </ion-row>\n</ion-item>\n<ion-item>\n    <h2>Description:</h2>\n  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>\n</ion-item>\n  <button ion-button color="secondary" outline (click)="paymentPage()">Accept</button>\n  <button ion-button color="danger" outline>Decline</button>\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-proposal-details/customer-proposal-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
], CustomerProposalDetailsPage);

//# sourceMappingURL=customer-proposal-details.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CustomerChangePasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CustomerChangePasswordPage = (function () {
    function CustomerChangePasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CustomerChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerChangePasswordPage');
    };
    CustomerChangePasswordPage.prototype.changePassword = function () {
        this.navCtrl.pop();
    };
    return CustomerChangePasswordPage;
}());
CustomerChangePasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-customer-change-password',template:/*ion-inline-start:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-change-password/customer-change-password.html"*/'<!--\n  Generated template for the CustomerChangePasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="mooovme">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Change Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="user-form" padding>\n    <ion-item item-left>\n      <ion-icon name="star"></ion-icon>\n      <ion-input type="password" placeholder="Old Password"></ion-input>\n    </ion-item>\n    <ion-item item-left>\n      <ion-icon name="star"></ion-icon>\n      <ion-input type="password" placeholder="New Password"></ion-input>\n    </ion-item>\n    <ion-item item-left>\n      <ion-icon name="star"></ion-icon>\n      <ion-input type="password" placeholder="Confirm Password"></ion-input>\n    </ion-item>\n    <button ion-button block round save-btn (click)="changePassword()">Submit</button>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-change-password/customer-change-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CustomerChangePasswordPage);

//# sourceMappingURL=customer-change-password.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerOtherSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CustomerOtherSettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CustomerOtherSettingsPage = (function () {
    function CustomerOtherSettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CustomerOtherSettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerOtherSettingsPage');
    };
    return CustomerOtherSettingsPage;
}());
CustomerOtherSettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-customer-other-settings',template:/*ion-inline-start:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-other-settings/customer-other-settings.html"*/'<!--\n  Generated template for the CustomerOtherSettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="mooovme">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Other Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-other-settings/customer-other-settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CustomerOtherSettingsPage);

//# sourceMappingURL=customer-other-settings.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CustomerProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CustomerProfilePage = (function () {
    function CustomerProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CustomerProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerProfilePage');
    };
    CustomerProfilePage.prototype.saveProfile = function () {
        this.navCtrl.pop();
    };
    return CustomerProfilePage;
}());
CustomerProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-customer-profile',template:/*ion-inline-start:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-profile/customer-profile.html"*/'<ion-header no-border>\n\n  <ion-navbar color="mooovme">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="profile-section" text-center padding>\n    <div class="image">\n      <img class="user-image" src="assets/icon/favicon.png" width="30%"/>\n    </div>\n    <div class="name">\n      Upload Image\n    </div>\n  </div>\n  <div class="user-form" padding>\n    <ion-item item-left>\n      <ion-icon name="star"></ion-icon>\n      <ion-input type="text" placeholder="Full Name"></ion-input>\n    </ion-item>\n    <ion-item item-left>\n      <ion-icon name="star"></ion-icon>\n      <ion-input type="text" placeholder="Email"></ion-input>\n    </ion-item>\n    <ion-item item-left>\n      <ion-icon name="star"></ion-icon>\n      <ion-input type="text" placeholder="Contact Number"></ion-input>\n    </ion-item>\n    <ion-item item-left>\n      <ion-icon name="star"></ion-icon>\n      <ion-textarea rows="3" placeholder="Address"></ion-textarea>\n    </ion-item>\n    <ion-item item-left>\n      <ion-icon name="star"></ion-icon>\n      <ion-input type="text" placeholder="Location (City/State)"></ion-input>\n    </ion-item>\n    <ion-item item-left>\n      <ion-icon name="star"></ion-icon>\n      <ion-input type="text" placeholder="Zip Code"></ion-input>\n    </ion-item>\n    <button ion-button block round save-btn (click)="saveProfile()">Save</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-profile/customer-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CustomerProfilePage);

//# sourceMappingURL=customer-profile.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(490);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mooovme__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_cloud_angular__ = __webpack_require__(545);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var cloudSettings = {
    'core': {
        'app_id': 'b3fb34eb'
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MooovMeApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MooovMeApp */], {
                mode: "ios",
                backButtonText: "",
                backButtonIcon: "ios-arrow-round-back"
            }),
            __WEBPACK_IMPORTED_MODULE_9__ionic_cloud_angular__["a" /* CloudModule */].forRoot(cloudSettings)
        ].concat(__WEBPACK_IMPORTED_MODULE_7__mooovme__["a" /* MooovMeModules */]),
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MooovMeApp */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MooovMeApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_customer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_auth__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MooovMeApp = (function () {
    function MooovMeApp(platform, statusBar, splashScreen, nativeStorage) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.nativeStorage = nativeStorage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_customer__["a" /* CustomerHomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_customer__["a" /* CustomerHomePage */] },
            { title: 'Transaction History', component: __WEBPACK_IMPORTED_MODULE_5__pages_customer__["e" /* CustomerTransactionHistoryPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_5__pages_customer__["d" /* CustomerSettingsPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_6__pages_auth__["c" /* LoginPage */] },
        ];
    }
    MooovMeApp.prototype.initializeApp = function () {
        var that = this;
        that.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            that.statusBar.styleDefault();
            that.nativeStorage.getItem("userId").then(function (userId) {
                that.nav.setRoot(that.rootPage).then(function () {
                    that.splashScreen.hide();
                });
            }, function (err) {
                that.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_auth__["c" /* LoginPage */]).then(function () {
                    that.splashScreen.hide();
                });
            });
        });
    };
    MooovMeApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MooovMeApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MooovMeApp.prototype, "nav", void 0);
MooovMeApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Volumes/DATA/mooovmeUI/src/app/app.html"*/'<ion-menu menu [content]="content" [swipeEnabled]="false">\n  <ion-header>\n    <div class="main" text-center>\n      <div class="img">\n        <img class="user-image" src="assets/icon/favicon.png" width="30%"/>\n      </div>\n      <div class="info">\n        <div class="user">\n          Mark Johnson\n        </div>\n        <div class="ratting">\n          Ratting: 5.0 <ion-icon name="star"></ion-icon>\n        </div>\n      </div>\n    </div>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-item menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Volumes/DATA/mooovmeUI/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */]])
], MooovMeApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_request_details_customer_request_details__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CustomerHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CustomerHomePage = (function () {
    function CustomerHomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.jobType = "active";
        this.allJobs = [];
        for (var i = 1; i < 15; i++) {
            this.allJobs.push({
                name: "Job " + i,
                active: true,
                completed: i % 3 == 0
            });
        }
        console.log(this.allJobs);
    }
    CustomerHomePage.prototype.newRequirementPage = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2____["c" /* CustomerNewRequestPage */]).present();
    };
    CustomerHomePage.prototype.proposalDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__customer_request_details_customer_request_details__["a" /* CustomerRequestDetailsPage */]);
    };
    return CustomerHomePage;
}());
CustomerHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-customer-home',template:/*ion-inline-start:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-home/customer-home.html"*/'<ion-header no-border>\n  <ion-navbar color="mooovme">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="jobType">\n      <ion-segment-button value="active">\n        Ongoing\n      </ion-segment-button>\n      <ion-segment-button value="completed">\n        Completed\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div [ngSwitch]="jobType">\n    <ion-list *ngSwitchCase="\'active\'">\n      <ion-item (click)="proposalDetail()" *ngFor="let job of allJobs | activeJobs">\n        <ion-thumbnail item-start>\n          <img src="assets/icon/favicon.png">\n        </ion-thumbnail>\n        <h2>{{ job.name }}</h2>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'completed\'">\n      <ion-item (click)="proposalDetail()" *ngFor="let job of allJobs | completedJobs">\n        <ion-thumbnail item-start>\n          <img src="assets/icon/favicon.png">\n        </ion-thumbnail>\n        <h2>{{ job.name }}</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-fab (click)="newRequirementPage()">\n    <button ion-fab>\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-home/customer-home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
], CustomerHomePage);

//# sourceMappingURL=customer-home.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerCloseJobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CustomerCloseJobPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CustomerCloseJobPage = (function () {
    function CustomerCloseJobPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CustomerCloseJobPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerCloseJobPage');
    };
    return CustomerCloseJobPage;
}());
CustomerCloseJobPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-customer-close-job',template:/*ion-inline-start:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-close-job/customer-close-job.html"*/'<!--\n  Generated template for the CustomerCloseJobPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar>\n    <ion-title>customer/close-job</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-close-job/customer-close-job.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CustomerCloseJobPage);

//# sourceMappingURL=customer-close-job.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerNewRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerNewRequestPage = (function () {
    function CustomerNewRequestPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.truckType = 'regular_flatbed_truck';
    }
    CustomerNewRequestPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return CustomerNewRequestPage;
}());
CustomerNewRequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-customer-new-request',template:/*ion-inline-start:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-new-request/customer-new-request.html"*/'<ion-header no-border>\n\n  <ion-navbar color="mooovme">\n    <ion-buttons start>\n      <button ion-button icon-start (click)="dismiss()">\n        <ion-icon name="ios-arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Requirement</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="profile-section" text-center padding>\n    <div class="image">\n      <img class="user-image" src="assets/icon/favicon.png" width="30%"/>\n    </div>\n    <div class="name">\n      Upload Image\n    </div>\n  </div>\n\n  <div class="user-form">\n\n    <ion-item margin-bottom>\n      <ion-label>Type of Vehicle</ion-label>\n      <ion-select >\n        <ion-option value="car">Car</ion-option>\n        <ion-option value="truck">Truck</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-list class="type" radio-group [(ngModel)]="truckType">\n      <ion-item >\n        <ion-label>Regular flatbed Truck</ion-label>\n        <ion-radio  value="regular_flatbed_truck"></ion-radio>\n      </ion-item>\n      <ion-item >\n        <ion-label>10\' Truck</ion-label>\n        <ion-radio value="10_truck"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item margin-bottom>\n      <ion-input type="text" placeholder="Other Vehicle type"></ion-input>\n    </ion-item>\n\n    <ion-item margin-bottom>\n      <ion-input type="text" placeholder="Number of Movers needed"></ion-input>\n    </ion-item>\n\n    <ion-item margin-bottom>\n      <ion-input type="text" placeholder="Email Contact"></ion-input>\n    </ion-item>\n\n    <ion-item margin-bottom>\n      <ion-input type="text" placeholder="Contact Number"></ion-input>\n    </ion-item>\n\n    <ion-list margin-bottom>\n      <ion-list-header>\n        Source Address: <ion-icon name="navigate" item-right></ion-icon>\n      </ion-list-header>\n      <ion-item>\n        <ion-textarea type="text" placeholder="Address"></ion-textarea>\n      </ion-item>\n    </ion-list>\n\n    <ion-item margin-bottom>\n      <ion-input type="text" placeholder="City"></ion-input>\n    </ion-item>\n\n    <ion-item margin-bottom>\n      <ion-input type="text" placeholder="State"></ion-input>\n    </ion-item>\n\n    <ion-item margin-bottom>\n      <ion-input type="text" placeholder="Zip code"></ion-input>\n    </ion-item>\n\n    <ion-list margin-bottom>\n      <ion-list-header>\n        Destination Address: <ion-icon name="navigate" item-right></ion-icon>\n      </ion-list-header>\n      <ion-item>\n        <ion-textarea type="text" placeholder="Address"></ion-textarea>\n      </ion-item>\n    </ion-list>\n\n    <ion-item margin-bottom>\n      <ion-input type="text" placeholder="City"></ion-input>\n    </ion-item>\n\n    <ion-item margin-bottom>\n      <ion-input type="text" placeholder="State"></ion-input>\n    </ion-item>\n\n    <ion-item margin-bottom>\n      <ion-input type="text" placeholder="Zip code"></ion-input>\n    </ion-item>\n\n    <ion-item margin-bottom>\n      <ion-textarea type="text" placeholder="Description of move"></ion-textarea>\n    </ion-item>\n\n    <button ion-button block round save-btn (click)="dismiss()">Submit</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-new-request/customer-new-request.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
], CustomerNewRequestPage);

//# sourceMappingURL=customer-new-request.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_profile_customer_profile__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_change_password_customer_change_password__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_other_settings_customer_other_settings__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CustomerSettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CustomerSettingsPage = (function () {
    function CustomerSettingsPage(navCtrl, navParams, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
    }
    CustomerSettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerSettingsPage');
    };
    CustomerSettingsPage.prototype.settingNevigateMe = function (type) {
        switch (type) {
            case 'profile':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__customer_profile_customer_profile__["a" /* CustomerProfilePage */]);
                break;
            case 'changePassword':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__customer_change_password_customer_change_password__["a" /* CustomerChangePasswordPage */]);
                break;
            case 'otherSettings':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__customer_other_settings_customer_other_settings__["a" /* CustomerOtherSettingsPage */]);
                break;
            case 'privacyPolicy':
                this.iab.create('http://mooovme.com/privacy.html');
                break;
            case 'termsAndCondition':
                this.iab.create('http://mooovme.com/TermsofService.html');
                break;
            case 'aboutUs':
                this.iab.create('http://mooovme.com/#customers');
                break;
        }
    };
    return CustomerSettingsPage;
}());
CustomerSettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-customer-settings',template:/*ion-inline-start:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-settings/customer-settings.html"*/'<!--\n  Generated template for the CustomerSettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="mooovme">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="profile-section" text-center padding>\n    <div class="image">\n      <img class="user-image" src="assets/icon/favicon.png" width="30%"/>\n    </div>\n    <div class="name">\n      Mark Johnson\n    </div>\n  </div>\n  <div class="list-section">\n    <ion-list>\n      <ion-list-header>\n        Personal\n      </ion-list-header>\n\n      <button ion-item (click)="settingNevigateMe(\'profile\')">\n        Profile\n      </button>\n      <button ion-item (click)="settingNevigateMe(\'changePassword\')">\n        Change password\n      </button>\n      <button ion-item (click)="settingNevigateMe(\'otherSettings\')">\n        Other Settings\n      </button>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header>\n        Other\n      </ion-list-header>\n\n      <button ion-item (click)="settingNevigateMe(\'privacyPolicy\')">\n        Privacy Policy\n      </button>\n      <button ion-item (click)="settingNevigateMe(\'termsAndCondition\')">\n        Terms of Use\n      </button>\n      <button ion-item (click)="settingNevigateMe(\'aboutUs\')">\n        About us\n      </button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-settings/customer-settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], CustomerSettingsPage);

//# sourceMappingURL=customer-settings.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerTransactionHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CustomerTransactionHistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CustomerTransactionHistoryPage = (function () {
    function CustomerTransactionHistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CustomerTransactionHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerTransactionHistoryPage');
    };
    return CustomerTransactionHistoryPage;
}());
CustomerTransactionHistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-customer-transaction-history',template:/*ion-inline-start:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-transaction-history/customer-transaction-history.html"*/'<!--\n  Generated template for the CustomerTransactionHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="mooovme">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Transaction History</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item text-wrap>\n      <ion-avatar item-start>\n        <img src="assets/icon/favicon.png">\n      </ion-avatar>\n      <p class="text">I want to shift my tables & chair at church.</p>\n      <h3 class="ratting">\n        Amount:\n        <span class="amount">$200</span>\n        <ion-note class="active" float-right>Active</ion-note>\n      </h3>\n    </ion-item>\n\n    <ion-item text-wrap>\n      <ion-avatar item-start>\n        <img src="assets/icon/favicon.png">\n      </ion-avatar>\n      <p class="text">Need to shift TV & Refrigerator.</p>\n      <h3 class="ratting">\n        Amount:\n        <span class="amount">$200</span>\n        <ion-note class="close" float-right>Job Closed</ion-note>\n      </h3>\n    </ion-item>\n\n    <ion-item text-wrap>\n      <ion-avatar item-start>\n        <img src="assets/icon/favicon.png">\n      </ion-avatar>\n      <p class="text">I want to move my house stuffs at Sims drive.</p>\n      <h3 class="ratting">\n        Amount:\n        <span class="amount">$200</span>\n        <ion-note class="close" float-right>Job Closed</ion-note>\n      </h3>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/mooovmeUI/src/pages/customer/customer-transaction-history/customer-transaction-history.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CustomerTransactionHistoryPage);

//# sourceMappingURL=customer-transaction-history.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveJobsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the ActiveJobsPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var ActiveJobsPipe = (function () {
    function ActiveJobsPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    ActiveJobsPipe.prototype.transform = function (job) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return job.filter(function (j) { return j.active && !j.completed; });
    };
    return ActiveJobsPipe;
}());
ActiveJobsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'activeJobs',
    })
], ActiveJobsPipe);

//# sourceMappingURL=active-jobs.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletedJobsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the InactiveJobsPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var CompletedJobsPipe = (function () {
    function CompletedJobsPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    CompletedJobsPipe.prototype.transform = function (job) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return job.filter(function (j) { return j.completed; });
    };
    return CompletedJobsPipe;
}());
CompletedJobsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'completedJobs',
    })
], CompletedJobsPipe);

//# sourceMappingURL=completed-jobs.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgotPasswordPage.prototype.action = function (type) {
        if (type == 'submitForgotPassword') {
            this.navCtrl.pop();
        }
    };
    return ForgotPasswordPage;
}());
ForgotPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgot-password',template:/*ion-inline-start:"/Volumes/DATA/mooovmeUI/src/pages/auth/forgot-password/forgot-password.html"*/'<ion-header no-border>\n\n  <ion-navbar color="mooovme">\n    <ion-title>ForgotPassword</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="bottom-content">\n\n    <ion-item item-left>\n      <ion-icon name="star"></ion-icon>\n      <ion-input type="text" placeholder="Email"></ion-input>\n    </ion-item>\n\n    <button ion-button block round (click)="action(\'submitForgotPassword\')">Submit</button>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/mooovmeUI/src/pages/auth/forgot-password/forgot-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ForgotPasswordPage);

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.action = function (type) {
        if (type == 'login') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__customer__["a" /* CustomerHomePage */]);
        }
    };
    LoginPage.prototype.navigate = function (page) {
        if (page == 'forgotPassword') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2____["b" /* ForgotPasswordPage */]);
        }
        else if (page == 'signUp') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2____["d" /* SignUpPage */]);
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Volumes/DATA/mooovmeUI/src/pages/auth/login/login.html"*/'<ion-content>\n  <div class="bottom-content">\n    <div class="top-banner">\n      <img src="assets/icon/favicon.png" width="60%"/>\n    </div>\n\n    <div padding>\n      <ion-item item-left>\n        <ion-icon name="star"></ion-icon>\n        <ion-input type="text" placeholder="Email"></ion-input>\n      </ion-item>\n\n      <ion-item item-left>\n        <ion-icon name="star"></ion-icon>\n        <ion-input type="password" placeholder="Password"></ion-input>\n      </ion-item>\n\n      <div text-right class="link-forgot-password" (click)="navigate(\'forgotPassword\')">\n        Forgot Password?\n      </div>\n\n      <button ion-button block round (click)="action(\'login\')">Login</button>\n\n      <div text-center class="link-sign-up" (click)="navigate(\'signUp\')">\n        Sign Up\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/mooovmeUI/src/pages/auth/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpPage = (function () {
    function SignUpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignUpPage.prototype.action = function (type) {
        if (type == 'signUp') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__customer__["a" /* CustomerHomePage */]);
        }
    };
    SignUpPage.prototype.navigate = function (page) {
        if (page == 'login') {
            this.navCtrl.pop();
        }
    };
    return SignUpPage;
}());
SignUpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sign-up',template:/*ion-inline-start:"/Volumes/DATA/mooovmeUI/src/pages/auth/sign-up/sign-up.html"*/'<ion-header no-border>\n\n  <ion-navbar color="mooovme">\n    <ion-title>SignUp</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div class="bottom-content">\n\n    <div class="top-banner">\n      <img src="assets/icon/favicon.png" width="60%"/>\n    </div>\n\n    <div padding>\n      <ion-item item-left>\n        <ion-icon name="star"></ion-icon>\n        <ion-input type="text" placeholder="Email"></ion-input>\n      </ion-item>\n\n      <ion-item item-left>\n        <ion-icon name="star"></ion-icon>\n        <ion-input type="password" placeholder="Password"></ion-input>\n      </ion-item>\n\n      <ion-item item-left>\n        <ion-icon name="star"></ion-icon>\n        <ion-input type="password" placeholder="Confirm Password"></ion-input>\n      </ion-item>\n\n      <button ion-button block round (click)="action(\'signUp\')">Sign Up</button>\n\n      <div text-center class="link-log-in" (click)="navigate(\'login\')">\n        Already have an account? <span class="login-text">Login</span>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/mooovmeUI/src/pages/auth/sign-up/sign-up.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SignUpPage);

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MooovMeModules; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_auth__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_customer__ = __webpack_require__(59);


var ServiceProviderModules = [];
var MooovMeModules = [
    __WEBPACK_IMPORTED_MODULE_0__pages_auth__["a" /* AuthModule */],
    __WEBPACK_IMPORTED_MODULE_1__pages_customer__["b" /* CustomerModule */]
].concat(ServiceProviderModules);
//# sourceMappingURL=mooovme.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CustomerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_home_customer_home__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_change_password_customer_change_password__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_close_job_customer_close_job__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_new_request_customer_new_request__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_other_settings_customer_other_settings__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customer_payment_customer_payment__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__customer_profile_customer_profile__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__customer_proposal_details_customer_proposal_details__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__customer_proposals_customer_proposals__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__customer_request_details_customer_request_details__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__customer_settings_customer_settings__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__customer_transaction_history_customer_transaction_history__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_active_jobs_active_jobs__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_completed_jobs_completed_jobs__ = __webpack_require__(540);
/* unused harmony reexport CustomerChangePasswordPage */
/* unused harmony reexport CustomerCloseJobPage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__customer_home_customer_home__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__customer_new_request_customer_new_request__["a"]; });
/* unused harmony reexport CustomerOtherSettingsPage */
/* unused harmony reexport CustomerPaymentPage */
/* unused harmony reexport CustomerProfilePage */
/* unused harmony reexport CustomerProposalDetailsPage */
/* unused harmony reexport CustomerProposalsPage */
/* unused harmony reexport CustomerRequestDetailsPage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_12__customer_settings_customer_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_13__customer_transaction_history_customer_transaction_history__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var CustomerModulePages = [
    __WEBPACK_IMPORTED_MODULE_3__customer_change_password_customer_change_password__["a" /* CustomerChangePasswordPage */],
    __WEBPACK_IMPORTED_MODULE_4__customer_close_job_customer_close_job__["a" /* CustomerCloseJobPage */],
    __WEBPACK_IMPORTED_MODULE_2__customer_home_customer_home__["a" /* CustomerHomePage */],
    __WEBPACK_IMPORTED_MODULE_5__customer_new_request_customer_new_request__["a" /* CustomerNewRequestPage */],
    __WEBPACK_IMPORTED_MODULE_6__customer_other_settings_customer_other_settings__["a" /* CustomerOtherSettingsPage */],
    __WEBPACK_IMPORTED_MODULE_7__customer_payment_customer_payment__["a" /* CustomerPaymentPage */],
    __WEBPACK_IMPORTED_MODULE_8__customer_profile_customer_profile__["a" /* CustomerProfilePage */],
    __WEBPACK_IMPORTED_MODULE_9__customer_proposal_details_customer_proposal_details__["a" /* CustomerProposalDetailsPage */],
    __WEBPACK_IMPORTED_MODULE_10__customer_proposals_customer_proposals__["a" /* CustomerProposalsPage */],
    __WEBPACK_IMPORTED_MODULE_11__customer_request_details_customer_request_details__["a" /* CustomerRequestDetailsPage */],
    __WEBPACK_IMPORTED_MODULE_12__customer_settings_customer_settings__["a" /* CustomerSettingsPage */],
    __WEBPACK_IMPORTED_MODULE_13__customer_transaction_history_customer_transaction_history__["a" /* CustomerTransactionHistoryPage */]
];
var CustomerModule = (function () {
    function CustomerModule() {
    }
    return CustomerModule;
}());
CustomerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */]
        ],
        declarations: CustomerModulePages.concat([
            __WEBPACK_IMPORTED_MODULE_14__pipes_active_jobs_active_jobs__["a" /* ActiveJobsPipe */],
            __WEBPACK_IMPORTED_MODULE_15__pipes_completed_jobs_completed_jobs__["a" /* CompletedJobsPipe */]
        ]),
        entryComponents: CustomerModulePages.slice(),
        exports: CustomerModulePages.slice()
    })
], CustomerModule);

//# sourceMappingURL=index.js.map

/***/ })

},[485]);
//# sourceMappingURL=main.js.map