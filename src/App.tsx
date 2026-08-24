import React, { useState } from 'react';
import { PageView, UserRole, CareerTrack, SkillScore, Opportunity, StudentApplication, DigitalPortfolio, LearningProgram } from './types';
import { 
  CAREER_TRACKS, 
  INITIAL_SKILLS_DATA, 
  ASSESSMENT_QUESTIONS, 
  MOCK_OPPORTUNITIES, 
  INITIAL_APPLICATIONS, 
  INITIAL_STUDENT_PROFILE,
  MOCK_LEARNING_PROGRAMS
} from './data/mockData';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { LoginPage } from './pages/LoginPage';
import { LandingPage } from './pages/LandingPage';
import { RoleSelectionPage } from './pages/RoleSelectionPage';
import { StudentDashboard } from './pages/StudentDashboard';
import { SkillAssessmentPage } from './pages/SkillAssessmentPage';
import { SkillMappingPage } from './pages/SkillMappingPage';
import { ExploreOpportunitiesPage } from './pages/ExploreOpportunitiesPage';
import { LearningProgramsPage } from './pages/LearningProgramsPage';
import { ApplicationsTrackerPage } from './pages/ApplicationsTrackerPage';
import { DigitalPortfolioPage } from './pages/DigitalPortfolioPage';
import { IndustryPortalPage } from './pages/IndustryPortalPage';
import { AcademicianPortalPage } from './pages/AcademicianPortalPage';

