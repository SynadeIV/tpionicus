import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EastereggPage } from '../easteregg/easteregg';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor
  (
    public navCtrl: NavController,
    public navParams: NavParams
    ) {}

  onGoToEaster()
  {
    console.log("easteregg");
    this.navCtrl.push(EastereggPage); //redirect onClick button to easteregg page
  }

}
