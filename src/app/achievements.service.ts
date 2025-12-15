import { Injectable } from '@angular/core';
import { GameEntity } from './achievements';

/**
 * @class AchievementsService
 * @description T03_07: This service provides a list of heterogeneous entities (achievements and quests).
 */
@Injectable({
  providedIn: 'root'
})
export class AchievementsService {
  private entities: GameEntity[] = [
    { type: 'quest', title: 'Master Angular', description: 'Complete all Angular tasks.', reward: 1000, completed: false },
    { type: 'achievement', title: 'First Steps', 'description': 'Create your first Angular component.', unlocked: true },
    { type: 'quest', title: 'Test Everything', 'description': 'Write unit tests for all your services and components.', reward: 500, completed: false },
    { type: 'achievement', title: 'Router Master', 'description': 'Implement routing in your application.', unlocked: false },
  ];

  /**
   * @method getEntities
   * @description Returns a list of game entities.
   * @returns {GameEntity[]} An array of game entities.
   */
  getEntities(): GameEntity[] {
    return this.entities;
  }
}
