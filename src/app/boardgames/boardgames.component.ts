import { Component, OnInit } from '@angular/core';
import { Boardgame } from '../boardgame';
import { BoardgameService } from '../boardgame.service';

@Component({
  selector: 'app-boardgames',
  templateUrl: './boardgames.component.html',
  styleUrls: ['./boardgames.component.css']
})
export class BoardgamesComponent implements OnInit {

  selectedBoardgame: Boardgame;
  boardgames: Boardgame[];

  constructor(private boardgameService: BoardgameService) {}

  ngOnInit(): void {
    this.getBoardgames();
  }

  onSelect(bg: Boardgame) {
    this.selectedBoardgame = bg;
  }

  getBoardgames(): void {
    this.boardgameService.getBoardgames()
      .subscribe(bgs => this.boardgames = bgs);
  }
}
