import React, { useState } from 'react';
import { PageView, CareerTrack, SkillScore } from '../types';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Sliders, 
  RotateCcw,
  Briefcase,
  Building2,
  BookOpen,
  TrendingUp,
  Award,
  Zap,
  Target
} from 'lucide-react';
import { ScoreGauge } from '../components/ScoreGauge';
import { SkillComparisonBar } from '../components/SkillComparisonBar';
import { RECOMMENDED_CAREER_ROLES, RECOMMENDED_INDUSTRIES, RECOMMENDED_PROGRAMS_SUMMARY } from '../data/mockData';

interface SkillMappingPageProps {
  onNavigate: (page: PageView) => void;
  selectedTrack: CareerTrack;
  careerTracks: CareerTrack[];
  onTrackChange: (trackId: string) => void;
  skillsData: SkillScore[];
}

export const SkillMappingPage: React.FC<SkillMappingPageProps> = ({
  onNavigate,
  selectedTrack,
  careerTracks,
  onTrackChange,
  skillsData,
}) => {
  // What-if simulator state
  const [simulatedML, setSimulatedML] = useState(false);
  const [simulatedCloud, setSimulatedCloud] = useState(false);
  const [simulatedDSA, setSimulatedDSA] = useState(false);

  const baseScore = selectedTrack.industryReadinessScore;
  let simulatedScore = baseScore;
  let simulatedOppCount = 8;

  if (simulatedML) {
    simulatedScore += 14;
    simulatedOppCount += 9;
  }
  if (simulatedCloud) {
    simulatedScore += 9;
    simulatedOppCount += 5;
  }
  if (simulatedDSA) {
    simulatedScore += 7;
    simulatedOppCount += 4;
  }
  simulatedScore = Math.min(98, simulatedScore);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* 1. TOP HEADER WITH TRACK SWITCHER */}
      <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F0E6F2] border border-[#DEC8E2] text-xs font-bold text-[#4A2E4B] mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Intelligence Module</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2E2823] tracking-tight font-display">
            Skill Mapping
          </h1>
          <p className="text-xs sm:text-sm text-[#7E7367] mt-1 max-w-xl">
            Comparison between your verified competencies and real industry requirements.
          </p>
        </div>

        {/* Benchmark Track Selector */}
        <div className="bg-[#FAF8F5] border border-[#DDD5C8] rounded-2xl p-4 w-full lg:w-auto min-w-[300px]">
          <div className="text-[11px] font-bold text-[#7E7367] uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <span>Benchmark Career Role</span>
            <span className="text-[#5B7B64] font-bold text-[10px]">Market Aligned</span>
          </div>
          <select
            value={selectedTrack.id}
            onChange={(e) => onTrackChange(e.target.value)}
            aria-label="Select Benchmark Career Role"
            className="w-full bg-white border border-[#DDD5C8] text-[#2E2823] font-bold text-xs sm:text-sm rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#4A2E4B] cursor-pointer"
          >
            {careerTracks.map((track) => (
              <option key={track.id} value={track.id}>
                🎯 {track.title} ({track.openingsCount} Openings)
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 2. WHAT-IF SIMULATOR SHOWCASE & READINESS SCORE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Readiness Score (5 Cols) */}
        <div className="lg:col-span-5 bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm">
          <div className="text-xs font-bold uppercase tracking-wider text-[#7E7367] mb-2">
            Overall Industry Readiness
          </div>
          
          <ScoreGauge 
            score={simulatedScore} 
            size={185} 
            strokeWidth={15} 
            label="Readiness"
            sublabel={simulatedScore > baseScore ? `Simulated +${simulatedScore - baseScore}% Boost` : `Target: ${selectedTrack.title}`}
          />

          <div className="mt-6 w-full pt-4 border-t border-[#F4EFEA] flex items-center justify-around text-xs text-[#7E7367]">
            <div>
              <span className="block text-[#A2978A]">Baseline</span>
              <strong className="text-[#2E2823] text-sm font-mono">{baseScore}%</strong>
            </div>
            <div className="h-6 w-px bg-[#EAE3D9]" />
            <div>
              <span className="block text-[#A2978A]">Hiring Bar</span>
              <strong className="text-[#5B7B64] text-sm font-mono">80%+</strong>
            </div>
            <div className="h-6 w-px bg-[#EAE3D9]" />
            <div>
              <span className="block text-[#A2978A]">Opportunities</span>
              <strong className="text-[#D96B50] text-sm font-mono">{simulatedOppCount} Matches</strong>
            </div>
          </div>
        </div>

        {/* What-If Simulator Interactive Card (7 Cols) */}
        <div className="lg:col-span-7 bg-gradient-to-br from-white via-[#FAF8F5] to-[#F0E6F2]/40 border border-[#DEC8E2] rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sliders className="w-5 h-5 text-[#4A2E4B]" />
              <h3 className="text-base sm:text-lg font-bold text-[#2E2823]">
                “What-If” Skill Gap Simulator
              </h3>
            </div>
            {(simulatedML || simulatedCloud || simulatedDSA) && (
              <button
                onClick={() => { setSimulatedML(false); setSimulatedCloud(false); setSimulatedDSA(false); }}
                className="text-xs font-bold text-[#4A2E4B] hover:underline flex items-center space-x-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Simulation</span>
              </button>
            )}
          </div>

          <p className="text-xs sm:text-sm text-[#574D43] leading-relaxed">
            See how closing your missing skills boosts your overall readiness and exponentially unlocks matching internship openings:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => setSimulatedML(!simulatedML)}
              className={`p-3.5 rounded-2xl text-left border transition-all text-xs flex flex-col justify-between ${
                simulatedML 
                  ? 'bg-[#F0E6F2] border-[#4A2E4B] text-[#2E2823] shadow-xs' 
                  : 'bg-white border-[#EAE3D9] text-[#7E7367] hover:border-[#DDD5C8]'
              }`}
            >
              <span className="font-bold text-[#2E2823]">What if I learn Machine Learning?</span>
              <span className="font-mono text-[#4A2E4B] font-bold mt-2 text-[11px]">+14% (8 → 17 Jobs)</span>
            </button>

            <button
              onClick={() => setSimulatedCloud(!simulatedCloud)}
              className={`p-3.5 rounded-2xl text-left border transition-all text-xs flex flex-col justify-between ${
                simulatedCloud 
                  ? 'bg-[#EAF1EB] border-[#5B7B64] text-[#2E2823] shadow-xs' 
                  : 'bg-white border-[#EAE3D9] text-[#7E7367] hover:border-[#DDD5C8]'
              }`}
            >
              <span className="font-bold text-[#2E2823]">What if I learn Cloud Basics?</span>
              <span className="font-mono text-[#5B7B64] font-bold mt-2 text-[11px]">+9% (+5 Jobs)</span>
            </button>

            <button
              onClick={() => setSimulatedDSA(!simulatedDSA)}
              className={`p-3.5 rounded-2xl text-left border transition-all text-xs flex flex-col justify-between ${
                simulatedDSA 
                  ? 'bg-[#FBEAE4] border-[#D96B50] text-[#2E2823] shadow-xs' 
                  : 'bg-white border-[#EAE3D9] text-[#7E7367] hover:border-[#DDD5C8]'
              }`}
            >
              <span className="font-bold text-[#2E2823]">What if I master Advanced DSA?</span>
              <span className="font-mono text-[#D96B50] font-bold mt-2 text-[11px]">+7% (+4 Jobs)</span>
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#EAE3D9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-bold text-[#2E2823]">Ready to start closing these gaps?</div>
              <div className="text-[11px] text-[#7E7367]">Explore verified industry programs and courses</div>
            </div>
            <button
              onClick={() => onNavigate('learning-programs')}
              className="px-5 py-2.5 rounded-xl font-bold text-xs bg-[#4A2E4B] hover:bg-[#3D223E] text-white shadow-sm flex items-center space-x-1.5 shrink-0"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* 3. MY CURRENT SKILLS VS INDUSTRY REQUIRED SKILLS (SIDE BY SIDE COMPARISON) */}
      <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#F4EFEA]">
          <div>
            <h3 className="text-lg font-bold text-[#2E2823]">My Current Skills vs Industry Required Skills</h3>
            <p className="text-xs text-[#7E7367]">
              Detailed competency breakdown against the {selectedTrack.title} industry rubric
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FAF8F5] text-[#574D43] border border-[#DDD5C8] self-start sm:self-auto">
            6 Core Rubric Competencies
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillsData.map((skill) => (
            <SkillComparisonBar key={skill.id} skill={skill} />
          ))}
        </div>
      </div>

      {/* 4. THREE RECOMMENDED SECTIONS: ROLES, INDUSTRIES & PROGRAMS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Recommended Career Roles */}
        <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 pb-3 border-b border-[#F4EFEA]">
              <Target className="w-4 h-4 text-[#4A2E4B]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2E2823]">
                Recommended Career Roles
              </h4>
            </div>

            <div className="space-y-3 mt-4">
              {RECOMMENDED_CAREER_ROLES.map((r, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D9]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#2E2823]">{r.role}</span>
                    <span className="text-xs font-bold text-[#5B7B64] font-mono">{r.matchScore}% match</span>
                  </div>
                  <p className="text-[11px] text-[#7E7367] mt-1 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onNavigate('opportunities')}
            className="w-full py-2 rounded-xl text-xs font-bold text-[#4A2E4B] bg-[#F0E6F2] hover:bg-[#DEC8E2] transition-colors"
          >
            Explore Matched Roles →
          </button>
        </div>

        {/* Recommended Industries */}
        <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 pb-3 border-b border-[#F4EFEA]">
              <Building2 className="w-4 h-4 text-[#5B7B64]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2E2823]">
                Recommended Industries
              </h4>
            </div>

            <div className="space-y-3 mt-4">
              {RECOMMENDED_INDUSTRIES.map((ind, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#2E2823]">{ind.name}</div>
                    <div className="text-[11px] text-[#5B7B64] font-semibold">{ind.growth} Industry Growth</div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EAF1EB] text-[#3B5342] border border-[#B2CDBD]">
                    {ind.match} Fit
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onNavigate('opportunities')}
            className="w-full py-2 rounded-xl text-xs font-bold text-[#5B7B64] bg-[#EAF1EB] hover:bg-[#D4E3D7] transition-colors"
          >
            Browse by Industry →
          </button>
        </div>

        {/* Recommended Programs */}
        <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 pb-3 border-b border-[#F4EFEA]">
              <BookOpen className="w-4 h-4 text-[#D96B50]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2E2823]">
                Recommended Programs
              </h4>
            </div>

            <div className="space-y-3 mt-4">
              {RECOMMENDED_PROGRAMS_SUMMARY.map((prog, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D9]">
                  <div className="text-xs font-bold text-[#2E2823] line-clamp-1">{prog.title}</div>
                  <div className="flex items-center justify-between text-[11px] text-[#7E7367] mt-1">
                    <span>{prog.provider} • {prog.duration}</span>
                    <span className="font-bold text-[#D96B50] font-mono">{prog.boost}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onNavigate('learning-programs')}
            className="w-full py-2 rounded-xl text-xs font-bold text-[#D96B50] bg-[#FBEAE4] hover:bg-[#F7D3C6] transition-colors"
          >
            View All Programs →
          </button>
        </div>

      </div>

    </div>
  );
};
