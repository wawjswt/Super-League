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