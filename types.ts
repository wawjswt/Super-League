
export interface TeamStats {
  attack: number;
  defense: number;
  midfield: number;
  pace: number;
  creativity: number;
  discipline: number;
}

export interface PlayerAttributes {
  ATT: number;
  MID: number;
  DEF: number;
  SPD: number;
  CRE: number;
  DIS: number;
}

export interface Player {
  name: string;
  position: string;
  role: string;
  ovr: number;
  attributes: PlayerAttributes;
  isCaptain?: boolean;
}

export interface TeamData {
  id: string;
  nameCN: string;
  nameEN: string;
  coach: string;
  formation: string;
  stadium: string;
  tacticalStyle: string;
  descriptionCN: string;
  descriptionEN: string;
  primaryColor: string;
  secondaryColor: string;
  stats: TeamStats;
  squad?: Player[];
}

export interface LeagueResponse {
  teams: TeamData[];
}

// Match Simulation Types
export type MatchEventType = 'goal' | 'card' | 'sub' | 'whistle' | 'chance';

export interface MatchEvent {
  id: number;
  minute: number;
  type: MatchEventType;
  teamId?: string; // null if global event like whistle
  player?: string; // Name of player involved
  assist?: string; // Name of assisting player
  description: string;
  scoreAfter?: { home: number; away: number };
}

export interface MatchStats {
  possession: number; // Percentage for home team
  shotsHome: number;
  shotsAway: number;
  xgHome: number;
  xgAway: number;
}

export interface MatchResult {
  homeScore: number;
  awayScore: number;
  events: MatchEvent[];
  stats: MatchStats;
  mvp: {
    player: string;
    teamId: string;
    rating: number;
    description: string;
  };
  summary: string;
}

export interface MatchContext {
  weather: string;
  timeOfDay: string;
  attendance: number;
}