// FIX: Removed deprecated 'Schema' type from '@google/genai' import and its usages. The object types are now inferred.
import { GoogleGenAI, Type } from "@google/genai";
import { LeagueResponse, TeamData, Player, TeamStats } from "../types";
import { SQUAD_DB } from "../data/squads";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const teamStatsSchema = {
  type: Type.OBJECT,
  properties: {
    attack: { type: Type.INTEGER, description: "Rating 0-100" },
    defense: { type: Type.INTEGER, description: "Rating 0-100" },
    midfield: { type: Type.INTEGER, description: "Rating 0-100" },
    pace: { type: Type.INTEGER, description: "Rating 0-100" },
    creativity: { type: Type.INTEGER, description: "Rating 0-100" },
    discipline: { type: Type.INTEGER, description: "Rating 0-100" },
  },
  required: ["attack", "defense", "midfield", "pace", "creativity", "discipline"],
};

const teamSchema = {
  type: Type.OBJECT,
  properties: {
    id: { type: Type.STRING },
    nameCN: { type: Type.STRING, description: "Creative Chinese team name" },
    nameEN: { type: Type.STRING, description: "Creative English team name" },
    coach: { type: Type.STRING, description: "Real legendary football manager name" },
    formation: { type: Type.STRING, description: "e.g., 4-3-3, 4-4-2, 3-5-2" },
    stadium: { type: Type.STRING, description: "Real historic stadium name" },
    tacticalStyle: { type: Type.STRING, description: "e.g., Tiki-Taka, Catenaccio, Total Football" },
    descriptionEN: { type: Type.STRING, description: "Compelling 1-sentence lore about the team's philosophy in English" },
    descriptionCN: { type: Type.STRING, description: "Compelling 1-sentence lore about the team's philosophy in Chinese" },
    primaryColor: { type: Type.STRING, description: "Hex color code" },
    secondaryColor: { type: Type.STRING, description: "Hex color code" },
    stats: teamStatsSchema,
  },
  required: ["id", "nameCN", "nameEN", "coach", "formation", "stadium", "tacticalStyle", "descriptionEN", "descriptionCN", "primaryColor", "secondaryColor", "stats"],
};

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    teams: {
      type: Type.ARRAY,
      items: teamSchema,
    },
  },
  required: ["teams"],
};

// Helper to categorize positions
const getPosCategory = (pos: string): 'GK' | 'DF' | 'MF' | 'FW' => {
    const p = pos.toUpperCase();
    if (p.includes('GK')) return 'GK';
    if (p.includes('CB') || p.includes('LB') || p.includes('RB') || p.includes('WB') || p.includes('SW')) return 'DF';
    if (p.includes('CM') || p.includes('CDM') || p.includes('CAM') || p.includes('LM') || p.includes('RM') || p.includes('AM')) return 'MF';
    if (p.includes('ST') || p.includes('CF') || p.includes('LW') || p.includes('RW') || p.includes('FW') || p.includes('SS')) return 'FW';
    return 'MF'; // Default fallback
};

const calculateTeamStats = (squad: Player[]): TeamStats => {
  const starters = squad.filter(p => p.role === 'Starter');
  if (starters.length === 0) return { attack: 50, defense: 50, midfield: 50, pace: 50, creativity: 50, discipline: 50 };

  // Weights configuration: How much does a player's attribute count towards the team stat based on their position?
  // e.g. For "Team Attack", a Forward's ATT attribute is weighted 1.5x, while a Defender's is 0.2x.
  const weights = {
      attack:     { FW: 1.5, MF: 1.0, DF: 0.3, GK: 0.0 },
      defense:    { GK: 1.5, DF: 1.5, MF: 0.8, FW: 0.2 },
      midfield:   { MF: 1.5, FW: 0.5, DF: 0.5, GK: 0.1 },
      pace:       { FW: 1.2, MF: 1.0, DF: 1.0, GK: 0.5 },
      creativity: { MF: 1.5, FW: 1.2, DF: 0.5, GK: 0.2 },
      discipline: { DF: 1.5, GK: 1.0, MF: 1.0, FW: 0.5 }
  };

  const calculateWeightedStat = (statName: keyof typeof weights, attributeName: keyof Player['attributes']) => {
      let totalWeight = 0;
      let weightedSum = 0;

      starters.forEach(player => {
          const category = getPosCategory(player.position);
          const weight = weights[statName][category];
          const value = player.attributes[attributeName];

          weightedSum += value * weight;
          totalWeight += weight;
      });

      return Math.round(weightedSum / totalWeight);
  };

  return {
    attack: calculateWeightedStat('attack', 'ATT'),
    defense: calculateWeightedStat('defense', 'DEF'),
    midfield: calculateWeightedStat('midfield', 'MID'),
    pace: calculateWeightedStat('pace', 'SPD'),
    creativity: calculateWeightedStat('creativity', 'CRE'),
    discipline: calculateWeightedStat('discipline', 'DIS')
  };
};

