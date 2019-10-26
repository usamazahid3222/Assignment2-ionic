import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllgamesService } from '../allgames.service';

@Component({
  selector: 'app-addgame',
  templateUrl: './addgame.page.html',
  styleUrls: ['./addgame.page.scss'],
})
export class AddgamePage implements OnInit {

  addgameform: FormGroup;
inputid;
inputname;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private allgame: AllgamesService
    ) { }

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.addgameform = this.formBuilder.group({
      id: [null, [Validators.required]],
      name: [null, [Validators.required]]

    });
  }

  async addGame() {
    console.log(this.inputid, this.inputname);
    this.allgame.addGame(this.inputid, this.inputname);
    this.router.navigateByUrl('/gameslist');
  }

}
