import React from 'react';
import { PageView, CareerTrack, SkillScore, Opportunity, StudentApplication, LearningProgram } from '../types';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Briefcase, 
  MapPin, 
  BookOpen, 
  Award, 
  Clock, 
  ChevronRight, 
  Target, 
  Layers, 
  CheckSquare, 
  UserCircle2,
  Building2,
  TrendingUp,
  FileText
} from 'lucide-react';
import { ScoreGauge } from '../components/ScoreGauge';

interface StudentDashboardProps {
  onNavigate: (page: PageView) => void;
  selectedTrack: CareerTrack;
  careerTracks: CareerTrack[];
  onTrackChange: (trackId: string) => void;
  skillsData: SkillScore[];
  opportunities: Opportunity[];
  applications: StudentApplication[];
  learningPrograms: LearningProgram[];
  onApplyOpportunity: (opp: Opportunity) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  onNavigate,
  selectedTrack,
  careerTracks,
  onTrackChange,
  skillsData,
  opportunities,
  applications,
  learningPrograms,
  onApplyOpportunity,
}) => {
  // Top Skills (Strong)
  const topSkills = skillsData.filter(s => s.status === 'Strong');
  // Skills to Improve (Skill Gap or Improve)
  const skillsToImprove = skillsData.filter(s => s.status !== 'Strong');

  // Top recommended internship
  const topInternship = opportunities[0];
  // Top recommended program
  const topProgram = learningPrograms.find(p => p.isRecommended) || learningPrograms[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* 1. WELCOME & CAREER TRACK BANNER */}
      <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F0E6F2] border border-[#DEC8E2] text-xs font-bold text-[#4A2E4B] mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Student Career Readiness Hub</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2E2823] tracking-tight font-display">
            Hello, Alex 👋
          </h1>
          <p className="text-xs sm:text-sm text-[#7E7367] mt-1">
            California Institute of Advanced Tech • B.Tech Computer Science & AI (Class of 2026)
          </p>
        </div>

        {/* Target Career Track Selector */}
        <div className="bg-[#FAF8F5] border border-[#DDD5C8] rounded-2xl p-4 w-full lg:w-auto min-w-[300px]">
          <div className="text-[11px] font-bold text-[#7E7367] uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <span>Target Career</span>
            <span className="text-[#5B7B64] font-bold text-[10px]">Active Track</span>
          </div>
          <select
            value={selectedTrack.id}
            onChange={(e) => onTrackChange(e.target.value)}
            aria-label="Select Target Career"
            className="w-full bg-white border border-[#DDD5C8] text-[#2E2823] font-bold text-xs sm:text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#4A2E4B] cursor-pointer shadow-2xs"
          >
            {careerTracks.map((track) => (
              <option key={track.id} value={track.id}>
                🎯 {track.title}
              </option>
            ))}
          </select>
          <div className="mt-2 text-[11px] text-[#7E7367] flex items-center justify-between">
            <span>Demand: <strong className="text-[#5B7B64]">{selectedTrack.marketDemand}</strong></span>
            <span>Avg Salary: <strong className="text-[#3D352E]">{selectedTrack.avgSalary}</strong></span>
          </div>
        </div>
      </div>

      {/* 2. CORE READINESS & SKILLS OVERVIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Industry Readiness Gauge (5 Cols) */}
        <div className="lg:col-span-5 bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm">
          <div className="text-xs font-bold uppercase tracking-wider text-[#7E7367] mb-2">
            Industry Readiness Score
          </div>
          
          <ScoreGauge score={selectedTrack.industryReadinessScore} size={175} strokeWidth={14} label="Readiness" />

          <div className="mt-6 w-full pt-4 border-t border-[#F4EFEA] flex items-center justify-around text-xs text-[#7E7367]">
            <div>
              <span className="block text-[#A2978A]">Matching Roles</span>
              <strong className="text-[#2E2823] text-sm font-mono">8 Openings</strong>
            </div>
            <div className="h-6 w-px bg-[#EAE3D9]" />
            <div>
              <span className="block text-[#A2978A]">In Progress</span>
              <strong className="text-[#4A2E4B] text-sm font-mono">3 Skills</strong>
            </div>
            <div className="h-6 w-px bg-[#EAE3D9]" />
            <div>
              <span className="block text-[#A2978A]">Certificates</span>
              <strong className="text-[#5B7B64] text-sm font-mono">2 Badges</strong>
            </div>
          </div>
        </div>

        {/* Top Skills, Gaps & Recommended Action (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Top Skills & Skills to Improve Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Top Skills */}
            <div className="bg-white border border-[#EAE3D9] rounded-2xl p-5 shadow-2xs space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#5B7B64] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#5B7B64]" />
                <span>Top Skills (Strengths)</span>
              </div>
              <div className="space-y-2">
                {topSkills.slice(0, 3).map((s) => (
                  <div key={s.id} className="flex items-center justify-between text-xs bg-[#FAF8F5] px-3 py-2 rounded-xl border border-[#EAE3D9]">
                    <span className="font-bold text-[#3D352E]">{s.name}</span>
                    <span className="font-mono text-[#5B7B64] font-bold">{s.studentScore}% (Mastery)</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills to Improve */}
            <div className="bg-white border border-[#EAE3D9] rounded-2xl p-5 shadow-2xs space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#D96B50] flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-[#D96B50]" />
                <span>Skills to Improve</span>
              </div>
              <div className="space-y-2">
                {skillsToImprove.slice(0, 3).map((s) => (
                  <div key={s.id} className="flex items-center justify-between text-xs bg-[#FAF8F5] px-3 py-2 rounded-xl border border-[#EAE3D9]">
                    <span className="font-bold text-[#3D352E]">{s.name}</span>
                    <span className="font-mono text-[#D96B50] font-bold">{s.studentScore}% (Needs Work)</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Recommended Action Spotlight Card */}
          <div className="bg-gradient-to-r from-[#F0E6F2] via-[#FAF8F5] to-[#FBEAE4] border border-[#DEC8E2] rounded-2xl p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#4A2E4B] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Recommended Action</span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-[#2E2823]">
                Complete Machine Learning Fundamentals
              </h4>
              <p className="text-xs text-[#574D43]">
                Closing this 50% gap will elevate your readiness from <strong className="text-[#4A2E4B]">68%</strong> to <strong className="text-[#5B7B64]">82%</strong>.
              </p>
            </div>

            <button
              onClick={() => onNavigate('learning-programs')}
              className="px-5 py-2.5 rounded-xl font-bold text-xs bg-[#4A2E4B] hover:bg-[#3D223E] text-white shadow-sm transition-all shrink-0 flex items-center space-x-1.5"
            >
              <span>Start Program</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

      {/* 3. RECOMMENDED INTERNSHIP, LEARNING PROGRAM & ONGOING APPLICATIONS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Recommended Internship */}
        <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#5B7B64]">
                Top Recommended Internship
              </span>
              <span className="font-bold text-[#5B7B64] font-mono bg-[#EAF1EB] px-2 py-0.5 rounded border border-[#B2CDBD]">
                {topInternship.matchScore}% Match
              </span>
            </div>

            <div className="flex items-start space-x-3 mb-2">
              <img 
                src={topInternship.companyLogo} 
                alt={topInternship.company}
                className="w-10 h-10 rounded-xl object-cover border border-[#EAE3D9] shrink-0" 
              />
              <div>
                <h4 className="text-sm font-bold text-[#2E2823]">{topInternship.role}</h4>
                <div className="text-xs text-[#7E7367]">{topInternship.company} • {topInternship.location}</div>
              </div>
            </div>

            <p className="text-xs text-[#574D43] line-clamp-2 mt-2 leading-relaxed">
              {topInternship.description}
            </p>
          </div>

          <div className="pt-3 border-t border-[#F4EFEA] flex items-center justify-between">
            <span className="text-xs font-bold text-[#D96B50]">{topInternship.stipend}</span>
            <button
              onClick={() => onApplyOpportunity(topInternship)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#D96B50] hover:bg-[#C65236] text-white transition-colors"
            >
              1-Click Apply
            </button>
          </div>
        </div>

        {/* Recommended Learning Program */}
        <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A2E4B]">
                Recommended Program
              </span>
              <span className="text-[10px] font-bold text-[#4A2E4B] bg-[#F0E6F2] px-2 py-0.5 rounded border border-[#DEC8E2]">
                {topProgram.type}
              </span>
            </div>

            <div className="flex items-start space-x-3 mb-2">
              <img 
                src={topProgram.providerLogo} 
                alt={topProgram.provider}
                className="w-10 h-10 rounded-xl object-cover border border-[#EAE3D9] shrink-0" 
              />
              <div>
                <h4 className="text-sm font-bold text-[#2E2823]">{topProgram.title}</h4>
                <div className="text-xs text-[#7E7367]">{topProgram.provider} • {topProgram.duration}</div>
              </div>
            </div>

            <p className="text-xs text-[#574D43] line-clamp-2 mt-2 leading-relaxed">
              {topProgram.description}
            </p>
          </div>

          <div className="pt-3 border-t border-[#F4EFEA] flex items-center justify-between">
            <span className="text-xs text-[#5B7B64] font-semibold">Free Student Access</span>
            <button
              onClick={() => onNavigate('learning-programs')}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#4A2E4B] hover:bg-[#3D223E] text-white transition-colors"
            >
              Enroll Now
            </button>
          </div>
        </div>

        {/* Ongoing Applications Widget */}
        <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3D352E]">
                Ongoing Applications
              </span>
              <button 
                onClick={() => onNavigate('applications')}
                className="text-xs font-bold text-[#4A2E4B] hover:underline"
              >
                View All ({applications.length})
              </button>
            </div>

            <div className="space-y-2.5">
              {applications.slice(0, 2).map((app) => (
                <div key={app.id} className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#2E2823] line-clamp-1">{app.role}</div>
                    <div className="text-[11px] text-[#7E7367]">{app.company}</div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EAF1EB] text-[#3B5342] border border-[#B2CDBD] capitalize">
                    {app.status.replace('_', ' ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onNavigate('applications')}
            className="w-full py-2 rounded-xl text-xs font-bold text-[#4A2E4B] bg-[#F0E6F2] hover:bg-[#DEC8E2] transition-colors"
          >
            Track Active Pipeline →
          </button>
        </div>

      </div>

      {/* 4. QUICK ACTION SHORTCUT TILES */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        
        <button
          onClick={() => onNavigate('assessment')}
          className="p-4 rounded-2xl bg-white border border-[#EAE3D9] hover:border-[#DEC8E2] text-left transition-all shadow-2xs hover:shadow-sm group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#F0E6F2] text-[#4A2E4B] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
            <CheckSquare className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold text-[#2E2823]">Skill Assessment</div>
          <div className="text-[11px] text-[#7E7367]">Take diagnostic test</div>
        </button>

        <button
          onClick={() => onNavigate('skill-mapping')}
          className="p-4 rounded-2xl bg-white border border-[#EAE3D9] hover:border-[#B2CDBD] text-left transition-all shadow-2xs hover:shadow-sm group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#EAF1EB] text-[#5B7B64] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold text-[#2E2823]">Skill Mapping</div>
          <div className="text-[11px] text-[#7E7367]">What-If Gap Simulator</div>
        </button>

        <button
          onClick={() => onNavigate('opportunities')}
          className="p-4 rounded-2xl bg-white border border-[#EAE3D9] hover:border-[#F7D3C6] text-left transition-all shadow-2xs hover:shadow-sm group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#FBEAE4] text-[#D96B50] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
            <Briefcase className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold text-[#2E2823]">Explore Jobs</div>
          <div className="text-[11px] text-[#7E7367]">Smart matching roles</div>
        </button>

        <button
          onClick={() => onNavigate('portfolio')}
          className="p-4 rounded-2xl bg-white border border-[#EAE3D9] hover:border-[#DDD5C8] text-left transition-all shadow-2xs hover:shadow-sm group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] text-[#3D352E] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
            <UserCircle2 className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold text-[#2E2823]">Digital Portfolio</div>
          <div className="text-[11px] text-[#7E7367]">Verified credentials</div>
        </button>

      </div>

    </div>
  );
};
