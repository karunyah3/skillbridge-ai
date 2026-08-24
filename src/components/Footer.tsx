import React from 'react';
import type { PageView } from '../types';
import { Sparkles, Heart, ShieldCheck, Zap, Code2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#F4EFEA] border-t border-[#EAE3D9] pt-12 pb-8 text-[#574D43] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-[#DDD5C8]">
          
          {/* Col 1: Brand info */}
          <div className="space-y-3.5 md:col-span-1">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#4A2E4B] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-[#2E2823] font-display tracking-tight">
                BRAIDLY <span className="text-[#D96B50]">AI</span>
              </span>
            </div>
            <p className="text-xs text-[#7E7367] leading-relaxed">
              Bridging academic learning and modern industry standards through AI skill mapping, adaptive learning programs, and verified candidate matching.
            </p>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#EAE3D9] text-[11px] text-[#4A2E4B] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#5B7B64]"></span>
              <span>AI Diagnostic Active • Hackathon Edition</span>
            </div>
          </div>

          {/* Col 2: Student Flow */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2E2823] mb-3.5">
              Student Journey
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('dashboard')} className="hover:text-[#4A2E4B] transition-colors font-medium">
                  Student Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('assessment')} className="hover:text-[#4A2E4B] transition-colors font-medium">
                  Skill Assessment Quiz
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('skill-mapping')} className="hover:text-[#4A2E4B] transition-colors font-medium">
                  Skill Mapping & Gap Simulator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('opportunities')} className="hover:text-[#4A2E4B] transition-colors font-medium">
                  Explore Opportunities
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('learning-programs')} className="hover:text-[#4A2E4B] transition-colors font-medium">
                  Learning Programs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('applications')} className="hover:text-[#4A2E4B] transition-colors font-medium">
                  Applications Tracker
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-[#4A2E4B] transition-colors font-medium">
                  Digital Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Collaboration Ecosystem */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2E2823] mb-3.5">
              Stakeholder Ecosystem
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('industry-portal')} className="hover:text-[#4A2E4B] transition-colors font-medium">
                  Industry Recruiter Portal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('academic-portal')} className="hover:text-[#4A2E4B] transition-colors font-medium">
                  Academician Curriculum Sync
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('role-select')} className="hover:text-[#4A2E4B] transition-colors font-medium">
                  University Placement Hub
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform Security & Standards */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2E2823] mb-3.5">
              Standards & Integrity
            </h4>
            <div className="space-y-2.5 text-xs text-[#574D43]">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#5B7B64] shrink-0" />
                <span>Verified Competency Badges</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-[#D96B50] shrink-0" />
                <span>Real-Time Market Rubric Scoring</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-[#4A2E4B] shrink-0" />
                <span>Open Academia Alliance</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7E7367] gap-4">
          <div className="flex items-center space-x-1">
            <span>BRAIDLY AI © 2026. Built with</span>
            <Heart className="w-3.5 h-3.5 text-[#D96B50] fill-[#D96B50]" />
            <span>for Academia-Industry Excellence.</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hover:text-[#2E2823] cursor-pointer">Privacy Charter</span>
            <span className="hover:text-[#2E2823] cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#2E2823] cursor-pointer">Ethical AI Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
