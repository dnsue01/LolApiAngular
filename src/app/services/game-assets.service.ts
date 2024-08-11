import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { Gameassets } from '../interfaces/game-assets.interface';

@Injectable({
  providedIn: 'root',
})
export class GameAssetsService {
  constructor(private http: HttpClient) {}

  url: string =
    'https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json';

  getGameAssets(): Observable<Gameassets> {
    return this.http.get<Gameassets>(this.url);
  }
}
