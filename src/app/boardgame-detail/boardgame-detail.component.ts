import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Boardgame } from '../boardgame';
import { BoardgameService } from '../boardgame.service';

@Component({
  selector: 'app-boardgame-detail',
  templateUrl: './boardgame-detail.component.html',
  styleUrls: ['./boardgame-detail.component.css']
})
export class BoardgameDetailComponent implements OnInit {

  @Input() boardgame: Boardgame;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private boardgameService: BoardgameService,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getBoardgame(id);
  }

  getBoardgame(id: number): void {
    this.boardgameService.getBoardGame(id)
      .subscribe(bg => this.boardgame = bg)
  }

  goBack(): void {
    this.location.back();
  }

}
