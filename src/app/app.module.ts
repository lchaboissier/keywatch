import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './shared/component/navigation/header/header.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './shared/component/navigation/sidenav-list/sidenav-list.component';
import { MatListModule } from '@angular/material/list';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './shared/component/navigation/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ModelScore } from './shared/model/score/model-score';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { SharedModule } from './shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AddPlayerComponent } from './scoreboard/add-player/add-player.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    ScoreboardComponent,
    AddPlayerComponent,
    SidenavListComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    HttpClientModule,
    SharedModule,
    MatFormFieldModule,
    MatListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule
  ],
  providers: [
    ModelScore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
