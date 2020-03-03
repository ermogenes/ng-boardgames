import { Component, OnInit } from '@angular/core';
import { Boardgame } from '../boardgame';
import { BoardgameService } from '../boardgame.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  boardgames: Boardgame[] = [];

  constructor(private boardgameService: BoardgameService) { }

  ngOnInit(): void {
    this.getStaredBoardgames();
  }

  getStaredBoardgames(): void {
    this.boardgameService.getBoardgames()
      .subscribe(bgs => this.boardgames = bgs.slice(0, 4));
  }

}