export function App() {
  // Navigation & Auth State
  const [currentPage, setCurrentPage] = useState<PageView>('dashboard');
  const [currentRole, setCurrentRole] = useState<UserRole>('student');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [studentName, setStudentName] = useState('Alex Chen');

  // Career Track & Data State
  const [careerTracks] = useState<CareerTrack[]>(CAREER_TRACKS);
  const [selectedTrack, setSelectedTrack] = useState<CareerTrack>(CAREER_TRACKS[0]);
  const [skillsData, setSkillsData] = useState<SkillScore[]>(INITIAL_SKILLS_DATA);
  const [learningPrograms, setLearningPrograms] = useState<LearningProgram[]>(MOCK_LEARNING_PROGRAMS);
  const [opportunities, setOpportunities] = useState<Opportunity[]>(MOCK_OPPORTUNITIES);
  const [applications, setApplications] = useState<StudentApplication[]>(INITIAL_APPLICATIONS);
  const [studentProfile, setStudentProfile] = useState<DigitalPortfolio>(INITIAL_STUDENT_PROFILE);

  // Toast Notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRoleSelect = (role: UserRole, targetPage: PageView) => {
    setCurrentRole(role);
    setCurrentPage(targetPage);
    showToast(`Switched perspective to ${role.toUpperCase()} mode`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = (userName: string, email: string) => {
    setIsLoggedIn(true);
    setStudentName(userName);
    setStudentProfile(prev => ({ ...prev, studentName: userName }));
    showToast(`Welcome back, ${userName}! Logged in successfully.`);
    handleNavigate('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    showToast('Signed out of Student Portal');
    handleNavigate('login');
  };

  const handleTrackChange = (trackId: string) => {
    const found = careerTracks.find(t => t.id === trackId);
    if (found) {
      setSelectedTrack(found);
      showToast(`Target Career switched to: ${found.title}`);
    }
  };

  const handleCompleteAssessment = (newSkills: SkillScore[], calculatedScore: number) => {
    setSelectedTrack(prev => ({
      ...prev,
      industryReadinessScore: calculatedScore
    }));
    setStudentProfile(prev => ({
      ...prev,
      readinessScore: calculatedScore
    }));
    showToast(`Assessment Completed! New Readiness Score: ${calculatedScore}%`);
  };

  const handleEnrollProgram = (prog: LearningProgram) => {
    setLearningPrograms(prev => 
      prev.map(p => p.id === prog.id ? { ...p, isEnrolled: true } : p)
    );
    showToast(`Enrolled in "${prog.title}"! Course materials added.`);
  };

  const handleApplyOpportunity = (opp: Opportunity) => {
    const existing = applications.find(a => a.opportunityId === opp.id);
    if (existing) {
      showToast(`You have already applied for ${opp.role} at ${opp.company}`);
      return;
    }

    const newApp: StudentApplication = {
      id: `app-${Date.now()}`,
      opportunityId: opp.id,
      company: opp.company,
      companyLogo: opp.companyLogo,
      role: opp.role,
      location: opp.location,
      appliedDate: 'Today',
      status: 'applied',
      matchScoreAtApply: opp.matchScore,
      nextStepNote: 'AI is verifying your profile credentials before sending to recruiter.'
    };

    setApplications(prev => [newApp, ...prev]);
    setOpportunities(prev => 
      prev.map(o => o.id === opp.id ? { ...o, appliedStatus: 'applied' } : o)
    );
    showToast(`Application submitted to ${opp.company} (${opp.matchScore}% Match)!`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2E2823] selection:bg-[#E07A5F] selection:text-white relative">
      
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        currentRole={currentRole}
        onRoleChange={(r) => handleRoleSelect(r, r === 'student' ? 'dashboard' : r === 'industry' ? 'industry-portal' : 'academic-portal')}
        applicationsCount={applications.length}
        isLoggedIn={isLoggedIn}
        studentName={studentName}
        onLogout={handleLogout}
      />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 animate-in slide-in-from-top-4 duration-300">
          <div className="bg-[#4A2E4B] border border-[#6B466E] shadow-xl text-white text-xs font-bold px-4 py-3 rounded-2xl flex items-center space-x-2.5">
            <span className="w-2 h-2 rounded-full bg-[#D96B50] animate-pulse"></span>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Main View Router */}
      <main className="flex-1">
        {currentPage === 'login' && (
          <LoginPage
            onLoginSuccess={handleLoginSuccess}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'landing' && (
          <LandingPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'role-select' && (
          <RoleSelectionPage onSelectRole={handleRoleSelect} />
        )}

        {currentPage === 'dashboard' && (
          <StudentDashboard
            onNavigate={handleNavigate}
            selectedTrack={selectedTrack}
            careerTracks={careerTracks}
            onTrackChange={handleTrackChange}
            skillsData={skillsData}
            opportunities={opportunities}
            applications={applications}
            learningPrograms={learningPrograms}
            onApplyOpportunity={handleApplyOpportunity}
          />
        )}

        {currentPage === 'assessment' && (
          <SkillAssessmentPage
            onNavigate={handleNavigate}
            questions={ASSESSMENT_QUESTIONS}
            onCompleteAssessment={handleCompleteAssessment}
          />
        )}

        {currentPage === 'skill-mapping' && (
          <SkillMappingPage
            onNavigate={handleNavigate}
            selectedTrack={selectedTrack}
            careerTracks={careerTracks}
            onTrackChange={handleTrackChange}
            skillsData={skillsData}
          />
        )}

        {currentPage === 'opportunities' && (
          <ExploreOpportunitiesPage
            onNavigate={handleNavigate}
            opportunities={opportunities}
            studentProfile={studentProfile}
            onApplyOpportunity={handleApplyOpportunity}
          />
        )}

        {currentPage === 'learning-programs' && (
          <LearningProgramsPage
            onNavigate={handleNavigate}
            programs={learningPrograms}
            onEnrollProgram={handleEnrollProgram}
          />
        )}

        {currentPage === 'applications' && (
          <ApplicationsTrackerPage
            onNavigate={handleNavigate}
            applications={applications}
          />
        )}

        {currentPage === 'portfolio' && (
          <DigitalPortfolioPage
            onNavigate={handleNavigate}
            profile={studentProfile}
          />
        )}

        {currentPage === 'industry-portal' && (
          <IndustryPortalPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'academic-portal' && (
          <AcademicianPortalPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}

export default App;
