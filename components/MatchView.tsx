import React, { useState, useEffect, useRef } from 'react';
import { TeamData, MatchResult, MatchContext, MatchEvent } from '../types';
import { simulateMatch, generateMatchContext } from '../services/matchService';
import { Trophy, Shield, MapPin, Clock, CloudRain, Play, FastForward, RotateCcw, Award } from 'lucide-react';
import PitchVisualizer from './PitchVisualizer';

interface MatchViewProps {
  teams: TeamData[];
}

const MatchView: React.FC<MatchViewProps> = ({ teams }) => {
  const [step, setStep] = useState<'selection' | 'preview' | 'playing' | 'finished'>('selection');
  const [homeTeamId, setHomeTeamId] = useState<string>('');
  const [awayTeamId, setAwayTeamId] = useState<string>('');
  
  const [matchResult, setMatchResult] = useState<MatchResult | null>(null);
  const [matchContext, setMatchContext] = useState<MatchContext | null>(null);
  
  // Playback state
  const [displayEvents, setDisplayEvents] = useState<MatchEvent[]>([]);
  const [currentMinute, setCurrentMinute] = useState(0);
  const [score, setScore] = useState({ home: 0, away: 0 });
  const [playbackSpeed, setPlaybackSpeed] = useState(100); // ms per "minute"
  const scrollRef = useRef<HTMLDivElement>(null);

  const homeTeam = teams.find(t => t.id === homeTeamId);
  const awayTeam = teams.find(t => t.id === awayTeamId);

  // Auto-scroll feed
  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayEvents]);

  const handleStartMatch = () => {
    if (!homeTeam || !awayTeam) return;
    const context = generateMatchContext();
    const result = simulateMatch(homeTeam, awayTeam);
    
    setMatchContext(context);
    setMatchResult(result);
    setStep('preview');
  };

  const handleKickOff = () => {
    setStep('playing');
    setCurrentMinute(0);
    setScore({ home: 0, away: 0 });
    setDisplayEvents([]);
    runSimulation(1, 45); // Start First Half
  };

  const runSimulation = (startMin: number, endMin: number) => {
    if (!matchResult) return;
    
    let min = startMin;
    const interval = setInterval(() => {
        setCurrentMinute(min);
        
        // Find events happening at this minute
        const newEvents = matchResult.events.filter(e => e.minute === min);
        if (newEvents.length > 0) {
            setDisplayEvents(prev => [...prev, ...newEvents]);
            
            // Update Score if goal
            newEvents.forEach(e => {
                if (e.type === 'goal' && e.scoreAfter) {
                    setScore(e.scoreAfter);
                }
            });
        }

        if (min >= endMin) {
            clearInterval(interval);
        } else {
            min++;
        }
    }, playbackSpeed);
  };

  const handleSecondHalf = () => {
      runSimulation(46, 90);
  };

  const finishMatch = () => {
    setStep('finished');
  };

  // --- UI SECTIONS ---

  if (step === 'selection') {
      return (
          <div className="max-w-4xl mx-auto py-12 animate-in fade-in">
              <div className="text-center mb-12">
                  <h2 className="text-4xl font-display font-bold text-white mb-4">Match Center</h2>
                  <p className="text-slate-400">Select two legendary teams to simulate a historic clash.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  {/* Home Selector */}
                  <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-center space-y-4">
                      <div className="text-sm uppercase tracking-widest text-slate-500 font-bold">Home Team</div>
                      <select 
                        className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-yellow-500 outline-none"
                        value={homeTeamId}
                        onChange={(e) => setHomeTeamId(e.target.value)}
                      >
                          <option value="">Select Team...</option>
                          {teams.filter(t => t.id !== awayTeamId).map(t => (
                              <option key={t.id} value={t.id}>{t.nameEN}</option>
                          ))}
                      </select>
                      {homeTeam && (
                          <div className="animate-in zoom-in duration-300">
                               <div className="w-20 h-20 rounded-full mx-auto mb-2 border-4 shadow-lg flex items-center justify-center text-2xl font-bold bg-slate-900" style={{ borderColor: homeTeam.primaryColor, color: homeTeam.primaryColor }}>
                                   {homeTeam.nameEN.charAt(0)}
                               </div>
                               <div className="font-bold text-lg">{homeTeam.nameEN}</div>
                               <div className="text-xs text-slate-400">{homeTeam.stadium}</div>
                          </div>
                      )}
                  </div>

                  {/* VS Badge */}
                  <div className="flex justify-center">
                      <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-black font-black text-2xl shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                          VS
                      </div>
                  </div>

                   {/* Away Selector */}
                   <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-center space-y-4">
                      <div className="text-sm uppercase tracking-widest text-slate-500 font-bold">Away Team</div>
                      <select 
                        className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-yellow-500 outline-none"
                        value={awayTeamId}
                        onChange={(e) => setAwayTeamId(e.target.value)}
                      >
                          <option value="">Select Team...</option>
                          {teams.filter(t => t.id !== homeTeamId).map(t => (
                              <option key={t.id} value={t.id}>{t.nameEN}</option>
                          ))}
                      </select>
                      {awayTeam && (
                          <div className="animate-in zoom-in duration-300">
                               <div className="w-20 h-20 rounded-full mx-auto mb-2 border-4 shadow-lg flex items-center justify-center text-2xl font-bold bg-slate-900" style={{ borderColor: awayTeam.primaryColor, color: awayTeam.primaryColor }}>
                                   {awayTeam.nameEN.charAt(0)}
                               </div>
                               <div className="font-bold text-lg">{awayTeam.nameEN}</div>
                               <div className="text-xs text-slate-400">Visiting</div>
                          </div>
                      )}
                  </div>
              </div>

              <div className="mt-12 text-center">
                  <button 
                    disabled={!homeTeam || !awayTeam}
                    onClick={handleStartMatch}
                    className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-yellow-500/20"
                  >
                      Proceed to Match
                  </button>
              </div>
          </div>
      );
  }

  // --- COMMON HEADER FOR PREVIEW / PLAYING / FINISHED ---
  if (!homeTeam || !awayTeam || !matchResult || !matchContext) return null;

  return (
    <div className="max-w-6xl mx-auto py-8 animate-in fade-in">
        
        {/* Scoreboard Header */}
        <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl mb-8 relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800"></div>
            
            <div className="relative z-10 p-8">
                 <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                      {/* Home */}
                      <div className="flex items-center gap-6 flex-1 justify-end text-right">
                           <div>
                               <h2 className="text-3xl font-display font-bold text-white">{homeTeam.nameEN}</h2>
                               <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">{homeTeam.coach}</p>
                           </div>
                           <div className="w-20 h-20 rounded-full border-4 shadow-lg flex items-center justify-center text-3xl font-bold bg-slate-800" style={{ borderColor: homeTeam.primaryColor, color: homeTeam.primaryColor }}>
                               {homeTeam.nameEN.charAt(0)}
                           </div>
                      </div>

                      {/* Score */}
                      <div className="flex flex-col items-center px-8">
                          <div className="bg-black/50 backdrop-blur px-6 py-2 rounded-lg border border-white/10 mb-2">
                              <span className="text-5xl font-mono font-bold text-yellow-500 tracking-widest">
                                  {step === 'preview' ? '0 - 0' : `${score.home} - ${score.away}`}
                              </span>
                          </div>
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                               {step === 'playing' && <span className="text-red-500 animate-pulse">● LIVE</span>}
                               <span>{step === 'finished' ? 'Full Time' : `${currentMinute}'`}</span>
                          </div>
                      </div>

                      {/* Away */}
                      <div className="flex items-center gap-6 flex-1 justify-start text-left">
                           <div className="w-20 h-20 rounded-full border-4 shadow-lg flex items-center justify-center text-3xl font-bold bg-slate-800" style={{ borderColor: awayTeam.primaryColor, color: awayTeam.primaryColor }}>
                               {awayTeam.nameEN.charAt(0)}
                           </div>
                           <div>
                               <h2 className="text-3xl font-display font-bold text-white">{awayTeam.nameEN}</h2>
                               <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">{awayTeam.coach}</p>
                           </div>
                      </div>
                 </div>

                 {/* Match Context Info Bar */}
                 <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-slate-500" />
                          <span>{homeTeam.stadium}</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <CloudRain className="w-4 h-4 text-slate-500" />
                          <span>{matchContext.weather}</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-slate-500" />
                          <span>{matchContext.timeOfDay}</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-slate-500" />
                          <span>Att: {matchContext.attendance.toLocaleString()}</span>
                      </div>
                 </div>
            </div>
        </div>

        {/* --- STEP: PREVIEW --- */}
        {step === 'preview' && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 flex flex-col items-center justify-center text-center space-y-6">
                      <Shield className="w-16 h-16 text-yellow-500 mb-4" />
                      <div>
                          <h3 className="text-2xl font-bold text-white mb-2">Ready for Kick-off</h3>
                          <p className="text-slate-400">The players are in the tunnel. The atmosphere is electric.</p>
                      </div>
                      <button 
                          onClick={handleKickOff}
                          className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-105"
                      >
                          <Play className="w-5 h-5 fill-current" /> Start Match
                      </button>
                 </div>
                 
                 {/* Mini Pitch Preview */}
                 <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                      <div className="opacity-70 scale-90">
                          <PitchVisualizer formation={homeTeam.formation} primaryColor={homeTeam.primaryColor} secondaryColor={homeTeam.secondaryColor} />
                      </div>
                 </div>
             </div>
        )}

        {/* --- STEP: PLAYING --- */}
        {(step === 'playing' || step === 'finished') && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Live Feed */}
                <div className="lg:col-span-2 bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden flex flex-col h-[600px]">
                    <div className="p-4 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
                        <h3 className="font-bold text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            Live Commentary
                        </h3>
                        {step === 'playing' && (
                             <div className="flex gap-2">
                                {currentMinute < 45 && (
                                    <button 
                                        onClick={() => setPlaybackSpeed(20)}
                                        className="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded text-white"
                                    >
                                        Fast Forward
                                    </button>
                                )}
                                {currentMinute === 45 && (
                                     <button 
                                        onClick={handleSecondHalf}
                                        className="flex items-center gap-2 bg-yellow-500 text-black hover:bg-yellow-400 px-4 py-1.5 rounded font-bold text-xs"
                                    >
                                        <Play className="w-3 h-3 fill-current" /> Start 2nd Half
                                    </button>
                                )}
                                {currentMinute >= 90 && (
                                     <button 
                                        onClick={finishMatch}
                                        className="bg-white text-black hover:bg-slate-200 px-4 py-1.5 rounded font-bold text-xs"
                                    >
                                        Full Time Report
                                    </button>
                                )}
                             </div>
                        )}
                    </div>
                    
                    <div 
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth"
                    >
                        {displayEvents.length === 0 && (
                            <div className="text-center text-slate-500 py-20 italic">
                                The match is about to begin...
                            </div>
                        )}
                        {displayEvents.map((event) => {
                             const isGoal = event.type === 'goal';
                             const isHomeEvent = event.teamId === homeTeam.id;
                             const color = isHomeEvent ? homeTeam.primaryColor : awayTeam.primaryColor;

                             return (
                                 <div key={event.id} className={`flex gap-4 ${isGoal ? 'bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/30' : ''}`}>
                                      <div className="w-12 text-right font-mono text-slate-500 text-sm pt-1">
                                          {event.minute}'
                                      </div>
                                      <div className="flex-1">
                                          <div className="flex items-center gap-2 mb-1">
                                               {event.type === 'goal' && <Trophy className="w-4 h-4 text-yellow-500" />}
                                               {event.type === 'whistle' && <Clock className="w-4 h-4 text-slate-400" />}
                                               {event.teamId && (
                                                   <span 
                                                    className="text-xs font-bold uppercase px-2 py-0.5 rounded bg-slate-800"
                                                    style={{ color: color }}
                                                   >
                                                       {isHomeEvent ? homeTeam.nameEN : awayTeam.nameEN}
                                                   </span>
                                               )}
                                          </div>
                                          <p className={`text-sm ${isGoal ? 'text-white font-bold text-lg' : 'text-slate-300'}`}>
                                              {event.description}
                                          </p>
                                      </div>
                                 </div>
                             );
                        })}
                        {step === 'finished' && (
                             <div className="text-center py-8 border-t border-white/5 mt-8">
                                 <p className="text-slate-400 italic">Match Ended</p>
                             </div>
                        )}
                    </div>
                </div>

                {/* Sidebar Stats */}
                <div className="space-y-6">
                    {/* Match Stats */}
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                        <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">Match Stats</h4>
                        
                        <div className="space-y-6">
                            {/* Possession */}
                            <div>
                                <div className="flex justify-between text-xs text-slate-400 mb-2">
                                    <span>Possession</span>
                                </div>
                                <div className="h-2 bg-slate-700 rounded-full overflow-hidden flex">
                                    <div className="h-full bg-blue-500" style={{ width: `${matchResult.stats.possession}%`, backgroundColor: homeTeam.primaryColor }}></div>
                                    <div className="h-full bg-red-500" style={{ width: `${100 - matchResult.stats.possession}%`, backgroundColor: awayTeam.primaryColor }}></div>
                                </div>
                                <div className="flex justify-between text-sm font-bold text-white mt-1">
                                    <span>{matchResult.stats.possession}%</span>
                                    <span>{100 - matchResult.stats.possession}%</span>
                                </div>
                            </div>

                             {/* Shots */}
                             <div>
                                <div className="flex justify-between text-xs text-slate-400 mb-2">
                                    <span>Chances Created</span>
                                </div>
                                <div className="flex justify-between text-xl font-mono font-bold text-white">
                                    <span style={{color: homeTeam.primaryColor}}>{matchResult.stats.shotsHome}</span>
                                    <span style={{color: awayTeam.primaryColor}}>{matchResult.stats.shotsAway}</span>
                                </div>
                             </div>

                             {/* xG */}
                             <div>
                                <div className="flex justify-between text-xs text-slate-400 mb-2">
                                    <span>Expected Goals (xG)</span>
                                </div>
                                <div className="flex justify-between text-lg font-mono text-slate-300">
                                    <span>{matchResult.stats.xgHome}</span>
                                    <span>{matchResult.stats.xgAway}</span>
                                </div>
                             </div>
                        </div>
                    </div>

                    {/* MVP Card (Only when finished) */}
                    {step === 'finished' && (
                         <div className="bg-gradient-to-br from-yellow-500/20 to-slate-900 border border-yellow-500/50 p-6 rounded-2xl animate-in zoom-in duration-500">
                             <div className="flex items-center gap-3 mb-4">
                                 <Award className="w-8 h-8 text-yellow-400" />
                                 <div>
                                     <h4 className="text-yellow-400 font-display font-bold text-xl uppercase tracking-wide">Man of the Match</h4>
                                 </div>
                             </div>
                             
                             <div className="mb-4">
                                 <div className="text-3xl font-bold text-white mb-1">{matchResult.mvp.player}</div>
                                 <div className="text-sm font-bold uppercase tracking-wider" style={{ color: matchResult.mvp.teamId === homeTeam.id ? homeTeam.primaryColor : awayTeam.primaryColor }}>
                                     {matchResult.mvp.teamId === homeTeam.id ? homeTeam.nameEN : awayTeam.nameEN}
                                 </div>
                             </div>

                             <div className="flex items-center gap-4 mb-4">
                                 <div className="bg-slate-900/50 px-3 py-1 rounded text-sm text-white font-mono border border-white/10">
                                     RATING: <span className="text-yellow-400 font-bold">{matchResult.mvp.rating}</span>
                                 </div>
                             </div>

                             <p className="text-slate-300 italic text-sm border-t border-white/10 pt-4">
                                 "{matchResult.mvp.description}"
                             </p>
                         </div>
                    )}
                    
                    {step === 'finished' && (
                        <button 
                            onClick={() => {
                                setStep('selection');
                                setHomeTeamId('');
                                setAwayTeamId('');
                            }}
                            className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-4 rounded-xl font-bold transition-all"
                        >
                            <RotateCcw className="w-4 h-4" /> Simulate Another Match
                        </button>
                    )}
                </div>
            </div>
        )}
    </div>
  );
};

export default MatchView;