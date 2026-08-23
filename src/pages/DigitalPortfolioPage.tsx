import React, { useState } from 'react';
import { PageView, DigitalPortfolio } from '../types';
import { 
  ShieldCheck, 
  Download, 
  QrCode, 
  ExternalLink, 
  Award, 
  MapPin, 
  GraduationCap, 
  Copy, 
  Check, 
  Code2, 
  Briefcase, 
  X,
  FileText,
  Sparkles,
  Share2
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DigitalPortfolioPageProps {
  onNavigate: (page: PageView) => void;
  profile: DigitalPortfolio;
}

export const DigitalPortfolioPage: React.FC<DigitalPortfolioPageProps> = ({
  onNavigate,
  profile,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://skillbridge.ai/p/${profile.studentName.toLowerCase().replace(/\s+/g, '-')}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleDownloadPDF = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* 1. TOP HERO PROFILE CARD */}
      <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          {/* Avatar and Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#F0E6F2] p-1 border-2 border-[#DEC8E2] shadow-sm">
                <img 
                  src={profile.avatarUrl} 
                  alt={profile.studentName}
                  className="w-full h-full object-cover rounded-[20px]" 
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#5B7B64] text-white p-1.5 rounded-full shadow-md">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2E2823] font-display">
                  {profile.studentName}
                </h1>
                <span className="inline-flex items-center space-x-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#EAF1EB] text-[#3B5342] border border-[#B2CDBD] font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Identity & Badges</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#574D43]">
                {profile.headline}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#7E7367] pt-1">
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-[#4A2E4B]" />
                  {profile.university} ({profile.graduationYear})
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#7E7367]" />
                  {profile.location}
                </span>
                <span className="flex items-center gap-1 text-[#5B7B64] font-bold font-mono">
                  CGPA: {profile.cgpa}
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <button
              onClick={handleCopyLink}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#FAF8F5] hover:bg-[#F4EFEA] text-[#3D352E] border border-[#DDD5C8] transition-all flex items-center space-x-1.5"
            >
              {copiedLink ? <Check className="w-4 h-4 text-[#5B7B64]" /> : <Copy className="w-4 h-4 text-[#4A2E4B]" />}
              <span>{copiedLink ? 'Link Copied!' : 'Share Portfolio'}</span>
            </button>

            <button
              onClick={() => setQrModalOpen(true)}
              className="px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-[#FAF8F5] hover:bg-[#F4EFEA] text-[#3D352E] border border-[#DDD5C8] transition-all"
              title="Show QR Code"
            >
              <QrCode className="w-4 h-4" />
            </button>

            <button
              onClick={handleDownloadPDF}
              disabled={isExporting}
              className="px-5 py-2.5 rounded-xl font-bold text-xs bg-[#4A2E4B] hover:bg-[#3D223E] text-white shadow-sm transition-all flex items-center space-x-1.5"
            >
              <Download className="w-4 h-4" />
              <span>{isExporting ? 'Generating PDF...' : 'Download Resume / PDF'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. PORTFOLIO COMPLETION & SUMMARY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Bio & Details (8 Cols) */}
        <div className="lg:col-span-8 bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-7 shadow-sm space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#7E7367]">
            Professional Biography
          </h3>
          <p className="text-xs sm:text-sm text-[#3D352E] leading-relaxed">
            {profile.bio}
          </p>

          <div className="pt-3 border-t border-[#F4EFEA] flex flex-wrap items-center gap-6 text-xs text-[#7E7367]">
            <div>
              <span className="text-[#A2978A]">Degree:</span> <strong className="text-[#2E2823]">{profile.degree}</strong>
            </div>
            <div>
              <span className="text-[#A2978A]">Target Role:</span> <strong className="text-[#4A2E4B]">{profile.targetRole}</strong>
            </div>
            <div>
              <span className="text-[#A2978A]">Verification Hash:</span> <strong className="text-[#7E7367] font-mono text-[11px]">0x89f4b3...c312</strong>
            </div>
          </div>
        </div>

        {/* Completion Meter (4 Cols) */}
        <div className="lg:col-span-4 bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-bold text-[#2E2823]">Portfolio Completion</span>
              <span className="font-mono font-bold text-[#4A2E4B]">{profile.completionScore}%</span>
            </div>
            <div className="w-full bg-[#FAF8F5] border border-[#EAE3D9] rounded-full h-2.5 overflow-hidden mb-3">
              <div 
                className="bg-gradient-to-r from-[#4A2E4B] to-[#5B7B64] h-full rounded-full"
                style={{ width: `${profile.completionScore}%` }}
              />
            </div>
            <p className="text-xs text-[#7E7367] leading-relaxed">
              Complete your Machine Learning capstone project to reach 100% and unlock the recruiter priority fast-track seal.
            </p>
          </div>

          <button
            onClick={() => onNavigate('learning-programs')}
            className="w-full mt-4 py-2 rounded-xl text-xs font-bold text-[#4A2E4B] bg-[#F0E6F2] hover:bg-[#DEC8E2] transition-colors"
          >
            Optimize Profile to 100% →
          </button>
        </div>

      </div>

      {/* 3. VERIFIED SKILL BADGES */}
      <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-[#F4EFEA]">
          <div>
            <h3 className="text-base font-bold text-[#2E2823]">Verified Skill Badges</h3>
            <p className="text-xs text-[#7E7367]">Authenticated via SkillBridge Proctored Benchmark Protocols</p>
          </div>
          <span className="text-xs font-mono text-[#5B7B64] bg-[#EAF1EB] px-2.5 py-1 rounded-full border border-[#B2CDBD] font-bold">
            {profile.verifiedBadges.length} Badges Active
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {profile.verifiedBadges.map((badge) => (
            <div 
              key={badge.id}
              className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D9] hover:border-[#DDD5C8] transition-all shadow-2xs flex items-start space-x-3.5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F0E6F2] border border-[#DEC8E2] text-[#4A2E4B] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-[#2E2823]">{badge.name}</h4>
                <div className="text-[11px] text-[#7E7367]">{badge.issuer}</div>
                <div className="text-[10px] text-[#A2978A] font-mono pt-1">
                  Issued: {badge.date} • {badge.verifiedHash}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. FEATURED PROJECTS */}
      <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#F4EFEA]">
          <div>
            <h3 className="text-base font-bold text-[#2E2823]">Featured Technical Projects</h3>
            <p className="text-xs text-[#7E7367]">Production software architectures, neural pipelines, and systems</p>
          </div>
          <span className="text-xs text-[#7E7367]">3 Projects</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profile.projects.map((proj) => (
            <div 
              key={proj.id}
              className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D9] hover:border-[#DDD5C8] transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-sm font-bold text-[#2E2823] leading-snug">{proj.title}</h4>
                  {proj.featured && (
                    <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-[#F0E6F2] text-[#4A2E4B] border border-[#DEC8E2]">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#574D43] leading-relaxed line-clamp-3 mb-3">
                  {proj.description}
                </p>
                <div className="text-[11px] text-[#4A2E4B] font-semibold bg-white p-2 rounded-xl border border-[#EAE3D9] mb-3">
                  ⚡ {proj.metrics}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {proj.skills.map((s, idx) => (
                    <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white text-[#574D43] border border-[#EAE3D9]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#EAE3D9] flex items-center justify-between text-xs">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-[#574D43] hover:text-[#2E2823] font-semibold"
                >
                  <Code2 className="w-3.5 h-3.5 text-[#4A2E4B]" />
                  <span>Source Code</span>
                </a>
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-[#D96B50] hover:text-[#C65236] font-bold"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. CERTIFICATIONS & EXPERIENCE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Certifications */}
        <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-7 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 pb-3 border-b border-[#F4EFEA]">
            <Award className="w-5 h-5 text-[#4A2E4B]" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#2E2823]">
              Industry Certifications
            </h3>
          </div>

          <div className="space-y-3">
            {profile.certifications.map((cert) => (
              <div key={cert.id} className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D9]">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-[#2E2823]">{cert.title}</h4>
                  <span className="text-[10px] text-[#7E7367]">{cert.issueDate}</span>
                </div>
                <div className="text-[11px] text-[#5B7B64] font-semibold mt-0.5">{cert.issuer}</div>
                <div className="text-[10px] text-[#A2978A] font-mono mt-1">
                  Credential ID: {cert.credentialId}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience / Research */}
        <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-7 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 pb-3 border-b border-[#F4EFEA]">
            <Briefcase className="w-5 h-5 text-[#5B7B64]" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#2E2823]">
              Experience & Academic Fellowships
            </h3>
          </div>

          <div className="space-y-3">
            {profile.experience.map((exp, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D9]">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-[#2E2823]">{exp.role}</h4>
                  <span className="text-[10px] text-[#7E7367]">{exp.period}</span>
                </div>
                <div className="text-[11px] text-[#4A2E4B] font-semibold mt-0.5">{exp.company}</div>
                <ul className="mt-2 space-y-1 text-[11px] text-[#574D43]">
                  {exp.description.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A2978A] mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 6. QR CODE MODAL */}
      {qrModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#231E1A]/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white border border-[#EAE3D9] rounded-3xl w-full max-w-sm p-6 shadow-xl text-center space-y-4 relative">
            <button
              onClick={() => setQrModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-[#7E7367] hover:text-[#2E2823]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-[#F0E6F2] text-[#4A2E4B] flex items-center justify-center mx-auto">
              <QrCode className="w-6 h-6" />
            </div>

            <div>
              <h4 className="text-base font-bold text-[#2E2823]">Scan Verified Portfolio</h4>
              <p className="text-xs text-[#7E7367] mt-1">
                Scan with any smartphone camera to open Alex Chen's verified credentials.
              </p>
            </div>

            {/* QR Pattern */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#EAE3D9] inline-block shadow-inner">
              <svg className="w-40 h-40" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" fill="#FAF8F5" />
                <rect x="10" y="10" width="25" height="25" fill="#2E2823" />
                <rect x="15" y="15" width="15" height="15" fill="#FAF8F5" />
                <rect x="18" y="18" width="9" height="9" fill="#4A2E4B" />
                
                <rect x="65" y="10" width="25" height="25" fill="#2E2823" />
                <rect x="70" y="15" width="15" height="15" fill="#FAF8F5" />
                <rect x="73" y="18" width="9" height="9" fill="#4A2E4B" />

                <rect x="10" y="65" width="25" height="25" fill="#2E2823" />
                <rect x="15" y="70" width="15" height="15" fill="#FAF8F5" />
                <rect x="18" y="73" width="9" height="9" fill="#4A2E4B" />

                <rect x="42" y="12" width="6" height="6" fill="#2E2823" />
                <rect x="50" y="24" width="6" height="6" fill="#2E2823" />
                <rect x="40" y="40" width="20" height="20" fill="#5B7B64" />
                <rect x="45" y="45" width="10" height="10" fill="#2E2823" />
                <rect x="68" y="48" width="8" height="8" fill="#2E2823" />
                <rect x="80" y="65" width="10" height="10" fill="#2E2823" />
                <rect x="42" y="75" width="14" height="6" fill="#2E2823" />
                <rect x="62" y="80" width="12" height="8" fill="#2E2823" />
              </svg>
            </div>

            <div className="text-[11px] font-mono text-[#4A2E4B] bg-[#FAF8F5] py-1.5 px-3 rounded-lg border border-[#EAE3D9] truncate">
              https://skillbridge.ai/p/alex-chen
            </div>

            <button
              onClick={() => setQrModalOpen(false)}
              className="w-full py-2.5 rounded-xl font-bold text-xs bg-[#FAF8F5] hover:bg-[#F4EFEA] text-[#3D352E] border border-[#DDD5C8]"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
