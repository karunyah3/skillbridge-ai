import React from 'react';
import { PageView } from '../types';
import { 
  Layers, 
  Sparkles, 
  TrendingUp, 
  BookOpen, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  RefreshCw
} from 'lucide-react';

interface AcademicianPortalPageProps {
  onNavigate: (page: PageView) => void;
}

export const AcademicianPortalPage: React.FC<AcademicianPortalPageProps> = ({ onNavigate }) => {
  const cohortGaps = [
    {
      courseCode: 'CS-402',
      courseName: 'Machine Learning & Neural Architectures',
      enrolledStudents: 145,
      curriculumTheoryScore: 82,
      industryHandsOnScore: 34,
      gapDelta: -48,
      severity: 'Critical Gap',
      aiFix: 'Incorporate Scikit-Learn Pipeline labs and Dockerized FastAPI model inference into Week 6-9 assignments.'
    },
    {
      courseCode: 'CS-308',
      courseName: 'Distributed Systems & Cloud Infrastructure',
      enrolledStudents: 180,
      curriculumTheoryScore: 78,
      industryHandsOnScore: 28,
      gapDelta: -50,
      severity: 'Critical Gap',
      aiFix: 'Add hands-on AWS EC2/S3 sandbox assignments and GitHub Actions CI/CD pipeline automation.'
    },
    {
      courseCode: 'CS-201',
      courseName: 'Advanced Data Structures & Algorithms in Java',
      enrolledStudents: 220,
      curriculumTheoryScore: 88,
      industryHandsOnScore: 76,
      gapDelta: -12,
      severity: 'Minor Gap',
      aiFix: 'Introduce timed algorithmic contest practice on dynamic programming and graph structures.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* 1. HEADER */}
      <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FBEAE4] border border-[#F7D3C6] text-xs font-bold text-[#8A3421] mb-2.5">
            <Layers className="w-3.5 h-3.5 text-[#D96B50]" />
            <span>Academic Curriculum Sync & Pedagogy Hub</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2E2823] tracking-tight font-display">
            Curriculum vs Industry Gap Matrix
          </h1>
          <p className="text-xs sm:text-sm text-[#7E7367] mt-1 max-w-xl">
            California Institute of Advanced Tech • Department of Computer Science & Artificial Intelligence
          </p>
        </div>

        <button
          onClick={() => onNavigate('dashboard')}
          className="px-5 py-3 rounded-xl font-bold text-xs bg-[#D96B50] hover:bg-[#C65236] text-white shadow-xs transition-all flex items-center space-x-2"
        >
          <span>Preview Student View</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 2. SUMMARY TILES */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white border border-[#EAE3D9] rounded-2xl p-5 shadow-2xs">
          <span className="text-xs font-bold text-[#7E7367]">Assessed Cohort Size</span>
          <div className="text-3xl font-extrabold text-[#2E2823] font-display mt-1">545 Students</div>
          <div className="text-[11px] text-[#5B7B64] font-semibold mt-1">CS & AI Specializations</div>
        </div>

        <div className="bg-white border border-[#EAE3D9] rounded-2xl p-5 shadow-2xs">
          <span className="text-xs font-bold text-[#7E7367]">Identified Syllabus Deficits</span>
          <div className="text-3xl font-extrabold text-[#D96B50] font-display mt-1">2 Key Modules</div>
          <div className="text-[11px] text-[#7E7367] mt-1">ML Ops & Cloud Deployment Labs</div>
        </div>

        <div className="bg-white border border-[#EAE3D9] rounded-2xl p-5 shadow-2xs">
          <span className="text-xs font-bold text-[#7E7367]">Industry Partner Alignment</span>
          <div className="text-3xl font-extrabold text-[#5B7B64] font-display mt-1">89% Sync</div>
          <div className="text-[11px] text-[#5B7B64] font-semibold mt-1">NVIDIA & AWS Certified Syllabus</div>
        </div>
      </div>

      {/* 3. DETAILED CURRICULUM GAP ANALYSIS */}
      <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#F4EFEA]">
          <div>
            <h3 className="text-lg font-bold text-[#2E2823]">Course Syllabus vs Industry Requirements</h3>
            <p className="text-xs text-[#7E7367]">
              AI analysis comparing university course exam topics against real tech recruiter job specs
            </p>
          </div>
          <span className="text-xs font-bold text-[#5B7B64] bg-[#EAF1EB] px-3 py-1 rounded-lg border border-[#B2CDBD] flex items-center gap-1.5">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Updated Semester II, 2026</span>
          </span>
        </div>

        <div className="space-y-4">
          {cohortGaps.map((item, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D9] space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs font-bold text-[#4A2E4B] bg-white px-2 py-0.5 rounded border border-[#EAE3D9]">
                      {item.courseCode}
                    </span>
                    <h4 className="text-base font-bold text-[#2E2823]">{item.courseName}</h4>
                  </div>
                  <div className="text-xs text-[#7E7367] mt-0.5">
                    {item.enrolledStudents} Students Enrolled • Core Mandatory Module
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-[10px] text-[#7E7367] uppercase font-bold">Industry Gap</div>
                    <div className="text-xl font-bold text-[#D96B50] font-mono">{item.gapDelta}%</div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FBEAE4] text-[#8A3421] border border-[#F7D3C6]">
                    {item.severity}
                  </span>
                </div>
              </div>

              {/* Comparison dual metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
                <div className="bg-white p-3 rounded-xl border border-[#EAE3D9]">
                  <div className="flex justify-between mb-1">
                    <span className="text-[#7E7367]">Classroom Theory Depth:</span>
                    <span className="font-bold text-[#5B7B64] font-mono">{item.curriculumTheoryScore}%</span>
                  </div>
                  <div className="w-full bg-[#F4EFEA] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#5B7B64] h-full rounded-full" style={{ width: `${item.curriculumTheoryScore}%` }} />
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#EAE3D9]">
                  <div className="flex justify-between mb-1">
                    <span className="text-[#7E7367]">Industry Hands-on Alignment:</span>
                    <span className="font-bold text-[#D96B50] font-mono">{item.industryHandsOnScore}%</span>
                  </div>
                  <div className="w-full bg-[#F4EFEA] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#D96B50] h-full rounded-full" style={{ width: `${item.industryHandsOnScore}%` }} />
                  </div>
                </div>
              </div>

              {/* AI Recommended syllabus adjustment */}
              <div className="p-3.5 rounded-xl bg-white border border-[#DEC8E2] text-xs text-[#574D43] flex items-start space-x-2.5">
                <Sparkles className="w-4 h-4 text-[#4A2E4B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#4A2E4B]">AI Syllabus Fix: </strong>
                  <span>{item.aiFix}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
