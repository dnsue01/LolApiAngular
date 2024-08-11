import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GameViewComponent } from './componets/game-view/game-view.component';

import { provideHttpClient } from '@angular/common/http';
import { TeamViewComponent } from './componets/team-view/team-view.component';
import { TeamGridComponent } from './componets/team-grid/team-grid.component';
import { ParticipantCardComponent } from './componets/participant-card/participant-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameViewComponent,
    TeamViewComponent,
    TeamGridComponent,
    ParticipantCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
