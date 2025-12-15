import { Component } from '@angular/core';
import { User } from './user';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { Stat } from '../stat';

import { StatDetailsComponent } from './stat-details.component';

/**
 * @class StatsDashboardComponent
 * @description This component displays the user's stats and allows them to interact with them.
 * It demonstrates the following tasks:
 * - T03_04: Use a service to provide global data.
 * - T03_07: Exchange data between components (parent-child).
 */
@Component({
  selector: 'app-stats-dashboard',
  standalone: true,
  imports: [CommonModule, StatDetailsComponent],
  templateUrl: './stats-dashboard.component.html',
  styleUrls: ['./stats-dashboard.component.scss']
})
export class StatsDashboardComponent {
  user: User = new User('John Doe', 30, 'Software Engineer');
  stats: Stat[];
  selectedStat: Stat | null = null;

  /**
   * @constructor
   * @param {DataService} dataService - The service that provides the stats data.
   */
  constructor(private dataService: DataService) {
    // T03_04: Use the service in your component through dependency injection.
    this.stats = this.dataService.getStats();
  }

  /**
   * @method selectStat
   * @description Sets the selected stat to be displayed in the details component.
   * @param {Stat} stat - The stat to be selected.
   */
  selectStat(stat: Stat) {
    this.selectedStat = stat;
  }

  /**
   * @method onStatImproved
   * @description T03_07: Handles the event emitted by the child component when a stat is improved.
   * @param {Stat} stat - The stat that was improved.
   */
  onStatImproved(stat: Stat) {
    console.log(`Stat ${stat.name} improved to ${stat.value}`);
  }
}
