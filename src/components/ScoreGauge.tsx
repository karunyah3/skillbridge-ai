import React from 'react';

interface ScoreGaugeProps {
  score: number; // 0 - 100
  size?: number;
  strokeWidth?: number;
  label?: string;
  sublabel?: string;
  showGrade?: boolean;
}

export const ScoreGauge: React.FC<ScoreGaugeProps> = ({
  score,
  size = 180,
  strokeWidth = 14,
  label = "Industry Readiness",
  sublabel = "AI Benchmark Score",
  showGrade = true,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  // Determine color theme based on score
  const getColorScheme = (val: number) => {
    if (val >= 80) return { stroke: '#5B7B64', text: 'text-[#5B7B64]', badge: 'bg-[#EAF1EB] text-[#3B5342] border-[#B2CDBD]', grade: 'Industry Ready 🚀' };
    if (val >= 60) return { stroke: '#4A2E4B', text: 'text-[#4A2E4B]', badge: 'bg-[#F0E6F2] text-[#4A2E4B] border-[#DEC8E2]', grade: 'Intermediate Ready ⚡' };
    if (val >= 40) return { stroke: '#D96B50', text: 'text-[#D96B50]', badge: 'bg-[#FBEAE4] text-[#A83F27] border-[#F7D3C6]', grade: 'Developing Foundation 📈' };
    return { stroke: '#C65236', text: 'text-[#C65236]', badge: 'bg-[#FBEAE4] text-[#712D1D] border-[#F1B4A0]', grade: 'Skill Gap High ⚠️' };
  };

  const scheme = getColorScheme(score);

  return (
    <div className="flex flex-col items-center justify-center relative select-none">
      <div 
        className="relative flex items-center justify-center transition-all duration-700 ease-out" 
        style={{ width: size, height: size }}
      >
        <svg className="w-full h-full transform -rotate-90" viewBox={`0 0 ${size} ${size}`}>
          {/* Background circle track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#EDE7DF"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Animated score arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={scheme.stroke}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            style={{
              transition: 'stroke-dashoffset 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          />
        </svg>

        {/* Center score readout */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-extrabold tracking-tight text-[#2E2823] font-display flex items-baseline">
            {score}
            <span className={`text-xl font-bold ml-0.5 ${scheme.text}`}>%</span>
          </span>
          {label && (
            <span className="text-[11px] font-bold text-[#7E7367] uppercase tracking-wider mt-0.5 max-w-[110px] truncate">
              {label}
            </span>
          )}
        </div>
      </div>

      {showGrade && (
        <div className="mt-3 flex flex-col items-center text-center">
          <span className={`text-xs font-bold px-3 py-1 rounded-full border ${scheme.badge} shadow-xs`}>
            {scheme.grade}
          </span>
          {sublabel && (
            <span className="text-xs text-[#7E7367] mt-1 font-medium">
              {sublabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
