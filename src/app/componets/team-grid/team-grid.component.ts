import { Component, Input } from '@angular/core';
import { Participant } from '../../interfaces/game-list.interface';
import { Gameassets } from '../../interfaces/game-assets.interface';

@Component({
  selector: 'app-team-grid',
  templateUrl: './team-grid.component.html',
  styleUrl: './team-grid.component.css'
})
export class TeamGridComponent {

  @Input() team!:Participant[];
  @Input() gameAssets!:Gameassets;

}
