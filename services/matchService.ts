
import { TeamData, MatchResult, MatchEvent, MatchContext, Player } from '../types';

const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const WEATHER_CONDITIONS = [
  "Clear Night", "Rainy", "Heavy Rain", "Partly Cloudy", "Starry Night", "Misty", "Windy"
];

// Fallback player to prevent crashes
const DUMMY_PLAYER: Player = { 
    name: "Unknown Player", 
    position: "SUB", 
    role: "Substitute", 
    ovr: 70, 
    attributes: { ATT: 70, MID: 70, DEF: 70, SPD: 70, CRE: 70, DIS: 70 } 
};

export const generateMatchContext = (stadiumCapacity: number = 75000): MatchContext => {
  return {
    weather: WEATHER_CONDITIONS[getRandomInt(0, WEATHER_CONDITIONS.length - 1)],
    timeOfDay: "20:45", // Classic Champions League time
    attendance: getRandomInt(stadiumCapacity - 5000, stadiumCapacity),
  };
};

const getScorer = (team: TeamData): Player => {
    // Safety check for empty squad
    if (!team.squad || team.squad.length === 0) {
        return DUMMY_PLAYER;
    }
    
    // Weights for scoring probability based on position
    const candidates: Player[] = [];
    team.squad.forEach(p => {
        if (p.role !== 'Starter') return;
        let weight = 1;
        if (p.position.includes('ST') || p.position.includes('FW')) weight = 15; // Increased weight for strikers
        else if (p.position.includes('W') || p.position.includes('SS')) weight = 10;
        else if (p.position.includes('AM') || p.position.includes('CM')) weight = 5;
        else if (p.position.includes('DF') || p.position.includes('CDM')) weight = 1;
        
        // Boost by ATT attribute
        weight += Math.floor(p.attributes.ATT / 8);

        for (let i = 0; i < weight; i++) candidates.push(p);
    });

    // Fallback if candidates is empty
    if (candidates.length === 0) return team.squad[0] || DUMMY_PLAYER;

    return candidates[getRandomInt(0, candidates.length - 1)];
};

const getAssister = (team: TeamData, scorer: Player): Player | null => {
    if (!team.squad || team.squad.length === 0) return null;
    if (Math.random() > 0.65) return null; // 35% unassisted (solo run, penalty, rebound)

    const candidates: Player[] = [];
    team.squad.forEach(p => {
        if (p.role !== 'Starter' || p.name === scorer.name) return;
        let weight = 1;
        // Creators have higher weight
        weight += Math.floor(p.attributes.CRE / 5);
        if (p.attributes.MID > 90) weight += 5;

        for (let i = 0; i < weight; i++) candidates.push(p);
    });

    if (candidates.length === 0) return null;

    return candidates[getRandomInt(0, candidates.length - 1)];
};

const getOffender = (team: TeamData): Player => {
    if (!team.squad || team.squad.length === 0) {
        return DUMMY_PLAYER;
    }
    const candidates = team.squad.filter(p => p.role === 'Starter' && (p.attributes.DIS < 85 || p.position.includes('DF') || p.position.includes('CDM')));
    
    // Fallback to any player if no specific candidates found
    return candidates.length > 0 ? candidates[getRandomInt(0, candidates.length - 1)] : (team.squad[0] || DUMMY_PLAYER);
};

const generateGoalDescription = (scorer: string, assist: string | null | undefined, time: number): string => {
    const soloPhrases = [
        "What a solo run! He dances past three defenders and slots it home!",
        "An absolute thunderbolt from 30 yards! Unstoppable!",
        "He pounces on a defensive error and finishes calmly.",
        "A perfectly placed free-kick into the top corner!",
        "Cool as you like from the penalty spot.",
        "He rounds the keeper and taps it into the empty net!"
    ];
    
    const assistPhrases = [
        `Beautiful link-up play finished off by ${scorer} after a great ball from ${assist}.`,
        `${assist} whips in a dangerous cross and ${scorer} heads it in!`,
        `A magical through ball by ${assist} finds ${scorer} who makes no mistake.`,
        `Tiki-taka at its finest! ${assist} lays it off for ${scorer} to tap in.`,
        `${assist} drives forward and cuts it back for ${scorer}.`,
        `A lovely one-two between ${assist} and ${scorer}, and it's a goal!`
    ];

    if (assist) return assistPhrases[getRandomInt(0, assistPhrases.length - 1)];
    return soloPhrases[getRandomInt(0, soloPhrases.length - 1)];
};

const generateCardDescription = (player: string, type: 'yellow' | 'red'): string => {
    if (type === 'red') {
        return `${player} slides in with a reckless two-footed challenge! The referee shows a RED CARD! They are down to 10 men!`;
    }
    const yellowPhrases = [
        `${player} goes into the book for a tactical foul.`,
        `Yellow card for ${player} after pulling the shirt of the opponent.`,
        `${player} argues with the referee and gets booked.`,
        `A late challenge by ${player} earns a yellow card.`
    ];
    return yellowPhrases[getRandomInt(0, yellowPhrases.length - 1)];
};

