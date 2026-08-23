import React from 'react';
import { SkillScore } from '../types';
import { 
  Code2, 
  Terminal, 
  Database, 
  Binary, 
  Cpu, 
  Cloud, 
  Zap, 
  Users, 
  CheckCircle2, 
  AlertTriangle,
  Clock
} from 'lucide-react';

interface SkillComparisonBarProps {
  skill: SkillScore;
}

export const SkillComparisonBar: React.FC<SkillComparisonBarProps> = ({ skill }) => {
  const delta = skill.studentScore - skill.industryBenchmark;
  const isStrong = skill.status === 'Strong';
  const isGap = skill.status === 'Skill Gap';

  const renderIcon = () => {
    switch (skill.iconName) {
      case 'Code2': return <Code2 className="w-4 h-4 text-[#4A2E4B]" />;
      case 'Terminal': return <Terminal className="w-4 h-4 text-[#5B7B64]" />;
      case 'Database': return <Database className="w-4 h-4 text-[#4A2E4B]" />;
      case 'Binary': return <Binary className="w-4 h-4 text-[#D96B50]" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-[#C65236]" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-[#6B466E]" />;
      case 'Zap': return <Zap className="w-4 h-4 text-[#D96B50]" />;
      case 'Users': return <Users className="w-4 h-4 text-[#5B7B64]" />;
      default: return <Code2 className="w-4 h-4 text-[#4A2E4B]" />;
    }
  };

  return (
    <div className="bg-white border border-[#EAE3D9] hover:border-[#DDD5C8] rounded-2xl p-4 transition-all duration-200 shadow-xs hover:shadow-md">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center">
            {renderIcon()}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="text-sm font-bold text-[#2E2823] tracking-wide">{skill.name}</h4>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#FAF8F5] text-[#7E7367] border border-[#EAE3D9]">
                {skill.category}
              </span>
            </div>
            <p className="text-xs text-[#7E7367] line-clamp-1 mt-0.5">{skill.description}</p>
          </div>
        </div>

        {/* Status Pill */}
        <div className="flex items-center space-x-2">
          {isStrong ? (
            <span className="inline-flex items-center space-x-1 text-xs font-bold px-2.5 py-1 rounded-full bg-[#EAF1EB] text-[#3B5342] border border-[#B2CDBD]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7B64]" />
              <span>Strong</span>
            </span>
          ) : isGap ? (
            <span className="inline-flex items-center space-x-1 text-xs font-bold px-2.5 py-1 rounded-full bg-[#FBEAE4] text-[#8A3421] border border-[#F7D3C6]">
              <AlertTriangle className="w-3.5 h-3.5 text-[#D96B50]" />
              <span>Skill Gap</span>
            </span>
          ) : (
            <span className="inline-flex items-center space-x-1 text-xs font-bold px-2.5 py-1 rounded-full bg-[#FDF5E6] text-[#975A16] border border-[#F6E0B5]">
              <Clock className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Improve</span>
            </span>
          )}
        </div>
      </div>

      {/* Visual Dual Progress Track */}
      <div className="space-y-2 mt-3">
        {/* Your Score */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-[#574D43] font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#4A2E4B]"></span>
              My Current Skill:
            </span>
            <span className="font-bold text-[#4A2E4B] font-mono">{skill.studentScore}%</span>
          </div>
          <div className="h-2 w-full bg-[#F4EFEA] rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-700 ${
                isStrong 
                  ? 'bg-[#5B7B64]' 
                  : isGap 
                    ? 'bg-[#D96B50]' 
                    : 'bg-[#E5A83B]'
              }`}
              style={{ width: `${skill.studentScore}%` }}
            />
          </div>
        </div>

        {/* Industry Required */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-[#7E7367] font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C8BCAC]"></span>
              Industry Required:
            </span>
            <span className="font-semibold text-[#7E7367] font-mono">{skill.industryBenchmark}%</span>
          </div>
          <div className="h-1.5 w-full bg-[#F4EFEA] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#A2978A] rounded-full"
              style={{ width: `${skill.industryBenchmark}%` }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Insights row */}
      <div className="mt-3 pt-2.5 border-t border-[#F4EFEA] flex items-center justify-between text-xs">
        <div className="flex items-center space-x-3 text-[#7E7367]">
          <span className="flex items-center space-x-1">
            <span className="text-[#A2978A]">Level:</span>
            <span className="text-[#3D352E] font-medium">{skill.level}</span>
          </span>
          {!isStrong && skill.learningHoursToBridge > 0 && (
            <span className="flex items-center space-x-1 text-[#A83F27] font-medium">
              <Clock className="w-3 h-3 text-[#D96B50]" />
              <span>~{skill.learningHoursToBridge} hrs to bridge</span>
            </span>
          )}
        </div>

        <div className="font-mono font-bold">
          {delta >= 0 ? (
            <span className="text-[#486650]">+{delta}% Ahead</span>
          ) : (
            <span className="text-[#C65236]">{delta}% Gap</span>
          )}
        </div>
      </div>
    </div>
  );
};
