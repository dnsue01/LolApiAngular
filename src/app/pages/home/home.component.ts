import { Component } from '@angular/core';
import { LolApiService } from '../../services/lol-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



  constructor(private lolApiService:LolApiService){
    this.getFeaturedGames();
  }




async getFeaturedGames():Promise<any>{

  let response = await this.lolApiService.getFeaturedGames();

  console.log(response);
  
}

}
