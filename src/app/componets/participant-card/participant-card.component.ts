import { Component, Input } from '@angular/core';
import { Participant } from '../../interfaces/game-list.interface';
import { Gameassets } from '../../interfaces/game-assets.interface';
import { Spells } from '../../interfaces/spells.interfaces';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrl: './participant-card.component.css'
})
export class ParticipantCardComponent {

  @Input() participant!:Participant;
  @Input() gameAssets!:Gameassets;
  @Input() Spells!:Spells;

  championName:string="";

  ImageUrl="";
  Url="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/";
  Userspells:String[]=[];

  ngOnInit(){


  this.getSummonersImg();
  
  this.getSummonersSpells();
  
  
  }


  getSummonersImg(){
    Object.values(this.gameAssets.data).map(value => {
  
      if(value.key == this.participant.championId.toString()){
       this.championName = value.id;
       this.ImageUrl =this.Url+this.championName+"_0.jpg"
      }
      
         
    });
  }
  getSummonersSpells(){
    Object.values(this.Spells.data).map(value => {
  
      if(this.participant.spell1Id.toString() == value.key){
        this.Userspells.push(value.id)
      }
      if(this.participant.spell2Id.toString() == value.key){
        this.Userspells.push(value.id)
      }
   
    
         
    }); 
    console.log(this.Userspells);
    
  }
 
  

}
