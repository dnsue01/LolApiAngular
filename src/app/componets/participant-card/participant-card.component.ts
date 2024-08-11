import { Component, Input } from '@angular/core';
import { Participant } from '../../interfaces/game-list.interface';
import { Gameassets } from '../../interfaces/game-assets.interface';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrl: './participant-card.component.css'
})
export class ParticipantCardComponent {

  @Input() participant!:Participant;
  @Input() gameAssets!:Gameassets;
  championName:string="";

  ImageUrl="";
  Url="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/";

  ngOnInit(){

    Object.values(this.gameAssets.data).map(value => {
  
    if(value.key == this.participant.championId.toString()){
     this.championName = value.id;
     this.ImageUrl =this.Url+this.championName+"_0.jpg"
    }
    
       
  });
  
  
  
  
  
  }
}
