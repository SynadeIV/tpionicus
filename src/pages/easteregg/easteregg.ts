import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EastereggPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-easteregg',
  templateUrl: 'easteregg.html',
})
export class EastereggPage {

  constructor
  (
    public navCtrl: NavController, 
    public navParams: NavParams,
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EastereggPage');
  }

}
