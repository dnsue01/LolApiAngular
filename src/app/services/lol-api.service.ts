import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LolApiService {


  constructor(private http:HttpClient) { }


  private key ="RGAPI-fad32b7e-2489-4655-9edb-8ddade0376d6";
  private api = "https://euw1.api.riotgames.com";

  


  getFeaturedGames():Promise<any>{
    return lastValueFrom(this.http.get(this.api+"/lol/spectator/v5/featured-games"+"?api_key="+this.key))
  }

}
