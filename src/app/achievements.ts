export interface Quest {
  type: 'quest';
  title: string;
  description: string;
  reward: number;
  completed: boolean;
}

export interface Achievement {
  type: 'achievement';
  title:string;
  description: string;
  unlocked: boolean;
}

export type GameEntity = Quest | Achievement;
