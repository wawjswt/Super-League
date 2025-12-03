import React from 'react';

interface PitchVisualizerProps {
  formation: string;
  primaryColor: string;
  secondaryColor: string;
}

const PitchVisualizer: React.FC<PitchVisualizerProps> = ({ formation, primaryColor, secondaryColor }) => {
  
  const getRows = (fmt: string) => {
    // Extract the first occurrence of a formation pattern (e.g., "4-4-2", "3-5-2", "4-1-2-1-2")
    const match = fmt.match(/(\d)-(\d)-(\d)(?:-(\d))?/);
    
    let parts = [4, 4, 2]; // Default fallback
    
    if (match) {
        // match[0] is the full clean string "4-4-2"
        parts = match[0].split('-').map(n => parseInt(n, 10));
    }

    // Add Goalkeeper (1)
    // Then REVERSE the array so GK is at the end (bottom of visualizer)
    // [1, 4, 4, 2] becomes [2, 4, 4, 1]
    return [1, ...parts].reverse(); 
  };

  const rows = getRows(formation);

  return (
    <div className="relative w-full aspect-[2/3] bg-emerald-800 rounded-lg border-2 border-emerald-600 overflow-hidden shadow-inner">
      {/* Pitch Markings */}
      <div className="absolute inset-0 flex flex-col justify-between p-2 pointer-events-none opacity-30">
        <div className="w-full h-px bg-white/50"></div> {/* Goal Line (Top - Opponent) */}
        <div className="w-full h-px bg-white/50"></div> {/* Halfway Line */}
        <div className="w-full h-px bg-white/50"></div> {/* Goal Line (Bottom - Own) */}
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-white/30"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-12 border-b border-x border-white/30"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-12 border-t border-x border-white/30"></div>

      {/* Players */}
      <div className="absolute inset-0 flex flex-col justify-around py-4">
        {rows.map((count, rowIndex) => {
          // Identify GK: It's the last row now because we reversed the array
          const isGK = rowIndex === rows.length - 1;

          return (
            <div key={rowIndex} className="flex justify-around items-center w-full px-4">
              {Array.from({ length: count }).map((_, playerIndex) => (
                <div
                  key={`${rowIndex}-${playerIndex}`}
                  className="w-4 h-4 rounded-full border border-white shadow-md transform transition-transform hover:scale-150"
                  style={{ backgroundColor: isGK ? '#fbbf24' : primaryColor }}
                  title={isGK ? "GK" : "Player"}
                ></div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PitchVisualizer;