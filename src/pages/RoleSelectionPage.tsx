import React from 'react';
import { PageView, UserRole } from '../types';
import { 
  GraduationCap, 
  Building2, 
  Layers, 
  Landmark, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';

interface RoleSelectionPageProps {
  onSelectRole: (role: UserRole, targetPage: PageView) => void;
}

export const RoleSelectionPage: React.FC<RoleSelectionPageProps> = ({ onSelectRole }) => {
  const roles = [
    {
      id: 'student' as UserRole,
      title: 'Student & Job Seeker',
      subtitle: 'Primary Hackathon Demo Flow',
      badge: 'Full Student Flow',
      badgeColor: 'bg-[#F0E6F2] text-[#4A2E4B] border-[#DEC8E2]',
      icon: <GraduationCap className="w-8 h-8 text-[#4A2E4B]" />,
      glowBg: 'bg-[#F0E6F2]',
      description: 'Discover required skills, benchmark your competencies, map your skill gaps, follow learning programs, and apply to matched internships.',
      features: [
        'Interactive Skill Assessment Quiz',
        'AI Skill Mapping & Gap Simulator',
        'Curated Learning Programs Catalog',
        'Explore Opportunities with Match %',
        'Dedicated 5-Stage Applications Tracker',
        'Verified Digital Identity & Portfolio'
      ],
      targetPage: 'dashboard' as PageView,
      buttonText: 'Enter Student Portal →',
      buttonClass: 'bg-[#4A2E4B] hover:bg-[#3B2238] text-white shadow-xs'
    },
    {
      id: 'industry' as UserRole,
      title: 'Industry & Recruiters',
      subtitle: 'Talent Acquisition & Benchmarking',
      badge: 'Recruiter Hub',
      badgeColor: 'bg-[#EAF1EB] text-[#3B5342] border-[#B2CDBD]',
      icon: <Building2 className="w-8 h-8 text-[#5B7B64]" />,
      glowBg: 'bg-[#EAF1EB]',
      description: 'Define real-world competency requirements, publish verified internship openings, and discover pre-assessed candidates with transparent skill match scores.',
      features: [
        'Post roles with granular skill requirements',
        'Direct filter by verified readiness score (70%+)',
        'Review transparent student benchmark metrics',
        'Streamlined 1-click candidate interview invitations'
      ],
      targetPage: 'industry-portal' as PageView,
      buttonText: 'Explore Industry Portal →',
      buttonClass: 'bg-[#5B7B64] hover:bg-[#486650] text-white shadow-xs'
    },
    {
      id: 'academician' as UserRole,
      title: 'Academicians & Faculty',
      subtitle: 'Curriculum & Pedagogy Alignment',
      badge: 'Curriculum Sync',
      badgeColor: 'bg-[#FBEAE4] text-[#8A3421] border-[#F7D3C6]',
      icon: <Layers className="w-8 h-8 text-[#D96B50]" />,
      glowBg: 'bg-[#FBEAE4]',
      description: 'Analyze cohort-wide skill gaps against market demand, update university syllabus modules in sync with industry trends, and monitor student readiness metrics.',
      features: [
        'Live industry vs syllabus gap benchmarking',
        'Cohort aggregate skill deficiency heatmap',
        'AI recommended course curriculum updates',
        'University project alignment suggestions'
      ],
      targetPage: 'academic-portal' as PageView,
      buttonText: 'Open Faculty Portal →',
      buttonClass: 'bg-[#D96B50] hover:bg-[#C65236] text-white shadow-xs'
    },
    {
      id: 'institution' as UserRole,
      title: 'University Placement Cell',
      subtitle: 'Institutional Employability Analytics',
      badge: 'Campus Cell',
      badgeColor: 'bg-[#FAF8F5] text-[#574D43] border-[#DDD5C8]',
      icon: <Landmark className="w-8 h-8 text-[#3D352E]" />,
      glowBg: 'bg-[#FAF8F5]',
      description: 'Track university-wide placement statistics, manage corporate partner relationships, and issue cryptographically verified skill badges.',
      features: [
        'Placement rate and salary index dashboards',
        'Corporate partner recruitment pipelines',
        'Automated verified skill badge issuance',
        'Alumni hiring network tracking'
      ],
      targetPage: 'dashboard' as PageView,
      buttonText: 'View Institutional View →',
      buttonClass: 'bg-[#3D352E] hover:bg-[#2E2823] text-white shadow-xs'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F0E6F2] border border-[#DEC8E2] text-xs text-[#4A2E4B] font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D96B50]" />
          <span>Role-Based Portal Routing</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2E2823] font-display tracking-tight">
          Select Your Persona
        </h1>
        <p className="text-sm sm:text-base text-[#7E7367] mt-2">
          BRAIDLY AI delivers tailored intelligence and tools for every stakeholder in the education-to-career pipeline.
        </p>
      </div>

      {/* 4 Large Role Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((role) => (
          <div
            key={role.id}
            className="group bg-white border border-[#EAE3D9] hover:border-[#DDD5C8] rounded-3xl p-7 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              {/* Header row */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className={`w-14 h-14 rounded-2xl ${role.glowBg} border border-[#EAE3D9] flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  {role.icon}
                </div>
                <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${role.badgeColor}`}>
                  {role.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-[#2E2823] mb-1">
                {role.title}
              </h3>
              <p className="text-xs font-semibold text-[#7E7367] mb-3">
                {role.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs text-[#574D43] leading-relaxed mb-5">
                {role.description}
              </p>

              {/* Key Features list */}
              <div className="space-y-2 mb-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#7E7367]">
                  Key Portal Features:
                </div>
                {role.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-[#3D352E]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7B64] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action button */}
            <button
              onClick={() => onSelectRole(role.id, role.targetPage)}
              className={`w-full py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center space-x-2 ${role.buttonClass}`}
            >
              <span>{role.buttonText}</span>
            </button>

          </div>
        ))}
      </div>

      {/* Note banner */}
      <div className="mt-10 p-4 rounded-2xl bg-[#F0E6F2]/70 border border-[#DEC8E2] text-center max-w-2xl mx-auto flex items-center justify-center space-x-2 text-xs text-[#4A2E4B]">
        <ShieldCheck className="w-4 h-4 text-[#5B7B64] shrink-0" />
        <span>
          <strong>Pro-Tip for Hackathon Judges:</strong> Start with the <strong>Student Portal</strong> to experience the agreed 8-step student career journey!
        </span>
      </div>

    </div>
  );
};
