import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stat } from '../stat';

@Component({
  selector: 'app-stat-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stat-details">
      <h4>{{ stat.name }}</h4>
      <p>{{ stat.description }}</p>
      <p>Current value: {{ stat.value }}</p>
      <button (click)="improve()">Improve</button>
    </div>
  `,
  styles: [`
    .stat-details {
      border: 1px solid #eee;
      padding: 1rem;
      border-radius: 4px;
    }
  `]
})
export class StatDetailsComponent {
  @Input() stat!: Stat;
  @Output() improved = new EventEmitter<Stat>();

  improve() {
    this.stat.value += 1;
    this.improved.emit(this.stat);
  }
}
