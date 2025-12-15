import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatsDashboardComponent } from './stats-dashboard.component';
import { DataService } from '../data.service';
import { of } from 'rxjs';

describe('StatsDashboardComponent', () => {
  let component: StatsDashboardComponent;
  let fixture: ComponentFixture<StatsDashboardComponent>;
  let dataService: DataService;

  const mockDataService = {
    getStats: () => [
      { name: 'Strength', value: 50, description: 'Your physical power.' },
      { name: 'Intelligence', value: 70, description: 'Your mental acuity.' },
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsDashboardComponent],
      providers: [{ provide: DataService, useValue: mockDataService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsDashboardComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get stats from the data service', () => {
    expect(component.stats.length).toBe(2);
  });

  it('should display the stats', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.stats-container')?.children.length).toBe(2);
    expect(compiled.querySelector('.stat-card h3')?.textContent).toContain('Strength');
  });

  it('should select a stat', () => {
    const stat = { name: 'Strength', value: 50, description: 'Your physical power.' };
    component.selectStat(stat);
    expect(component.selectedStat).toBe(stat);
  });
});
