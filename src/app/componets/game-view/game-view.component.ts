import { Component, Input } from '@angular/core';
import { GameList, Participant} from '../../interfaces/game-list.interface';
import { Gameassets } from '../../interfaces/game-assets.interface';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrl: './game-view.component.css'
})
export class GameViewComponent {
@Input() gameList!:GameList;
@Input() gameAssets!:Gameassets;


ngOnInit(){
 this.blueTeam = this.getBlueTeam(this.gameList);
 this.redTeam = this.getRedTeam(this.gameList);
}

blueTeam!:Participant[];
redTeam!:Participant[];

getBlueTeam(gameList:GameList):Participant[]{

return gameList.participants.filter((participant)=>participant.teamId==100)
}
getRedTeam(gameList:GameList):Participant[]{

  return gameList.participants.filter((participant)=>participant.teamId==200)
  }

}
