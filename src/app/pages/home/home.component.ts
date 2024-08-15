import { Component } from '@angular/core';
import { LolApiService } from '../../services/lol-api.service';
import { GameLists, GameList } from '../../interfaces/game-list.interface';
import { Gameassets } from '../../interfaces/game-assets.interface';
import { GameAssetsService } from '../../services/game-assets.service';
import { Spells } from '../../interfaces/spells.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Fixed typo: styleUrl -> styleUrls
})
export class HomeComponent {
  GameLists!: GameLists;
  gameList!: GameList; // Keeps the original type
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

  async getFeaturedGames(): Promise<void> {
    while (!this.gameList) {
      const response = await this.lolApiService.getFeaturedGames();

      this.GameLists = response;
      this.gameList = this.GameLists.gameList.find((game) => {
        return (
          game.gameMode.toLocaleLowerCase() === 'aram' ||
          game.gameMode.toLocaleLowerCase() === 'classic'
        );
      })!; // Non-null assertion

      if (!this.gameList) {
        console.log("No ARAM or Classic game found, retrying...");
        await this.delay(2000); // Wait for 2 seconds before retrying (you can adjust the delay as needed)
      }
    }

    console.log("Found a game:", this.gameList);
  }

  getAssets() {
    this.gameassets.getGameAssets().subscribe((champions) => {
      this.GameAssets = champions;
    });
  }

  async getSpells() {
    this.Spells = await this.gameassets.getSpells();
  }

  // Helper method to introduce a delay
  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
