import React, { useState } from 'react';
import type { PageView } from '../types';
import { 
  Building2, 
  Plus, 
  CheckCircle2, 
  ShieldCheck,
  Send,
  X,
  Sparkles,
  Search
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface IndustryPortalPageProps {
  onNavigate: (page: PageView) => void;
}

export const IndustryPortalPage: React.FC<IndustryPortalPageProps> = ({ onNavigate }) => {
  const [invitedStudent, setInvitedStudent] = useState<string | null>(null);
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [newRoleTitle, setNewRoleTitle] = useState('');
  const [postedSuccess, setPostedSuccess] = useState(false);

  const candidatePool = [
    {
      id: 'c-1',
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      university: 'California Inst. of Advanced Tech',
      degree: 'B.Tech CS (AI Specialization)',
      gradYear: '2026',
      readinessScore: 68,
      matchForRole: 87,
      targetRole: 'AI / ML Engineer',
      topSkills: ['Python (80%)', 'Java (85%)', 'SQL (70%)', 'PyTorch Lab'],
      verifiedBadges: 3,
      status: 'Available for Summer 2026'
    },
    {
      id: 'c-2',
      name: 'Sarah Lin',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80',
      university: 'Stanford AI Guild',
      degree: 'M.S. Computer Science',
      gradYear: '2026',
      readinessScore: 84,
      matchForRole: 92,
      targetRole: 'Computer Vision Engineer',
      topSkills: ['PyTorch (90%)', 'CUDA (80%)', 'OpenCV (85%)', 'C++ (75%)'],
      verifiedBadges: 5,
      status: 'Interviewing'
    },
    {
      id: 'c-3',
      name: 'Marcus Vance',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80',
      university: 'UC Berkeley EECS',
      degree: 'B.S. Electrical & Computer Eng',
      gradYear: '2026',
      readinessScore: 78,
      matchForRole: 82,
      targetRole: 'Full Stack Systems Engineer',
      topSkills: ['Java Spring (88%)', 'TypeScript (85%)', 'Docker (80%)', 'PostgreSQL (82%)'],
      verifiedBadges: 4,
      status: 'Available for Summer 2026'
    }
  ];

  const handleInvite = (studentName: string) => {
    setInvitedStudent(studentName);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => setInvitedStudent(null), 3500);
  };

  const handlePostRole = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRoleTitle.trim()) return;
    setPostedSuccess(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setPostedSuccess(false);
      setPostModalOpen(false);
      setNewRoleTitle('');
    }, 1800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* 1. INDUSTRY HEADER */}
      <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EAF1EB] border border-[#B2CDBD] text-xs font-bold text-[#3B5342] mb-2.5">
            <Building2 className="w-3.5 h-3.5 text-[#5B7B64]" />
            <span>Industry Recruiter & Talent Portal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2E2823] tracking-tight font-display">
            NeuroScale AI Talent Pipeline
          </h1>
          <p className="text-xs sm:text-sm text-[#7E7367] mt-1 max-w-xl">
            Discover pre-assessed candidates with transparent, verified competency benchmarks.
          </p>
        </div>

        <button
          onClick={() => setPostModalOpen(true)}
          className="px-5 py-3 rounded-xl font-bold text-xs bg-[#5B7B64] hover:bg-[#486650] text-white shadow-xs transition-all flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Post New Internship Role</span>
        </button>
      </div>

      {/* 2. STATS ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white border border-[#EAE3D9] rounded-2xl p-5 shadow-2xs">
          <span className="text-xs font-bold text-[#7E7367]">Assessed Talent Pool</span>
          <div className="text-3xl font-extrabold text-[#4A2E4B] font-display mt-1">45,200+</div>
          <div className="text-[11px] text-[#7E7367] mt-1">Verified university undergrads</div>
        </div>

        <div className="bg-white border border-[#EAE3D9] rounded-2xl p-5 shadow-2xs">
          <span className="text-xs font-bold text-[#7E7367]">Active Applications</span>
          <div className="text-3xl font-extrabold text-[#5B7B64] font-display mt-1">128</div>
          <div className="text-[11px] text-[#5B7B64] font-semibold mt-1">87% average skill match fit</div>
        </div>

        <div className="bg-white border border-[#EAE3D9] rounded-2xl p-5 shadow-2xs">
          <span className="text-xs font-bold text-[#7E7367]">Interviews Fast-Tracked</span>
          <div className="text-3xl font-extrabold text-[#D96B50] font-display mt-1">34</div>
          <div className="text-[11px] text-[#D96B50] font-semibold mt-1">Zero resume screening lag</div>
        </div>
      </div>

      {/* 3. CANDIDATE MATCH TALENT FEED */}
      <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F4EFEA]">
          <div>
            <h3 className="text-lg font-bold text-[#2E2823]">AI-Matched Candidate Pipeline</h3>
            <p className="text-xs text-[#7E7367]">Showing top candidates matching your “AI/ML Intern” opening</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-[#7E7367]">Sort:</span>
            <span className="text-xs font-bold text-[#4A2E4B] bg-[#F0E6F2] px-3 py-1 rounded-lg border border-[#DEC8E2]">
              Match Score (Highest)
            </span>
          </div>
        </div>

        {invitedStudent && (
          <div className="p-4 rounded-2xl bg-[#EAF1EB] border border-[#B2CDBD] text-[#3B5342] text-xs flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#5B7B64]" />
              <span>Interview invitation sent to <strong>{invitedStudent}</strong> with verified credentials attachment.</span>
            </div>
            <span className="text-[10px] font-bold bg-white px-2 py-0.5 rounded border border-[#B2CDBD]">Notification Sent</span>
          </div>
        )}

        <div className="space-y-4">
          {candidatePool.map((c) => (
            <div 
              key={c.id}
              className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D9] hover:border-[#DDD5C8] transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="flex items-start space-x-4">
                <img 
                  src={c.avatar} 
                  alt={c.name}
                  className="w-14 h-14 rounded-2xl object-cover border border-[#EAE3D9] shrink-0" 
                />
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-base font-bold text-[#2E2823]">{c.name}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EAF1EB] text-[#3B5342] border border-[#B2CDBD] flex items-center gap-1 font-mono">
                      <ShieldCheck className="w-3 h-3 text-[#5B7B64]" />
                      {c.verifiedBadges} Badges
                    </span>
                    <span className="text-[10px] font-semibold text-[#5B7B64] bg-white px-2 py-0.5 rounded border border-[#EAE3D9]">
                      {c.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#574D43]">{c.degree} • {c.university}</p>
                  
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {c.topSkills.map((sk, idx) => (
                      <span key={idx} className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white text-[#574D43] border border-[#EAE3D9]">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6 shrink-0 w-full md:w-auto justify-between md:justify-end pt-3 md:pt-0 border-t md:border-t-0 border-[#EAE3D9]">
                <div className="text-right">
                  <div className="text-[10px] text-[#7E7367] uppercase font-bold">Match Score</div>
                  <div className="text-2xl font-black text-[#5B7B64] font-mono">{c.matchForRole}%</div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onNavigate('portfolio')}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white hover:bg-[#F4EFEA] text-[#3D352E] border border-[#DDD5C8] transition-colors"
                  >
                    Portfolio
                  </button>

                  <button
                    onClick={() => handleInvite(c.name)}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-[#5B7B64] hover:bg-[#486650] text-white shadow-xs transition-all flex items-center space-x-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Invite to Interview</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* POST NEW ROLE MODAL */}
      {postModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#231E1A]/60 backdrop-blur-xs">
          <div className="bg-white border border-[#EAE3D9] rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-xl relative">
            <button
              onClick={() => setPostModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-[#7E7367] hover:text-[#2E2823]"
            >
              <X className="w-5 h-5" />
            </button>

            {!postedSuccess ? (
              <form onSubmit={handlePostRole} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#2E2823]">Post New Opportunity</h3>
                  <p className="text-xs text-[#7E7367]">Define required rubric to auto-match pre-assessed candidates</p>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#574D43] block mb-1">Role Title</label>
                  <input
                    type="text"
                    value={newRoleTitle}
                    onChange={(e) => setNewRoleTitle(e.target.value)}
                    placeholder="e.g. AI Research Intern, Cloud Systems Engineer"
                    className="w-full bg-[#FAF8F5] border border-[#DDD5C8] rounded-xl px-3 py-2 text-xs text-[#2E2823] focus:outline-none focus:border-[#4A2E4B]"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#574D43] block mb-1">Required Skills Rubric</label>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] text-[#4A2E4B] border border-[#EAE3D9] font-bold">Python (75%+)</span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] text-[#D96B50] border border-[#EAE3D9] font-bold">Machine Learning (80%+)</span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] text-[#5B7B64] border border-[#EAE3D9] font-bold">SQL (70%+)</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F4EFEA] flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setPostModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-[#7E7367] hover:text-[#2E2823]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-[#5B7B64] hover:bg-[#486650] text-white shadow-xs"
                  >
                    Publish Opening 🚀
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#5B7B64] mx-auto" />
                <h4 className="text-lg font-bold text-[#2E2823]">Opening Published!</h4>
                <p className="text-xs text-[#7E7367]">
                  AI algorithm is now auto-matching 45,200+ assessed student portfolios against your rubric.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
