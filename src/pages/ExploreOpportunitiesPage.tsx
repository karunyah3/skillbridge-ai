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
  ArrowRight,
  ShieldCheck,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExploreOpportunitiesPageProps {
  onNavigate: (page: PageView) => void;
  opportunities: Opportunity[];
  studentProfile: DigitalPortfolio;
  onApplyOpportunity: (opp: Opportunity) => void;
}

export const ExploreOpportunitiesPage: React.FC<ExploreOpportunitiesPageProps> = ({
  onNavigate,
  opportunities,
  studentProfile,
  onApplyOpportunity,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all'); // all, Internship, Full-time, Co-op
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [selectedWorkMode, setSelectedWorkMode] = useState<string>('all');
  const [selectedMinMatch, setSelectedMinMatch] = useState<number>(0);
  const [selectedOppForModal, setSelectedOppForModal] = useState<Opportunity | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [applicationSuccess, setApplicationSuccess] = useState(false);

  const domains = [
    'All Domains',
    'AI/ML',
    'Software Development',
    'Data Science',
    'Cybersecurity',
    'Cloud',
    'Web Development'
  ];

  // Filtering
  const filteredOpportunities = opportunities.filter((opp) => {
    const matchesSearch = 
      opp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.matchedSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType = selectedType === 'all' || opp.type.toLowerCase() === selectedType.toLowerCase();
    const matchesDomain = selectedDomain === 'all' || selectedDomain === 'All Domains' || opp.domain === selectedDomain;
    const matchesWorkMode = selectedWorkMode === 'all' || opp.workType.toLowerCase() === selectedWorkMode.toLowerCase();
    const matchesMinScore = opp.matchScore >= selectedMinMatch;

    return matchesSearch && matchesType && matchesDomain && matchesWorkMode && matchesMinScore;
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
    }, 900);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* 1. HEADER */}
      <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EAF1EB] border border-[#B2CDBD] text-xs font-bold text-[#3B5342] mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#5B7B64]" />
            <span>Smart Opportunity Matchmaker</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2E2823] tracking-tight font-display">
            Explore Opportunities
          </h1>
          <p className="text-xs sm:text-sm text-[#7E7367] mt-1 max-w-xl">
            Discover internships and new grad roles matched against your verified competencies.
          </p>
        </div>

        {/* Opportunity Type Toggle */}
        <div className="flex items-center bg-[#FAF8F5] p-1.5 rounded-2xl border border-[#DDD5C8]">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedType === 'all' ? 'bg-[#4A2E4B] text-white shadow-xs' : 'text-[#7E7367] hover:text-[#2E2823]'
            }`}
          >
            All Roles
          </button>
          <button
            onClick={() => setSelectedType('internship')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedType === 'internship' ? 'bg-[#4A2E4B] text-white shadow-xs' : 'text-[#7E7367] hover:text-[#2E2823]'
            }`}
          >
            Internships
          </button>
          <button
            onClick={() => setSelectedType('full-time')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedType === 'full-time' ? 'bg-[#4A2E4B] text-white shadow-xs' : 'text-[#7E7367] hover:text-[#2E2823]'
            }`}
          >
            Full-Time
          </button>
        </div>
      </div>

      {/* 2. SEARCH & ADVANCED FILTERS */}
      <div className="bg-white border border-[#EAE3D9] rounded-3xl p-5 shadow-sm space-y-4">
        
        {/* Search row */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#A2978A] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search roles, companies, or skills (e.g. Python, NeuroScale, PyTorch)..."
            className="w-full bg-[#FAF8F5] border border-[#DDD5C8] text-[#2E2823] text-xs sm:text-sm rounded-2xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#4A2E4B] placeholder:text-[#A2978A]"
          />
        </div>

        {/* Filter pills & selects */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          
          {/* Domain Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            {domains.map((d) => {
              const isSelected = selectedDomain === d || (d === 'All Domains' && selectedDomain === 'all');
              return (
                <button
                  key={d}
                  onClick={() => setSelectedDomain(d === 'All Domains' ? 'all' : d)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold border transition-all ${
                    isSelected
                      ? 'bg-[#4A2E4B] text-white border-[#4A2E4B]'
                      : 'bg-[#FAF8F5] text-[#574D43] border-[#EAE3D9] hover:border-[#DDD5C8]'
                  }`}
                >
                  {d}
                </button>
              );
            })}
          </div>

          {/* Work Mode & Min Match Selects */}
          <div className="flex items-center space-x-2">
            <select
              value={selectedWorkMode}
              onChange={(e) => setSelectedWorkMode(e.target.value)}
              aria-label="Filter by Work Mode"
              className="bg-[#FAF8F5] border border-[#DDD5C8] text-xs font-bold text-[#574D43] rounded-xl px-3 py-1.5 focus:outline-none focus:border-[#4A2E4B] cursor-pointer"
            >
              <option value="all">Work Mode: All</option>
              <option value="remote">Remote Only</option>
              <option value="hybrid">Hybrid</option>
              <option value="on-site">On-site</option>
            </select>

            <select
              value={selectedMinMatch}
              onChange={(e) => setSelectedMinMatch(Number(e.target.value))}
              aria-label="Filter by Minimum Match Score"
              className="bg-[#FAF8F5] border border-[#DDD5C8] text-xs font-bold text-[#D96B50] rounded-xl px-3 py-1.5 focus:outline-none focus:border-[#D96B50] cursor-pointer"
            >
              <option value={0}>Match: Any</option>
              <option value={80}>80%+ High Fit</option>
              <option value={70}>70%+ Good Fit</option>
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
              className="bg-white border border-[#EAE3D9] hover:border-[#DDD5C8] rounded-3xl p-6 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between space-y-5"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start space-x-3.5">
                    <img 
                      src={opp.companyLogo} 
                      alt={opp.company}
                      className="w-12 h-12 rounded-2xl object-cover border border-[#EAE3D9] shrink-0" 
                    />
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#2E2823]">
                        {opp.role}
                      </h3>
                      <div className="flex items-center space-x-2 text-xs text-[#7E7367] mt-0.5">
                        <span className="font-semibold text-[#3D352E]">{opp.company}</span>
                        <span>•</span>
                        <span>{opp.department}</span>
                      </div>
                    </div>
                  </div>

                  {/* Match Score Badge */}
                  <div className="text-right shrink-0">
                    <div className={`px-3 py-1 rounded-xl text-xs font-bold font-mono border shadow-2xs ${
                      isHighMatch 
                        ? 'bg-[#EAF1EB] text-[#3B5342] border-[#B2CDBD]' 
                        : 'bg-[#F0E6F2] text-[#4A2E4B] border-[#DEC8E2]'
                    }`}>
                      {opp.matchScore}% Match
                    </div>
                  </div>
                </div>

                {/* Metadata Pills */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#574D43] my-3.5">
                  <span className="flex items-center gap-1 bg-[#FAF8F5] px-2.5 py-1 rounded-lg border border-[#EAE3D9]">
                    <MapPin className="w-3.5 h-3.5 text-[#5B7B64]" />
                    {opp.location} ({opp.workType})
                  </span>
                  <span className="flex items-center gap-1 bg-[#FAF8F5] px-2.5 py-1 rounded-lg border border-[#EAE3D9] text-[#D96B50] font-bold">
                    <DollarSign className="w-3.5 h-3.5" />
                    {opp.stipend}
                  </span>
                  <span className="flex items-center gap-1 bg-[#FAF8F5] px-2.5 py-1 rounded-lg border border-[#EAE3D9]">
                    <Clock className="w-3.5 h-3.5 text-[#7E7367]" />
                    {opp.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-[#574D43] leading-relaxed line-clamp-2">
                  {opp.description}
                </p>

                {/* Matched vs Missing Skills */}
                <div className="space-y-2 mt-4 pt-3 border-t border-[#F4EFEA]">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#5B7B64] mb-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Matched Skills ({opp.matchedSkills.length})</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {opp.matchedSkills.map((s, idx) => (
                        <span key={idx} className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#EAF1EB] text-[#3B5342] border border-[#B2CDBD]">
                          ✓ {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#D96B50] mb-1 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      <span>Skills to Improve ({opp.missingSkills.length})</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {opp.missingSkills.map((s, idx) => (
                        <span key={idx} className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#FBEAE4] text-[#8A3421] border border-[#F7D3C6]">
                          ⚠ {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI Score Boost Insight */}
                <div className="mt-4 p-3 rounded-xl bg-[#FAF8F5] border border-[#DEC8E2] text-xs text-[#4A2E4B] flex items-start space-x-2">
                  <TrendingUp className="w-4 h-4 text-[#D96B50] shrink-0 mt-0.5" />
                  <span>
                    <strong>AI Insight:</strong> {opp.boostInsight}
                  </span>
                </div>
              </div>

              {/* Action row */}
              <div className="pt-2 flex items-center justify-between border-t border-[#F4EFEA]">
                <span className="text-[11px] text-[#7E7367]">
                  Deadline: <strong className="text-[#3D352E]">{opp.deadline}</strong>
                </span>
                
                <button
                  onClick={() => handleOpenApplyModal(opp)}
                  className="px-5 py-2 rounded-xl font-bold text-xs bg-[#D96B50] hover:bg-[#C65236] text-white shadow-xs transition-all flex items-center space-x-1.5"
                >
                  <span>1-Click Apply</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* 4. 1-CLICK APPLICATION MODAL */}
      {selectedOppForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#231E1A]/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white border border-[#EAE3D9] rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-xl relative">
            
            <button
              onClick={() => setSelectedOppForModal(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-[#7E7367] hover:text-[#2E2823] hover:bg-[#FAF8F5]"
            >
              <X className="w-5 h-5" />
            </button>

            {!applicationSuccess ? (
              <div className="space-y-5">
                <div>
                  <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EAF1EB] text-[#3B5342] border border-[#B2CDBD] mb-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#5B7B64]" />
                    <span>BRAIDLY Verified Fast-Track</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2E2823]">
                    Apply for {selectedOppForModal.role}
                  </h3>
                  <p className="text-xs text-[#7E7367] mt-0.5">
                    at <strong className="text-[#3D352E]">{selectedOppForModal.company}</strong> • {selectedOppForModal.location}
                  </p>
                </div>

                {/* Fit Verification Box */}
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D9] space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#7E7367]">Applicant:</span>
                    <span className="font-bold text-[#2E2823]">{studentProfile.studentName}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#7E7367]">Match Score:</span>
                    <span className="font-bold text-[#5B7B64] font-mono">{selectedOppForModal.matchScore}%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#7E7367]">Verified Credentials:</span>
                    <span className="font-bold text-[#4A2E4B]">3 Blockchain Badges</span>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#7E7367] mb-2">
                    Key Responsibilities
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#574D43]">
                    {selectedOppForModal.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7B64] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit button */}
                <div className="pt-3 border-t border-[#F4EFEA] flex items-center justify-end space-x-3">
                  <button
                    onClick={() => setSelectedOppForModal(null)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-[#7E7367] hover:text-[#2E2823]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmApplication}
                    disabled={isApplying}
                    className="px-6 py-2.5 rounded-xl font-bold text-xs bg-[#D96B50] hover:bg-[#C65236] text-white shadow-sm transition-all flex items-center space-x-2"
                  >
                    {isApplying ? (
                      <span>Submitting Verified Portfolio...</span>
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
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EAF1EB] text-[#5B7B64] border border-[#B2CDBD] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#2E2823]">Application Submitted!</h4>
                  <p className="text-xs text-[#7E7367] mt-1 max-w-sm mx-auto">
                    Your verified portfolio with a <strong className="text-[#5B7B64] font-mono">{selectedOppForModal.matchScore}% Match Score</strong> was sent directly to {selectedOppForModal.company}'s hiring team.
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-center space-x-3">
                  <button
                    onClick={() => { setSelectedOppForModal(null); onNavigate('applications'); }}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#4A2E4B] hover:bg-[#3D223E] text-white shadow-sm transition-all"
                  >
                    View in Application Tracker →
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
