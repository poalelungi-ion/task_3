import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementsService } from '../achievements.service';
import { GameEntity, Quest, Achievement } from '../achievements';

@Component({
  selector: 'app-achievements-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements-list.component.html',
  styleUrls: ['./achievements-list.component.scss']
})
export class AchievementsListComponent {
  entities: GameEntity[];

  constructor(private achievementsService: AchievementsService) {
    this.entities = this.achievementsService.getEntities();
  }

  isQuest(entity: GameEntity): entity is Quest {
    return entity.type === 'quest';
  }

  isAchievement(entity: GameEntity): entity is Achievement {
    return entity.type === 'achievement';
  }
}
