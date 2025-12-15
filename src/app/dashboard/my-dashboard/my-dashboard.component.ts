import { Component } from '@angular/core';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-my-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.scss']
})
export class MyDashboardComponent {
  user: User = new User('John Doe', 30, 'Software Engineer');
  count = 10;
  doubleCount = this.count * 2;
  data: string[] = [];

  constructor(private dataService: DataService) {
    // this.data = this.dataService.getData();
  }
}
