import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Boardgame } from './boardgame';
import { BOARDGAMES } from './boardgames-mock';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BoardgameService {

  constructor(private messageService: MessageService) { }

  getBoardgames(): Observable<Boardgame[]> {
    this.messageService.add("BoardgameService: fetched boardgames.");
    return of(BOARDGAMES);
  }
}
