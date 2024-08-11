import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { Gameassets } from '../interfaces/game-assets.interface';

@Injectable({
  providedIn: 'root',
})
export class GameAssetsService {
  constructor(private http: HttpClient) {}

  urlAssets: string =
    'https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json';


  urlSpells:string="https://ddragon.leagueoflegends.com/cdn/14.15.1/data/en_US/summoner.json";

  getGameAssets(): Observable<Gameassets> {
    return this.http.get<Gameassets>(this.urlAssets);
  }

  getSpells():Promise<any>{
    return lastValueFrom(this.http.get(this.urlSpells))
  }
  


}
