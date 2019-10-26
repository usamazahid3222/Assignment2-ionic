import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllgamesService {

  games = [
    { id: '2018', name: 'PUBG' },
    { id: '2017', name: 'CALL OF DUTY ' },
    { id: '2016', name: 'GTA5' },
    { id: '2015', name: 'CLASH OF CLANS' },
    { id: '2014', name: 'FAR CRY 3' },
    { id: '2013', name: 'FIFA 19' },



  ];

  constructor() { }

  returnGamesList() {
    return this.games;
  }

  deleteGame(id) {
    this.games = this.games.filter(e => {
      return e.id !== id;
    });
  }

  addGame(id, name) {
    this.games.push({id, name});
    console.log('Game added');
  }



}
