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




  ngOnInti(){
    
  }
}
