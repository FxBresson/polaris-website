/* 
Imports 
*/
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from '../../models/graphql';
import { RequesterService } from '../requester.service';

//

/* 
Definition 
*/
@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  constructor(
    private Requester: RequesterService
  ){
   
  };

  private readonly _user = new BehaviorSubject<Player>(null);

  readonly user$: Observable<Player> = this._user.asObservable();

  public get user(): Player {
    return this._user.getValue();
  }

  public set user(val: Player) {
    this._user.next(val);
  }

  // login(user: Player) {
  public login() {
    // this.user = user
    this.Requester.initClient("token")
  }

  public logout() {
    this.user = null;
  }
};
//