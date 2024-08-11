import { Component } from '@angular/core';
import { LolApiService } from '../../services/lol-api.service';
import { GameLists, GameList } from '../../interfaces/game-list.interface';
import { Gameassets } from '../../interfaces/game-assets.interface';
import { GameAssetsService } from '../../services/game-assets.service';
import { Spells } from '../../interfaces/spells.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  GameLists!: GameLists;
  gameList!: GameList;
  GameAssets!: Gameassets;
  Spells!: Spells;

  constructor(
    private lolApiService: LolApiService,
    private gameassets: GameAssetsService
  ) {}

  ngOnInit() {
    this.getFeaturedGames();
    this.getAssets();
    this.getSpells();
  }

  async getFeaturedGames(): Promise<any> {
    let response = await this.lolApiService.getFeaturedGames();

    this.GameLists = response;
    this.gameList = this.GameLists.gameList.filter((game) => {
      return (
        game.gameMode.toLocaleLowerCase() == 'aram' ||
        game.gameMode.toLocaleLowerCase() == 'calssic'
      );
    })[0];
  }

  getAssets() {
    this.gameassets.getGameAssets().subscribe((champions) => {
      this.GameAssets = champions;
    });
  }

  async getSpells() {
    this.Spells = await this.gameassets.getSpells();
  }
}
