import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamePageComponent } from './game-page/game-page.component';
import { TextGenerationComponent } from './text-generation/text-generation.component';
import { KeyEventComponent } from './key-event/key-event.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    GamePageComponent,
    TextGenerationComponent,
    KeyEventComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class GameModule { }
