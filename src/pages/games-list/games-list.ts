import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs';
import { GameProvider } from '../../providers/game/game';
import { GameNewPage } from './game-new/game-new';
import { GamePage } from './game/game';

/**
 * Generated class for the GamesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-games-list',
  templateUrl: 'games-list.html',
})
export class GamesListPage implements OnInit {

  public games:any = [];
  gameSubscription: Subscription

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public Game: GameProvider,

  ) 
  {

  }
  ngOnInit(){
    this.gameSubscription = this.Game.gameSubject.subscribe((listGame) => {
      this.games = listGame
    })

  }

  onGoToCreate()
  {
    this.navCtrl.push(GameNewPage); 
  }

  onGoToGame(gameName:string, _id:string)
  {
    this.navCtrl.push(GamePage, {title: gameName, id: _id}); 
  }

}