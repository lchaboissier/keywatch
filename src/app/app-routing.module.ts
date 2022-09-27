import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GamePageComponent } from './game/game-page/game-page.component';
import { GameModule } from './game/game.module';

const routes: Routes = [
  {
    path: "",
    component: AccueilComponent
  },
  {
    path: "game",
    component: GamePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            GameModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
