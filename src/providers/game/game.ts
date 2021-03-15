import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/*
  Generated class for the GameProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GameProvider {

  private games:any = [];
  gameSubject = new Subject<any[]>();

  constructor(private db: AngularFirestore) {
    this.getAllGames();
  }

  emitGameSubject(){
    this.gameSubject.next(this.games.slice());
  }

  getGameById(id : string){
    for (const game of this.games) {
      if (game.id == id) return game;
    }
  }

  saveNewGame(game: any){
    return new Observable(obs => {
      this.db.collection('games').add(game).then(() => {
        console.log('parfait');
        obs.next();
      })
    })
  }

  getAllGames() {
    return this.db.collection('games').snapshotChanges().pipe(
      map((changes : any) => {
        return changes.map(doc => {
          return {
            id : doc.payload.doc.id,
            data : doc.payload.doc.data()
          }
        })
      })
    ).subscribe(res => {
      this.games = res;
      this.emitGameSubject();
    })
  }

  update(game: any, id: any){
    return new Observable(obs => {
      this.db.doc(`games/${id}`).update(game);
    })
  }

  delete(id: any){
    this.db.doc(`games/${id}`).delete();
  }
  
}
