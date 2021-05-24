export type Day = { date: string; count: number; intensity: number };
export type Week = Day[];

export interface Contributions {
  total: number;
  contributions: Week[];
}
