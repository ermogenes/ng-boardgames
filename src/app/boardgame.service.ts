import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Boardgame } from './boardgame';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BoardgameService {

  private bgApiUrl = '/api/bgs';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getBoardgames(): Observable<Boardgame[]> {
    this.log("BoardgameService: fetched all boardgames.");
    return this.http.get<Boardgame[]>(this.bgApiUrl);
  }

  getBoardGame(id: number): Observable<Boardgame> {
    this.log(`BoardgameService: fetched boardgame #${id}.`);
    return of(this.http.get<Boardgame[]>(this.bgApiUrl)[0]);
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}