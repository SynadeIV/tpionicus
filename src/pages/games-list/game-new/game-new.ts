import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameProvider } from '../../../providers/game/game';

/**
 * Generated class for the GameNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-new',
  templateUrl: 'game-new.html',
})
export class GameNewPage {

  public game: any = {
    gamePicture: null,
    gameName: null,
    gameCreator: false,
    gameRelease: null,
    gamePlatform: null,
    gamePrice: null,
    gameIsFav: null,
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public Game: GameProvider,

    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameNewPage');
  }

  onAdd() {
    this.Game.saveNewGame(this.game).subscribe(() => {
      this.game = {
        gamePicture: null,
        gameName: null,
        gameCreator: false,
        gameRelease: null,
        gamePlatform: null,
        gamePrice: null,
        gameIsFav: null,
      };
      this.navCtrl.pop();
    });
  }



}