export const simulateMatch = (home: TeamData, away: TeamData): MatchResult => {
    const events: MatchEvent[] = [];
    let homeScore = 0;
    let awayScore = 0;
    let homeRedCards = 0;
    let awayRedCards = 0;

    // 1. Calculate Base Team Power Ratings
    // Attack vs Defense
    let homeAttPower = (home.stats.attack * 1.3 + home.stats.pace * 0.9 + home.stats.creativity) / 3;
    let awayDefPower = (away.stats.defense * 1.4 + away.stats.discipline + away.stats.pace * 0.6) / 3;
    
    let awayAttPower = (away.stats.attack * 1.3 + away.stats.pace * 0.9 + away.stats.creativity) / 3;
    let homeDefPower = (home.stats.defense * 1.4 + home.stats.discipline + home.stats.pace * 0.6) / 3;

    // Midfield Battle (Determines Possession)
    let homeMidPower = (home.stats.midfield * 1.5 + home.stats.creativity + home.stats.discipline * 0.5) / 3;
    let awayMidPower = (away.stats.midfield * 1.5 + away.stats.creativity + away.stats.discipline * 0.5) / 3;
    
    const totalMid = homeMidPower + awayMidPower;
    const possession = Math.round((homeMidPower / totalMid) * 100); // Home possession %

    // 2. Determine Number of Chances based on dominance (Increased baseline for more action)
    let homeChances = Math.floor(Math.max(4, (homeAttPower / awayDefPower) * 6) + (possession > 55 ? 2 : 0) + getRandomInt(0, 3));
    let awayChances = Math.floor(Math.max(4, (awayAttPower / homeDefPower) * 6) + (possession < 45 ? 2 : 0) + getRandomInt(0, 3));

    // 3. Simulate Timeline
    const matchMoments: { team: 'home' | 'away' | 'global', type: 'chance' | 'foul', minute: number }[] = [];
    
    // Generate potential scoring minutes
    for(let i=0; i<homeChances; i++) matchMoments.push({ team: 'home', type: 'chance', minute: getRandomInt(1, 90) });
    for(let i=0; i<awayChances; i++) matchMoments.push({ team: 'away', type: 'chance', minute: getRandomInt(1, 90) });
    
    // Generate potential fouls/cards minutes (Random 3-6 per game)
    const foulCount = getRandomInt(3, 6);
    for(let i=0; i<foulCount; i++) matchMoments.push({ team: Math.random() > 0.5 ? 'home' : 'away', type: 'foul', minute: getRandomInt(1, 89) });

    // Sort by time
    matchMoments.sort((a, b) => a.minute - b.minute);

    // Whistle Start
    events.push({ id: 0, minute: 0, type: 'whistle', description: "The referee blows the whistle! The match begins!", scoreAfter: { home: 0, away: 0 } });

    // Process Moments
    let eventIdCounter = 1;
    
    matchMoments.forEach(moment => {
        // --- RED CARD IMPACT LOGIC ---
        // If a team has a red card, their defense drops and opponent chances increase effectively
        if (moment.team === 'home' && homeRedCards > 0) {
             // Home is attacking but has red card? Harder.
             // No change to calculation, but maybe skip some chances?
             if (Math.random() < 0.2) return; // 20% chance to lose the chance
        }
        if (moment.team === 'away' && awayRedCards > 0) {
             if (Math.random() < 0.2) return;
        }

        // If Opponent has red card, current attacker has advantage
        const attackerHasAdvantage = (moment.team === 'home' && awayRedCards > 0) || (moment.team === 'away' && homeRedCards > 0);
        const advantageMultiplier = attackerHasAdvantage ? 1.3 : 1.0; 

        if (moment.type === 'foul') {
            // Foul Logic
            const isHomeOffender = moment.team === 'home';
            const offendingTeam = isHomeOffender ? home : away;
            const offender = getOffender(offendingTeam);
            
            // Card Probability
            const rand = Math.random();
            if (rand < 0.05 && ((isHomeOffender && homeRedCards === 0) || (!isHomeOffender && awayRedCards === 0))) {
                // RED CARD (5% chance on a foul event, max 1 per team to avoid game breaking logic for now)
                if (isHomeOffender) homeRedCards++; else awayRedCards++;
                events.push({
                    id: eventIdCounter++,
                    minute: moment.minute,
                    type: 'card',
                    teamId: offendingTeam.id,
                    player: offender.name.split('(')[0],
                    description: generateCardDescription(offender.name.split('(')[0], 'red')
                });
            } else if (rand < 0.35) {
                // YELLOW CARD
                events.push({
                    id: eventIdCounter++,
                    minute: moment.minute,
                    type: 'card',
                    teamId: offendingTeam.id,
                    player: offender.name.split('(')[0],
                    description: generateCardDescription(offender.name.split('(')[0], 'yellow')
                });
            }
            return;
        }

        // Chance Logic
        const isHome = moment.team === 'home';
        const att = (isHome ? homeAttPower : awayAttPower) * advantageMultiplier;
        const def = (isHome ? awayDefPower : homeDefPower) * (attackerHasAdvantage ? 0.7 : 1.0); // Def reduced if red card
        
        // Base conversion chance increased significantly
        // Was 0.15 + delta, now 0.25 + delta
        const conversionThreshold = 0.25 + ((att - def) / 150); 
        const roll = Math.random();

        if (roll < conversionThreshold) {
            // GOAL
            if (isHome) homeScore++; else awayScore++;
            
            const scoringTeam = isHome ? home : away;
            const scorer = getScorer(scoringTeam);
            const assist = getAssister(scoringTeam, scorer);
            
            events.push({
                id: eventIdCounter++,
                minute: moment.minute,
                type: 'goal',
                teamId: scoringTeam.id,
                player: scorer.name.split('(')[0],
                assist: assist ? assist.name.split('(')[0] : undefined,
                description: generateGoalDescription(scorer.name.split('(')[0], assist ? assist.name.split('(')[0] : null, moment.minute),
                scoreAfter: { home: homeScore, away: awayScore }
            });
        } else if (roll < conversionThreshold + 0.20) {
            // Missed Chance / Save (Add flavor text occasionally)
            if (Math.random() > 0.6) { // Don't spam these
                events.push({
                    id: eventIdCounter++,
                    minute: moment.minute,
                    type: 'chance',
                    teamId: isHome ? home.id : away.id,
                    description: isHome 
                        ? `${home.nameEN} creates a massive chance but the shot goes just wide!` 
                        : `${away.nameEN} forces a brilliant save from the goalkeeper!`
                });
            }
        }
    });

    // Whistle End
    events.push({ id: eventIdCounter++, minute: 90, type: 'whistle', description: "Full Time! The referee blows the final whistle.", scoreAfter: { home: homeScore, away: awayScore } });

    // 4. Determine MVP
    let mvpPlayer: Player;
    let mvpTeamId: string;
    let mvpDesc: string;

    const homeGoals = events.filter(e => e.type === 'goal' && e.teamId === home.id);
    const awayGoals = events.filter(e => e.type === 'goal' && e.teamId === away.id);

    // Fallback candidates if squads are minimal
    const homeFallBack = home.squad?.[0] || DUMMY_PLAYER;
    const awayFallBack = away.squad?.[0] || DUMMY_PLAYER;

    if (homeScore > awayScore) {
        mvpTeamId = home.id;
        if (homeGoals.length > 0) {
             // @ts-ignore
            const heroName = homeGoals[getRandomInt(0, homeGoals.length-1)].player;
            mvpPlayer = home.squad?.find(p => p.name.includes(heroName)) || homeFallBack;
            mvpDesc = `Led the line perfectly and scored crucial goals for the win.`;
        } else {
            mvpPlayer = home.squad?.find(p => p.position.includes('CM')) || homeFallBack;
            mvpDesc = "Controlled the midfield tempo throughout the game.";
        }
    } else if (awayScore > homeScore) {
        mvpTeamId = away.id;
        if (awayGoals.length > 0) {
             // @ts-ignore
             const heroName = awayGoals[getRandomInt(0, awayGoals.length-1)].player;
             mvpPlayer = away.squad?.find(p => p.name.includes(heroName)) || awayFallBack;
             mvpDesc = `Silenced the home crowd with a brilliant performance.`;
        } else {
             mvpPlayer = away.squad?.find(p => p.position.includes('GK')) || awayFallBack;
             mvpDesc = "Kept his team in the game with key saves.";
        }
    } else {
        // Draw
        if (homeScore > 1) {
             mvpTeamId = home.id;
             mvpPlayer = home.squad?.find(p => p.role === 'Starter' && p.position.includes('FW')) || homeFallBack;
             mvpDesc = "Electrifying pace, caused problems all night.";
        } else {
             mvpTeamId = away.id;
             mvpPlayer = away.squad?.find(p => p.role === 'Starter' && (p.position.includes('CB') || p.position.includes('GK'))) || awayFallBack;
             mvpDesc = "A rock at the back, securing a hard-fought draw.";
        }
    }

    return {
        homeScore,
        awayScore,
        events,
        stats: {
            possession,
            shotsHome: homeChances,
            shotsAway: awayChances,
            xgHome: Number((homeChances * 0.15).toFixed(2)),
            xgAway: Number((awayChances * 0.15).toFixed(2))
        },
        mvp: {
            player: mvpPlayer.name,
            teamId: mvpTeamId,
            rating: Number((Math.random() * (10 - 8.5) + 8.5).toFixed(1)),
            description: mvpDesc
        },
        summary: homeScore === awayScore ? "A tightly contested draw where both sides had their moments." : 
                 (homeScore > awayScore ? `${home.nameEN} dominated at home to secure a victory.` : 
                 `${away.nameEN} pulled off a tactical masterclass to win away.`)
    };
};
