import React from 'react';
import { PageView } from '../types';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Briefcase, 
  Target, 
  ShieldCheck,
  ChevronRight,
  Code2,
  Terminal,
  Database,
  BookOpen
} from 'lucide-react';
import { ScoreGauge } from '../components/ScoreGauge';
import { INDUSTRY_STATS } from '../data/mockData';

interface LandingPageProps {
  onNavigate: (page: PageView) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-16 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-10 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F0E6F2] border border-[#DEC8E2] text-xs font-bold text-[#4A2E4B] shadow-xs">
                <Sparkles className="w-4 h-4 text-[#D96B50]" />
                <span>Academia–Industry Collaboration AI Portal</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2E2823] tracking-tight font-display leading-[1.15]">
                Your Skills. <br />
                <span className="text-[#4A2E4B]">Your Path. </span>
                <span className="text-[#D96B50]">Your Future.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#574D43] max-w-2xl font-normal leading-relaxed">
                BRAIDLY AI connects academic curriculums with modern industry requirements. Benchmark your competencies, diagnose missing skills with AI gap mapping, follow curated learning programs, and land matched tech internships.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => onNavigate('login')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-[#4A2E4B] hover:bg-[#3B2238] text-white shadow-md shadow-[#4A2E4B]/20 transition-all flex items-center justify-center space-x-2 group"
                >
                  <span>Get Started (Sign In)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('opportunities')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-[#FAF8F5] text-[#2E2823] border border-[#DDD5C8] transition-all flex items-center justify-center space-x-2"
                >
                  <Briefcase className="w-4 h-4 text-[#D96B50]" />
                  <span>Explore Opportunities</span>
                </button>
              </div>

              {/* Trust markers */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#7E7367]">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5B7B64]" />
                  <span>Verified Skill Assessment</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5B7B64]" />
                  <span>Real-Time Market Gap Mapping</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5B7B64]" />
                  <span>Direct Hiring Pipeline</span>
                </div>
              </div>

            </div>

            {/* Right Hero Interactive Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-md">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#F4EFEA]">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#F0E6F2] p-0.5 border border-[#DEC8E2]">
                      <img 
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" 
                        alt="Alex Chen"
                        className="w-full h-full rounded-full object-cover" 
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#2E2823] flex items-center gap-1.5">
                        <span>Alex Chen</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-[#5B7B64]" />
                      </div>
                      <div className="text-xs text-[#7E7367]">Target: AI/ML Engineer</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#EAF1EB] text-[#3B5342] border border-[#B2CDBD]">
                    Live Student Profile
                  </span>
                </div>

                {/* Score Gauge Visual */}
                <div className="my-5 flex items-center justify-center">
                  <ScoreGauge score={68} size={150} strokeWidth={12} label="Industry Score" sublabel="AI/ML Engineer Benchmark" />
                </div>

                {/* Strengths vs Gaps preview */}
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="text-[11px] font-bold uppercase text-[#5B7B64] tracking-wider mb-1.5 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Strengths</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-[#EAF1EB] text-[#3B5342] border border-[#B2CDBD] flex items-center gap-1">
                        <Code2 className="w-3 h-3" /> Java 85%
                      </span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-[#EAF1EB] text-[#3B5342] border border-[#B2CDBD] flex items-center gap-1">
                        <Terminal className="w-3 h-3" /> Python 80%
                      </span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-[#EAF1EB] text-[#3B5342] border border-[#B2CDBD] flex items-center gap-1">
                        <Database className="w-3 h-3" /> SQL 70%
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-bold uppercase text-[#D96B50] tracking-wider mb-1.5 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Top Skill Gaps</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-[#FBEAE4] text-[#8A3421] border border-[#F7D3C6]">
                        ⚠ Machine Learning (30%)
                      </span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-[#FBEAE4] text-[#8A3421] border border-[#F7D3C6]">
                        ⚠ Cloud Deployments (25%)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onNavigate('skill-mapping')}
                  className="w-full mt-5 py-2.5 rounded-xl font-bold text-xs bg-[#FAF8F5] hover:bg-[#F4EFEA] text-[#4A2E4B] border border-[#DEC8E2] transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>Open Skill Mapping Matrix</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PARTNERS STRIP */}
      <section className="border-y border-[#EAE3D9] bg-[#F4EFEA]/60 py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-[#7E7367] uppercase tracking-widest mb-4">
            Aligned with Leading Industry & University Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-[#574D43] text-sm font-bold opacity-90">
            <span className="hover:text-[#2E2823] transition-colors">NVIDIA Deep Learning</span>
            <span className="hover:text-[#2E2823] transition-colors">Google Cloud Education</span>
            <span className="hover:text-[#2E2823] transition-colors">AWS Educate</span>
            <span className="hover:text-[#2E2823] transition-colors">Stanford AI Lab</span>
            <span className="hover:text-[#2E2823] transition-colors">MIT CSAIL Alliance</span>
            <span className="hover:text-[#2E2823] transition-colors">Databricks Academy</span>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#D96B50] mb-2 font-mono">
            Platform Capabilities
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#2E2823] tracking-tight font-display">
            The Complete Academia-to-Industry Engine
          </h3>
          <p className="text-sm sm:text-base text-[#574D43] mt-2">
            Four interconnected modules that guide students from skill assessment to high-match opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Skill Assessment */}
          <div 
            onClick={() => onNavigate('assessment')}
            className="group cursor-pointer bg-white border border-[#EAE3D9] hover:border-[#DEC8E2] rounded-3xl p-6 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F0E6F2] border border-[#DEC8E2] text-[#4A2E4B] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#2E2823] mb-2 group-hover:text-[#4A2E4B] transition-colors">
                Skill Assessment
              </h4>
              <p className="text-xs text-[#7E7367] leading-relaxed mb-4">
                Adaptive diagnostic quiz testing code comprehension, algorithmic thinking, and core technical proficiency.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-[#4A2E4B]">
              <span>Start Assessment</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

          {/* Card 2: Skill Mapping */}
          <div 
            onClick={() => onNavigate('skill-mapping')}
            className="group cursor-pointer bg-white border-2 border-[#DEC8E2] rounded-3xl p-6 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between relative"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EAF1EB] border border-[#B2CDBD] text-[#5B7B64] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#2E2823] mb-2 group-hover:text-[#5B7B64] transition-colors">
                Skill Mapping
              </h4>
              <p className="text-xs text-[#7E7367] leading-relaxed mb-4">
                Side-by-side benchmark comparison against industry standards with an interactive “What-If” gap closure simulator.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-[#5B7B64]">
              <span>Explore Skill Mapping</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

          {/* Card 3: Learning Programs */}
          <div 
            onClick={() => onNavigate('learning-programs')}
            className="group cursor-pointer bg-white border border-[#EAE3D9] hover:border-[#F7D3C6] rounded-3xl p-6 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FBEAE4] border border-[#F7D3C6] text-[#D96B50] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#2E2823] mb-2 group-hover:text-[#D96B50] transition-colors">
                Learning Programs
              </h4>
              <p className="text-xs text-[#7E7367] leading-relaxed mb-4">
                Curated courses, certifications, workshops, and mentorships published directly by partnering companies.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-[#D96B50]">
              <span>View Programs</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

          {/* Card 4: Smart Matching */}
          <div 
            onClick={() => onNavigate('opportunities')}
            className="group cursor-pointer bg-white border border-[#EAE3D9] hover:border-[#DDD5C8] rounded-3xl p-6 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#DDD5C8] text-[#3D352E] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#2E2823] mb-2 group-hover:text-[#4A2E4B] transition-colors">
                Explore Opportunities
              </h4>
              <p className="text-xs text-[#7E7367] leading-relaxed mb-4">
                Real-time openings with transparent match scores, matched vs missing skills, and 1-click fast-track applications.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-[#3D352E]">
              <span>Explore Roles</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

        </div>
      </section>

      {/* 4. IMPACT METRICS COUNTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 text-center shadow-2xs">
            <div className="text-3xl sm:text-4xl font-black text-[#4A2E4B] font-display mb-1">
              {INDUSTRY_STATS.activeStudents}
            </div>
            <div className="text-xs text-[#7E7367] font-semibold">Students Assessed & Guided</div>
          </div>

          <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 text-center shadow-2xs">
            <div className="text-3xl sm:text-4xl font-black text-[#5B7B64] font-display mb-1">
              {INDUSTRY_STATS.partnerCompanies}
            </div>
            <div className="text-xs text-[#7E7367] font-semibold">Hiring Industry Partners</div>
          </div>

          <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 text-center shadow-2xs">
            <div className="text-3xl sm:text-4xl font-black text-[#D96B50] font-display mb-1">
              {INDUSTRY_STATS.averageReadinessBoost}
            </div>
            <div className="text-xs text-[#7E7367] font-semibold">Average Readiness Growth</div>
          </div>

          <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 text-center shadow-2xs">
            <div className="text-3xl sm:text-4xl font-black text-[#3D352E] font-display mb-1">
              {INDUSTRY_STATS.averagePlacementMatchRate}
            </div>
            <div className="text-xs text-[#7E7367] font-semibold">Interview Shortlist Rate</div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#4A2E4B] to-[#3B2238] rounded-3xl p-8 sm:p-12 text-center text-white shadow-md">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-4xl font-black font-display">
              Ready to Bridge Your Skill Gap?
            </h3>
            <p className="text-sm text-[#F0E6F2]">
              Take the interactive diagnostic assessment and see your industry benchmark score immediately.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('login')}
                className="px-8 py-3.5 rounded-xl font-bold text-sm bg-[#D96B50] hover:bg-[#C65236] text-white shadow-md transition-all transform hover:scale-105"
              >
                Sign In to Student Portal 🚀
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
