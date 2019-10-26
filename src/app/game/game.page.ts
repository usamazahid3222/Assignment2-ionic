import { Component, OnInit } from '@angular/core';
import { AllgamesService } from '../allgames.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private allgame: AllgamesService) { }

    games = [];
    singleGame;

  ngOnInit() {
    this.games = this.allgame.returnGamesList();

    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('gameid');

      this.singleGame = this.games.find(obj => {
        return obj.id.includes(val);
      });
    });
  }


  async deleteGame() {
    console.log('deleteGame', this.singleGame);

    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: `Are you sure you want to remove ${this.singleGame.name}?`,
      // buttons: ['OK']
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.allgame.deleteGame(this.singleGame.id);
            this.router.navigateByUrl('/gameslist');
          }
        }
      ]
    });


    alert.present();

    // this.everythingstudentService.deleteStudent(this.singleStudent.id);
    // const url = `studentslist`;

    // this.router.navigateByUrl(url);

    // this.studentsListService.deleteAStudent(this.singleStudent.id);
  }

}
