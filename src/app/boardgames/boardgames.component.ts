import { Component, OnInit } from '@angular/core';

import { Boardgame } from '../boardgame';
import { BoardgameService } from '../boardgame.service';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-boardgames',
  templateUrl: './boardgames.component.html',
  styleUrls: ['./boardgames.component.css']
})
export class BoardgamesComponent implements OnInit {

  selectedBoardgame: Boardgame;
  boardgames: Boardgame[];

  constructor(private boardgameService: BoardgameService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getBoardgames();
  }

  onSelect(bg: Boardgame) {
    this.selectedBoardgame = bg;
    this.messageService.add(`BoardgamesComponent: fetched ${bg.name}`);
  }

  getBoardgames(): void {
    this.boardgameService.getBoardgames()
      .subscribe(bgs => this.boardgames = bgs);
  }
}
