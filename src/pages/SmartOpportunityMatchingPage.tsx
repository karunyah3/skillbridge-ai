import React, { useState } from 'react';
import { PageView, Opportunity, DigitalPortfolio } from '../types';
import { 
  Briefcase, 
  Sparkles, 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  DollarSign, 
  Building2, 
  ArrowRight,
  ShieldCheck,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface SmartOpportunityMatchingPageProps {
  onNavigate: (page: PageView) => void;
  opportunities: Opportunity[];
  studentProfile: DigitalPortfolio;
  onApplyOpportunity: (opp: Opportunity) => void;
}

export const SmartOpportunityMatchingPage: React.FC<SmartOpportunityMatchingPageProps> = ({
  onNavigate,
  opportunities,
  studentProfile,
  onApplyOpportunity,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWorkType, setSelectedWorkType] = useState<string>('all');
  const [selectedMinMatch, setSelectedMinMatch] = useState<number>(0);
  const [selectedOppForModal, setSelectedOppForModal] = useState<Opportunity | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [applicationSuccess, setApplicationSuccess] = useState(false);

  // Filter opportunities
  const filteredOpportunities = opportunities.filter((opp) => {
    const matchesSearch = 
      opp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.matchedSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesWorkType = 
      selectedWorkType === 'all' || 
      opp.workType.toLowerCase() === selectedWorkType.toLowerCase();

    const matchesMinScore = opp.matchScore >= selectedMinMatch;

    return matchesSearch && matchesWorkType && matchesMinScore;
  });

  const handleOpenApplyModal = (opp: Opportunity) => {
    setSelectedOppForModal(opp);
    setApplicationSuccess(false);
  };

  const handleConfirmApplication = () => {
    if (!selectedOppForModal) return;
    setIsApplying(true);

    setTimeout(() => {
      onApplyOpportunity(selectedOppForModal);
      setIsApplying(false);
      setApplicationSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* 1. TOP HEADER & AI MATCHING SUMMARY */}
      <div className="bg-[#111728] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Smart Fit Matchmaker</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Smart Opportunity Matching
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Real-time openings matched against your verified skills, highlighting exact capability matches and actionable gap boosters.
            </p>
          </div>

          <div className="bg-[#151e36] border border-slate-700/80 rounded-2xl p-4 w-full lg:w-auto min-w-[260px] text-center lg:text-right">
            <div className="text-xs text-slate-400 font-medium">Top Match Score Available</div>
            <div className="text-3xl font-extrabold text-cyan-300 font-mono mt-0.5">87% Fit</div>
            <div className="text-[11px] text-emerald-400 font-semibold mt-1">NeuroScale AI Labs • Applied AI</div>
          </div>
        </div>
      </div>

      {/* 2. SEARCH & FILTER CONTROLS */}
      <div className="bg-[#111728] border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-lg">
        
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by role, company, or skill (e.g., Python, Machine Learning)..."
            className="w-full bg-[#0d1222] border border-slate-700 text-white text-xs sm:text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-cyan-400 placeholder:text-slate-500"
          />
        </div>

        {/* Filter dropdowns */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center space-x-2 bg-[#0d1222] border border-slate-700 rounded-xl px-3 py-2">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={selectedWorkType}
              onChange={(e) => setSelectedWorkType(e.target.value)}
              aria-label="Filter by Work Type"
              className="bg-transparent text-xs text-slate-200 focus:outline-none cursor-pointer"
            >
              <option value="all">All Locations (Remote/Hybrid)</option>
              <option value="remote">Remote Only</option>
              <option value="hybrid">Hybrid</option>
              <option value="on-site">On-site</option>
            </select>
          </div>

          <div className="flex items-center space-x-2 bg-[#0d1222] border border-slate-700 rounded-xl px-3 py-2">
            <span className="text-xs text-slate-400 font-semibold">Match %:</span>
            <select
              value={selectedMinMatch}
              onChange={(e) => setSelectedMinMatch(Number(e.target.value))}
              aria-label="Filter by Minimum Match Score"
              className="bg-transparent text-xs text-cyan-300 font-semibold focus:outline-none cursor-pointer"
            >
              <option value={0}>All Match Scores</option>
              <option value={80}>80%+ (High Match)</option>
              <option value={70}>70%+ (Medium Match)</option>
            </select>
          </div>
        </div>

      </div>

      {/* 3. OPPORTUNITY CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredOpportunities.map((opp) => {
          const isHighMatch = opp.matchScore >= 80;
          return (
            <div 
              key={opp.id}
              className="bg-[#111728] border border-slate-800 hover:border-slate-700 rounded-3xl p-6 transition-all duration-300 hover:shadow-xl flex flex-col justify-between space-y-5 relative overflow-hidden group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start space-x-3.5">
                    <img 
                      src={opp.companyLogo} 
                      alt={opp.company}
                      className="w-12 h-12 rounded-2xl object-cover border border-slate-700 shrink-0" 
                    />
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {opp.role}
                      </h3>
                      <div className="flex items-center space-x-2 text-xs text-slate-400 mt-0.5">
                        <span className="font-semibold text-slate-300">{opp.company}</span>
                        <span>•</span>
                        <span>{opp.department}</span>
                      </div>
                    </div>
                  </div>

                  {/* Match Score Badge */}
                  <div className="text-right shrink-0">
                    <div className={`px-3 py-1 rounded-xl text-xs font-black font-mono border shadow-sm ${
                      isHighMatch 
                        ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/50 shadow-cyan-500/10' 
                        : 'bg-blue-950/80 text-blue-300 border-blue-500/40'
                    }`}>
                      {opp.matchScore}% Match
                    </div>
                  </div>
                </div>

                {/* Job metadata pills */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 my-3.5">
                  <span className="flex items-center gap-1 bg-[#151e36] px-2.5 py-1 rounded-lg border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {opp.location}
                  </span>
                  <span className="flex items-center gap-1 bg-[#151e36] px-2.5 py-1 rounded-lg border border-slate-800 text-emerald-300 font-semibold">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                    {opp.stipend}
                  </span>
                  <span className="flex items-center gap-1 bg-[#151e36] px-2.5 py-1 rounded-lg border border-slate-800">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {opp.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {opp.description}
                </p>

                {/* Matched vs Missing Skills breakdown */}
                <div className="space-y-2 mt-4 pt-3 border-t border-slate-800/80">
                  {/* Matched Skills */}
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Matched Skills ({opp.matchedSkills.length})</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {opp.matchedSkills.map((s, idx) => (
                        <span key={idx} className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-950/50 text-emerald-300 border border-emerald-500/30">
                          ✓ {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skills to Improve */}
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      <span>Skills to Improve ({opp.missingSkills.length})</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {opp.missingSkills.map((s, idx) => (
                        <span key={idx} className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-950/50 text-amber-300 border border-amber-500/30">
                          ⚠ {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI Score Boost Insight */}
                <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-blue-950/50 to-indigo-950/50 border border-cyan-500/30 text-xs text-cyan-200 flex items-start space-x-2">
                  <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>AI Insight:</strong> {opp.boostInsight}
                  </span>
                </div>
              </div>

              {/* Action row */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  Deadline: <strong className="text-slate-400">{opp.deadline}</strong>
                </span>
                
                <button
                  onClick={() => handleOpenApplyModal(opp)}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 transition-all flex items-center space-x-1.5"
                >
                  <span>1-Click Apply</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* 4. 1-CLICK INTERACTIVE APPLICATION MODAL */}
      {selectedOppForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#111728] border border-slate-700/80 rounded-3xl w-full max-w-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            
            <button
              onClick={() => setSelectedOppForModal(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!applicationSuccess ? (
              <div className="space-y-5">
                <div>
                  <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 mb-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>SkillBridge Verified Fast-Track Apply</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Apply for {selectedOppForModal.role}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    at <strong className="text-slate-200">{selectedOppForModal.company}</strong> • {selectedOppForModal.location}
                  </p>
                </div>

                {/* Fit Verification Box */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Applicant Name:</span>
                    <span className="font-bold text-white">{studentProfile.studentName}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Verified Match Score:</span>
                    <span className="font-bold text-cyan-400 font-mono">{selectedOppForModal.matchScore}%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Cryptographic Badges Attached:</span>
                    <span className="font-bold text-emerald-400">3 Verified Badges</span>
                  </div>
                </div>

                {/* Responsibilities bullet points */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Role Summary & Objectives
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {selectedOppForModal.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit button */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-end space-x-3">
                  <button
                    onClick={() => setSelectedOppForModal(null)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmApplication}
                    disabled={isApplying}
                    className="px-6 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-300 hover:to-indigo-500 text-slate-950 shadow-lg shadow-cyan-500/25 transition-all flex items-center space-x-2"
                  >
                    {isApplying ? (
                      <span>Transmitting Verified Portfolio...</span>
                    ) : (
                      <>
                        <span>Submit 1-Click Application 🚀</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              /* Success View */
              <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">Application Submitted!</h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                    Your verified SkillBridge profile with a <strong className="text-cyan-400 font-mono">{selectedOppForModal.matchScore}% Match Score</strong> was sent directly to {selectedOppForModal.company}'s engineering hiring team.
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-center space-x-3">
                  <button
                    onClick={() => setSelectedOppForModal(null)}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md transition-all"
                  >
                    Back to Opportunities
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
