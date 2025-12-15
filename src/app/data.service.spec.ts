import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of stats', () => {
    const stats = service.getStats();
    expect(stats.length).toBeGreaterThan(0);
    expect(stats[0].name).toBeDefined();
    expect(stats[0].value).toBeDefined();
    expect(stats[0].description).toBeDefined();
  });
});
