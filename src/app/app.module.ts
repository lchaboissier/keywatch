import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextGenerationComponent } from './game/text-generation/text-generation.component';
import { GamePageComponent } from './game/game-page/game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TextGenerationComponent,
    GamePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
