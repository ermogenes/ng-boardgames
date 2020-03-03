import { Component, OnInit } from '@angular/core';
import { Boardgame } from '../boardgame';
import { BOARDGAMES } from '../boardgames-mock';

@Component({
  selector: 'app-boardgames',
  templateUrl: './boardgames.component.html',
  styleUrls: ['./boardgames.component.css']
})
export class BoardgamesComponent implements OnInit {

  Boardgame: Boardgame = {
    id: 1,
    name: "Agricola estático",
    publisher: "Devir",
    year: 2010,
  };

  selectedBoardgame: Boardgame;
  boardgames = BOARDGAMES;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(bg: Boardgame) {
      this.selectedBoardgame = bg;
  }
}