export const fetchLeagueData = async (): Promise<LeagueResponse> => {
  // Fixed data provided by the user
  const specificTeams = [
    { nameCN: "绯红王朝", nameEN: "The Crimson Dynasty", coach: "Sir Alex Ferguson", stadium: "Old Trafford", formation: "4-4-2 / 4-4-1-1", style: "Fergie Time & Wing Play" },
    { nameCN: "蔚蓝控域", nameEN: "Azure Control", coach: "Pep Guardiola", stadium: "Etihad Stadium", formation: "4-3-3 / 3-2-4-1", style: "Tiki-Taka & Positional Play" },
    { nameCN: "黑曜石堡垒", nameEN: "Obsidian Fortress", coach: "José Mourinho", stadium: "Stamford Bridge", formation: "4-2-3-1 / 5-4-1", style: "Park the Bus & Counter" },
    { nameCN: "银河白昼", nameEN: "White Galaxy", coach: "Zinedine Zidane", stadium: "Stade de France", formation: "4-3-3 (Diamond)", style: "Clutch & Fluidity" },
    { nameCN: "金耀王冠", nameEN: "Golden Sovereign", coach: "Carlo Ancelotti", stadium: "Santiago Bernabéu", formation: "4-3-2-1 / 4-3-3", style: "Laissez-faire" },
    { nameCN: "重金属风暴", nameEN: "Heavy Metal Storm", coach: "Jürgen Klopp", stadium: "Anfield", formation: "4-3-3", style: "Gegenpressing" },
    { nameCN: "橙色革命", nameEN: "Orange Revolution", coach: "Johan Cruyff", stadium: "Camp Nou", formation: "3-4-3 / 4-3-3", style: "Total Football" },
    { nameCN: "铁幕军团", nameEN: "The Iron Curtain", coach: "Helenio Herrera", stadium: "Giuseppe Meazza", formation: "5-3-2 (Sweeper)", style: "Catenaccio" },
    { nameCN: "战术米兰", nameEN: "Tactical Milan", coach: "Arrigo Sacchi", stadium: "San Siro", formation: "4-4-2 (Flat)", style: "Zonal Pressing" },
    { nameCN: "优雅枪手", nameEN: "Elegant Cannons", coach: "Arsène Wenger", stadium: "Highbury", formation: "4-2-3-1 / 4-4-2", style: "Wengerball" }
  ];

  const prompt = `
    You are the Chairman of the "Pantheon Super League".
    
    Task:
    Enrich the following list of specific football teams to populate the league database.

    Input Data:
    ${JSON.stringify(specificTeams)}

    Requirements for JSON Output:
    1. **Data Consistency**: Use the provided Name (CN/EN), Coach, Stadium, and Tactical Style EXACTLY as provided.
    2. **Formation**: The input formation might be complex (e.g., "4-4-2 / 4-4-1-1"). In your output 'formation' field, ONLY use the primary/first formation as a clean string (e.g., "4-4-2").
    3. **Colors**: Assign specific hex colors based on the team identity:
       - Crimson Dynasty: #DA291C (Man Utd Red) & #FBE122 (Gold)
       - Azure Control: #6CABDD (City Blue) & #FFFFFF
       - Obsidian Fortress: #034694 (Chelsea Blue) & #1c1c1c (Obsidian)
       - White Galaxy: #FFFFFF & #000000 (Classic)
       - Golden Sovereign: #FEBE10 (Gold) & #00529F (Real Madrid Blue)
       - Heavy Metal Storm: #C8102E (Liverpool Red) & #00B2A9 (Teal)
       - Orange Revolution: #EDBB00 (Barca Yellow) & #A50044 (Barca Blue) or Dutch Orange.
       - Iron Curtain: #002D72 (Inter Blue) & #000000
       - Tactical Milan: #AC162C (Milan Red) & #000000
       - Elegant Cannons: #EF0107 (Arsenal Red) & #FFFFFF
    4. **Stats**: Generate specific stats (0-100) reflecting the 'Tactical Style'.
       - 'Tiki-Taka': High Creativity, High Midfield.
       - 'Catenaccio': High Defense, High Discipline.
       - 'Heavy Metal': High Pace, High Attack.
    5. **Description**: Write a compelling 1-sentence lore description suitable for a football trading card.
       - **descriptionEN**: The description in English.
       - **descriptionCN**: The description in Chinese.

    Return ONLY the raw JSON object matching the schema.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const jsonText = response.text;
    if (!jsonText) throw new Error("No data returned from Gemini");
    
    const parsedData = JSON.parse(jsonText) as LeagueResponse;

    // Post-process: Attach squads from local DB if available
    const enrichedTeams = parsedData.teams.map(team => {
        const squadData = SQUAD_DB[team.nameEN]; 
        if (squadData) {
            const calculatedStats = calculateTeamStats(squadData);
            return { ...team, squad: squadData, stats: calculatedStats };
        }
        return team;
    });

    return { teams: enrichedTeams };
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};