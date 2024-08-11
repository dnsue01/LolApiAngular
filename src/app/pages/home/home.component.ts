import { Component } from '@angular/core';
import { LolApiService } from '../../services/lol-api.service';
import { GameLists,GameList,BannedChampion,Observers,Participant } from '../../interfaces/game-list.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  GameLists!:GameLists;
  gameList!:GameList;
  

  constructor(private lolApiService: LolApiService) {
    this.getFeaturedGames();
  }

  async getFeaturedGames(): Promise<any> {
    let response = await this.lolApiService.getFeaturedGames();

    this.GameLists=response;
    this.gameList= this.GameLists.gameList[0];
  }
}
