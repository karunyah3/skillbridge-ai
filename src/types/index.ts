export type UserRole = 'student' | 'industry' | 'academician' | 'institution';

export type PageView = 
  | 'login'
  | 'dashboard' 
  | 'assessment' 
  | 'skill-mapping' 
  | 'opportunities' 
  | 'learning-programs' 
  | 'applications' 
  | 'portfolio' 
  | 'landing' 
  | 'role-select' 
  | 'industry-portal' 
  | 'academic-portal';

export interface SkillScore {
  id: string;
  name: string;
  category: 'Technical' | 'Soft' | 'Domain';
  studentScore: number; // 0 - 100
  industryBenchmark: number; // 0 - 100
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Master';
  iconName: string;
  description: string;
  status: 'Strong' | 'Improve' | 'Skill Gap';
  gapImpact: 'High' | 'Medium' | 'Low';
  learningHoursToBridge: number;
}

export interface CareerTrack {
  id: string;
  title: string;
  description: string;
  industryReadinessScore: number;
  marketDemand: 'Very High' | 'High' | 'Moderate';
  avgSalary: string;
  openingsCount: number;
  topCompanies: string[];
  requiredSkills: {
    skillName: string;
    targetScore: number;
    importance: 'Critical' | 'Recommended' | 'Bonus';
  }[];
}

export interface AssessmentQuestion {
  id: string;
  category: 'Technical' | 'Soft Skills' | 'Career Goals';
  skill: string;
  type: 'mcq' | 'rating' | 'multi-select';
  question: string;
  codeSnippet?: string;
  options: {
    label: string;
    value: string | number;
    score: number;
    explanation?: string;
  }[];
}

export interface LearningProgram {
  id: string;
  provider: string;
  providerLogo: string;
  title: string;
  type: 'Course' | 'Certification' | 'Workshop' | 'Mentorship' | 'Industry Training';
  domain: 'AI/ML' | 'Cloud' | 'Data' | 'Software' | 'Cybersecurity' | 'Web Development';
  duration: string;
  skillsGained: string[];
  certificationAvailable: boolean;
  rating: number;
  enrolledCount: string;
  isRecommended: boolean;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  cost: string;
  isEnrolled?: boolean;
}

export interface ResourceLink {
  title: string;
  type: 'Interactive Course' | 'Hands-on Project' | 'Official Documentation' | 'Practice Lab';
  provider: string;
  duration: string;
  url: string;
  isFree: boolean;
  rating: number;
}

export interface LearningStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  estimatedDuration: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  progressPercent: number;
  skillsGained: string[];
  projectDeliverable: string;
  resources: ResourceLink[];
  keyTopics: string[];
}

export interface Opportunity {
  id: string;
  company: string;
  companyLogo: string;
  role: string;
  department: string;
  location: string;
  workType: 'Remote' | 'Hybrid' | 'On-site';
  type: 'Internship' | 'Full-time' | 'Co-op';
  domain: 'AI/ML' | 'Software Development' | 'Data Science' | 'Cybersecurity' | 'Cloud' | 'Web Development';
  stipend: string;
  duration: string;
  matchScore: number; // e.g. 87%
  matchedSkills: string[];
  missingSkills: string[];
  aiInsight: string;
  boostInsight: string;
  urgent: boolean;
  postedDate: string;
  deadline: string;
  description: string;
  responsibilities: string[];
  appliedStatus?: 'not_applied' | 'applied' | 'under_review' | 'shortlisted' | 'interview' | 'selected';
}

export interface VerifiedBadge {
  id: string;
  name: string;
  issuer: string;
  date: string;
  badgeType: 'Gold' | 'Silver' | 'Platinum';
  verifiedHash: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  skills: string[];
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
  featured: boolean;
  metrics: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  credentialId: string;
  issueDate: string;
  expiryDate?: string;
  verifyUrl: string;
  skills: string[];
}

export interface DigitalPortfolio {
  studentName: string;
  headline: string;
  avatarUrl: string;
  location: string;
  university: string;
  degree: string;
  graduationYear: string;
  cgpa: string;
  bio: string;
  completionScore: number;
  readinessScore: number;
  targetRole: string;
  verifiedBadges: VerifiedBadge[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  achievements: {
    title: string;
    event: string;
    year: string;
    position: string;
    description: string;
  }[];
  experience: {
    role: string;
    company: string;
    period: string;
    type: string;
    description: string[];
  }[];
}

export interface StudentApplication {
  id: string;
  opportunityId: string;
  company: string;
  companyLogo: string;
  role: string;
  location: string;
  appliedDate: string;
  status: 'applied' | 'under_review' | 'shortlisted' | 'interview' | 'selected';
  matchScoreAtApply: number;
  nextStepNote: string;
}
