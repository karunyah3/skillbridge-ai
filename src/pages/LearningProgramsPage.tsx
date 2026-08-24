import React, { useState } from 'react';
import { PageView, LearningProgram } from '../types';
import { 
  BookOpen, 
  Sparkles, 
  Search, 
  CheckCircle2, 
  Award, 
  Clock, 
  Star, 
  ArrowRight, 
  Filter, 
  Users, 
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LearningProgramsPageProps {
  onNavigate: (page: PageView) => void;
  programs: LearningProgram[];
  onEnrollProgram: (prog: LearningProgram) => void;
}

export const LearningProgramsPage: React.FC<LearningProgramsPageProps> = ({
  onNavigate,
  programs,
  onEnrollProgram,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [enrolledMap, setEnrolledMap] = useState<Record<string, boolean>>({});

  const domains = ['All', 'AI/ML', 'Cloud', 'Data', 'Software', 'Cybersecurity'];
  const types = ['All Types', 'Course', 'Certification', 'Workshop', 'Mentorship', 'Industry Training'];

  // Recommended for You: programs with isRecommended === true
  const recommendedPrograms = programs.filter(p => p.isRecommended);

  // Filtered list
  const filteredPrograms = programs.filter((p) => {
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.skillsGained.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDomain = selectedDomain === 'all' || selectedDomain === 'All' || p.domain.toLowerCase() === selectedDomain.toLowerCase();
    const matchesType = selectedType === 'all' || selectedType === 'All Types' || p.type.toLowerCase() === selectedType.toLowerCase();

    return matchesSearch && matchesDomain && matchesType;
  });

  const handleEnroll = (prog: LearningProgram) => {
    setEnrolledMap(prev => ({ ...prev, [prog.id]: true }));
    onEnrollProgram(prog);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* 1. HEADER */}
      <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F0E6F2] border border-[#DEC8E2] text-xs font-bold text-[#4A2E4B] mb-2.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curated Upskilling Ecosystem</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2E2823] tracking-tight font-display">
            Learning Programs
          </h1>
          <p className="text-xs sm:text-sm text-[#7E7367] mt-1 max-w-xl">
            Industry-published courses, certifications, workshops, and mentorships to bridge your specific skill gaps.
          </p>
        </div>

        <button
          onClick={() => onNavigate('skill-mapping')}
          className="px-4 py-2.5 rounded-xl font-bold text-xs bg-[#FAF8F5] hover:bg-[#F4EFEA] text-[#4A2E4B] border border-[#DEC8E2] transition-all flex items-center space-x-2"
        >
          <span>Check My Skill Gaps</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 2. "RECOMMENDED FOR YOU" SECTION */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-[#D96B50]" />
            <h2 className="text-lg font-bold text-[#2E2823]">
              Recommended for You
            </h2>
          </div>
          <span className="text-xs font-semibold text-[#5B7B64] bg-[#EAF1EB] px-2.5 py-1 rounded-full border border-[#B2CDBD]">
            Based on your AI/ML Engineer Gap Analysis
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedPrograms.map((prog) => {
            const isEnrolled = enrolledMap[prog.id];
            return (
              <div 
                key={prog.id}
                className="bg-white border-2 border-[#DEC8E2] rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 relative overflow-hidden"
              >
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F0E6F2] text-[#4A2E4B] border border-[#DEC8E2]">
                    Top AI Match
                  </span>
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <img 
                      src={prog.providerLogo} 
                      alt={prog.provider}
                      className="w-10 h-10 rounded-xl object-cover border border-[#EAE3D9]" 
                    />
                    <div>
                      <h3 className="text-sm font-bold text-[#2E2823] line-clamp-1">{prog.title}</h3>
                      <div className="text-xs text-[#7E7367]">{prog.provider}</div>
                    </div>
                  </div>

                  <p className="text-xs text-[#574D43] leading-relaxed line-clamp-2 mb-3">
                    {prog.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {prog.skillsGained.map((sk, idx) => (
                      <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#FAF8F5] text-[#3D352E] border border-[#EAE3D9]">
                        {sk}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#7E7367] pt-2 border-t border-[#F4EFEA]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#5B7B64]" />
                      {prog.duration}
                    </span>
                    <span className="flex items-center gap-1 text-[#D96B50] font-bold">
                      <Award className="w-3.5 h-3.5" />
                      Certificate Included
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#5B7B64]">{prog.cost}</span>
                  <button
                    onClick={() => handleEnroll(prog)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                      isEnrolled
                        ? 'bg-[#EAF1EB] text-[#3B5342] border border-[#B2CDBD]'
                        : 'bg-[#4A2E4B] hover:bg-[#3D223E] text-white shadow-xs'
                    }`}
                  >
                    {isEnrolled ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#5B7B64]" />
                        <span>Enrolled ✓</span>
                      </>
                    ) : (
                      <span>Enroll Now</span>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* 3. ALL PROGRAMS & SEARCH / FILTER CONTROLS */}
      <div className="space-y-6 pt-4">
        
        <div className="bg-white border border-[#EAE3D9] rounded-3xl p-5 shadow-sm space-y-4">
          
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#A2978A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search programs by title, skills, or provider (e.g., PyTorch, AWS, DeepLearning.AI)..."
              className="w-full bg-[#FAF8F5] border border-[#DDD5C8] text-[#2E2823] text-xs sm:text-sm rounded-2xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#4A2E4B]"
            />
          </div>

          {/* Domain Chips */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-1.5">
              {domains.map((d) => {
                const isSelected = selectedDomain === d || (d === 'All' && selectedDomain === 'all');
                return (
                  <button
                    key={d}
                    onClick={() => setSelectedDomain(d === 'All' ? 'all' : d)}
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

            {/* Type selector */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              aria-label="Filter by Program Type"
              className="bg-[#FAF8F5] border border-[#DDD5C8] text-xs font-bold text-[#574D43] rounded-xl px-3 py-1.5 focus:outline-none focus:border-[#4A2E4B] cursor-pointer"
            >
              {types.map(t => (
                <option key={t} value={t === 'All Types' ? 'all' : t}>{t}</option>
              ))}
            </select>
          </div>

        </div>

        {/* All Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPrograms.map((prog) => {
            const isEnrolled = enrolledMap[prog.id];
            return (
              <div 
                key={prog.id}
                className="bg-white border border-[#EAE3D9] hover:border-[#DDD5C8] rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-[#4A2E4B] bg-[#F0E6F2] px-2.5 py-0.5 rounded-full border border-[#DEC8E2]">
                      {prog.type}
                    </span>
                    <span className="text-xs font-bold text-[#D96B50] flex items-center gap-1 font-mono">
                      <Star className="w-3.5 h-3.5 fill-[#D96B50]" />
                      {prog.rating}
                    </span>
                  </div>

                  <div className="flex items-start space-x-3 mb-2">
                    <img 
                      src={prog.providerLogo} 
                      alt={prog.provider}
                      className="w-10 h-10 rounded-xl object-cover border border-[#EAE3D9] shrink-0" 
                    />
                    <div>
                      <h3 className="text-sm font-bold text-[#2E2823]">{prog.title}</h3>
                      <div className="text-xs text-[#7E7367]">{prog.provider}</div>
                    </div>
                  </div>

                  <p className="text-xs text-[#574D43] leading-relaxed line-clamp-2 mb-3">
                    {prog.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {prog.skillsGained.map((sk, idx) => (
                      <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#FAF8F5] text-[#3D352E] border border-[#EAE3D9]">
                        {sk}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#7E7367] pt-2 border-t border-[#F4EFEA]">
                    <span>{prog.duration}</span>
                    <span>{prog.enrolledCount}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-[#F4EFEA]">
                  <span className="text-xs font-bold text-[#5B7B64]">{prog.cost}</span>
                  <button
                    onClick={() => handleEnroll(prog)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                      isEnrolled
                        ? 'bg-[#EAF1EB] text-[#3B5342] border border-[#B2CDBD]'
                        : 'bg-[#D96B50] hover:bg-[#C65236] text-white shadow-xs'
                    }`}
                  >
                    {isEnrolled ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#5B7B64]" />
                        <span>Enrolled ✓</span>
                      </>
                    ) : (
                      <span>Enroll Program</span>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
