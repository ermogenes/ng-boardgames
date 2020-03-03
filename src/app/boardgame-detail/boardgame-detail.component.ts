import { Component, OnInit, Input } from '@angular/core';
import { Boardgame } from '../boardgame';

@Component({
  selector: 'app-boardgame-detail',
  templateUrl: './boardgame-detail.component.html',
  styleUrls: ['./boardgame-detail.component.css']
})
export class BoardgameDetailComponent implements OnInit {

  @Input() boardgame: Boardgame;

  constructor() { }

  ngOnInit(): void {
  }

}
