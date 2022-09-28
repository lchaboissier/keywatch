import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GameComponent } from './game/game.component';
import { AddPlayerComponent } from './scoreboard/add-player/add-player.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

const routes: Routes = [
  {
    path: "",
    component: AccueilComponent
  },
  {
    path: "game",
    component: GameComponent
  },
  {
    path: "score",
    component: ScoreboardComponent
  },
  {
    path: "score/addPlayer",
    component: AddPlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
