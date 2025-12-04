import React from 'react';

interface TeamLogoProps {
  teamName: string;
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

const TeamLogo: React.FC<TeamLogoProps> = ({ teamName, className = "w-12 h-12", primaryColor = "currentColor", secondaryColor = "white" }) => {
  
  const getLogoContent = () => {
    switch (teamName) {
      case "The Crimson Dynasty":
        return (
          <g>
            <path d="M12 2C12 2 4 6 4 16C4 22 12 28 12 28C12 28 20 22 20 16C20 6 12 2 12 2Z" fill={primaryColor} />
            <path d="M12 6L14 10H10L12 6Z" fill={secondaryColor} />
            <path d="M9 12H15L12 18L9 12Z" fill={secondaryColor} />
            <path d="M8 14C8 14 6 16 6 18" stroke={secondaryColor} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M16 14C16 14 18 16 18 18" stroke={secondaryColor} strokeWidth="1.5" strokeLinecap="round" />
          </g>
        );
      case "Azure Control":
        return (
          <g>
            <circle cx="12" cy="12" r="10" fill={primaryColor} />
            <path d="M12 22V2" stroke={secondaryColor} strokeWidth="2" />
            <path d="M2 12H22" stroke={secondaryColor} strokeWidth="2" />
            <circle cx="12" cy="12" r="6" fill="none" stroke={secondaryColor} strokeWidth="1.5" />
            <path d="M12 6L14 10H10L12 6Z" fill={secondaryColor} />
          </g>
        );
      case "Obsidian Fortress":
        return (
          <g>
            <rect x="5" y="4" width="14" height="18" rx="2" fill={primaryColor} />
            <path d="M5 8H19" stroke={secondaryColor} strokeWidth="1.5" />
            <path d="M12 12V18" stroke={secondaryColor} strokeWidth="2" />
            <path d="M9 12H15" stroke={secondaryColor} strokeWidth="2" />
            <circle cx="12" cy="6" r="1" fill={secondaryColor} />
          </g>
        );
      case "White Galaxy":
        return (
          <g>
             <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" fill={secondaryColor} stroke={primaryColor} strokeWidth="1.5"/>
             <path d="M12 11L13 13L15 13L13.5 14.5L14 16.5L12 15.5L10 16.5L10.5 14.5L9 13L11 13L12 11Z" fill={primaryColor} />
          </g>
        );
      case "Golden Sovereign":
        return (
          <g>
            <path d="M4 6L8 18H16L20 6L12 2L4 6Z" fill={primaryColor} />
            <circle cx="12" cy="10" r="3" fill={secondaryColor} />
            <path d="M8 6L12 18L16 6" stroke={secondaryColor} strokeWidth="1" fill="none" />
          </g>
        );
      case "Heavy Metal Storm":
        return (
          <g>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={primaryColor} />
            <path d="M13 6L11 10H15L9 18L11 13H7L13 6Z" fill={secondaryColor} />
          </g>
        );
      case "Orange Revolution":
        return (
          <g>
            <path d="M3 3H21V21H3V3Z" fill={primaryColor} />
            <path d="M3 3L21 21" stroke={secondaryColor} strokeWidth="2" />
            <path d="M21 3L3 21" stroke={secondaryColor} strokeWidth="2" />
            <circle cx="12" cy="12" r="4" fill={secondaryColor} />
          </g>
        );
      case "The Iron Curtain":
        return (
          <g>
            <path d="M12 2C6 2 2 6 2 12C2 18 6 22 12 22C18 22 22 18 22 12C22 6 18 2 12 2Z" stroke={primaryColor} strokeWidth="2" fill="none" />
            <path d="M7 12H17" stroke={primaryColor} strokeWidth="2" />
            <path d="M12 7V17" stroke={primaryColor} strokeWidth="2" />
            <rect x="9" y="9" width="6" height="6" fill={secondaryColor} />
          </g>
        );
      case "Tactical Milan":
        return (
          <g>
            <path d="M12 2C16 2 20 6 20 12C20 18 16 22 12 22C8 22 4 18 4 12C4 6 8 2 12 2Z" fill="white" />
            <path d="M12 2V22" stroke={primaryColor} strokeWidth="4" />
            <path d="M4 12H20" stroke={primaryColor} strokeWidth="4" />
          </g>
        );
      case "Elegant Cannons":
        return (
          <g>
            <path d="M5 6H19V18C19 18 19 22 12 22C5 22 5 18 5 18V6Z" fill={primaryColor} />
            <rect x="7" y="10" width="10" height="4" fill={secondaryColor} />
            <circle cx="12" cy="12" r="1" fill={primaryColor} />
            <path d="M9 14V16" stroke={secondaryColor} strokeWidth="1" />
            <path d="M15 14V16" stroke={secondaryColor} strokeWidth="1" />
          </g>
        );
      default:
        // Generic Shield
        return (
          <g>
             <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill={primaryColor} />
             <path d="M12 6v12" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round"/>
          </g>
        );
    }
  };

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {getLogoContent()}
    </svg>
  );
};

export default TeamLogo;
