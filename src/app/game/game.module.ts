import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextGenerationComponent } from './text-generation/text-generation.component';
import { GamePageComponent } from './game-page/game-page.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { KeyEventComponent } from './key-event/key-event.component';


@NgModule({
  declarations: [
    TextGenerationComponent,
    GamePageComponent,
    KeyEventComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ]
})
export class GameModule { }
