import { Injectable } from '@angular/core';
import { Stat } from './stat';

/**
 * @class DataService
 * @description T03_04: This service provides some global data.
 * It generates random stats for the Life Gamification App.
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private stats: Stat[] = [
    { name: 'Strength', value: this.getRandomValue(), description: 'Your physical power.' },
    { name: 'Intelligence', value: this.getRandomValue(), description: 'Your mental acuity.' },
    { name: 'Dexterity', value: this.getRandomValue(), description: 'Your agility and reflexes.' },
    { name: 'Charisma', value: this.getRandomValue(), description: 'Your ability to influence others.' },
  ];

  /**
   * @method getRandomValue
   * @description Generates a random number between 1 and 100.
   * @returns {number} The random number.
   */
  private getRandomValue(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  /**
   * @method getStats
   * @description T03_04: This service provides global data (randomly generated stats).
   * @returns {Stat[]} An array of stats.
   */
  getStats(): Stat[] {
    // T03_04: This service provides global data (randomly generated stats).
    return this.stats;
  }
}
