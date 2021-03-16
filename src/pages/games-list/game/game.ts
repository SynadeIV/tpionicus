import { Component, OnInit } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { GameProvider } from '../../../providers/game/game';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage implements OnInit {

  modif:boolean = false;
  public name: string;
  public id: string;
  public game: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private Game : GameProvider,
    private Toast: ToastController,
    ) {}

  ngOnInit(){
    this.name = this.navParams.get('name');
    this.id = this.navParams.get('id');
    this.game = this.Game.getGameById(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

  /**
   * 
   */
  onGoAccessModif() 
  {
    let alert = this.alertCtrl.create({
      title: "Sur de vouloir modifier ?",
      subTitle: "Vous rendrez possible la modif.",
      buttons: [
        {
          text: "Annler",
          role: "Cancel",
        },
        {
          text: "Confirmer",
          handler:() => { this.modif = !this.modif; }
        },
      ]
    });
    alert.present();
  }
  
  onModif() {
    this.Game.update(this.game.data, this.game.id).subscribe(() => {
      const toast = this.Toast.create({
        message: 'Vos changements ont été sauvegardées',
        duration: 2000
      })
      toast.present();
      this.modif = false;
    })
    this.navCtrl.pop();
  }

  onDelete(){
    this.Game.delete(this.id);
    this.navCtrl.pop();
  }

}