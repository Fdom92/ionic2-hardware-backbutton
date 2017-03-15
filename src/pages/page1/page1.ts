import { HardwareBackButtonService } from '../../providers/backbutton';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController,  private _backBtn: HardwareBackButtonService) {
    
  }

  ionViewDidEnter() {
      this._backBtn.registerAction(() => {
        this._backBtn.doubleBackToExit();
      }, 101);
  }

  ionViewWillLeave() {
      this._backBtn.deregisterAction();
  }
}
