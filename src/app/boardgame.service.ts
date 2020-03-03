import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Boardgame } from './boardgame';
import { BOARDGAMES } from './boardgames-mock';

@Injectable({
  providedIn: 'root'
})
export class BoardgameService {

  constructor() { }

  getBoardgames(): Observable<Boardgame[]> {
    return of(BOARDGAMES);
  }
}
