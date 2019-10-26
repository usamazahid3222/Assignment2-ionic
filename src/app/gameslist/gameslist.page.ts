import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllgamesService } from '../allgames.service';

@Component({
  selector: 'app-gameslist',
  templateUrl: './gameslist.page.html',
  styleUrls: ['./gameslist.page.scss'],
})
export class GameslistPage implements OnInit {

  constructor(private router: Router,
              private allgame: AllgamesService
    ) { }

games = [];

  ngOnInit() {
    console.log('nothing on init');

  }

  changeUrl(user) {
    const id = user.id;
    const url = `gameslist/${id}`;

    this.router.navigateByUrl(url);

    // or

    // this.router.navigate([url]);
  }

  ionViewDidEnter() {
    console.log('view Enter');
    this.games = this.allgame.returnGamesList();
  }
}
