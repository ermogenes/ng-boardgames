import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Boardgame } from './boardgame';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const BOARDGAMES: Boardgame[] = [
      {id: 1, name: 'Agricola', publisher: 'Devir', year: 2010 },
      {id: 2, name: 'Terraforming Mars', publisher: 'MeepleBR', year: 2017 },
      {id: 3, name: 'Mansions of Madness', publisher: 'Galápagos', year: 2018 },
      {id: 4, name: 'Kingdomino', publisher: 'Papergames', year: 2018 },
      {id: 5, name: 'Queendomino', publisher: 'Papergames', year: 2019 },
      {id: 6, name: 'Great Western Trail', publisher: 'Conclave', year: 2017 },
    ];
    return {BOARDGAMES};
  }
  
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(boardgames: Boardgame[]): number {
    return boardgames.length > 0 ? Math.max(...boardgames.map(bg => bg.id)) + 1 : 7;
  }

}
