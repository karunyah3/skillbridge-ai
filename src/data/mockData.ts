import { 
  CareerTrack, 
  SkillScore, 
  AssessmentQuestion, 
  LearningStep, 
  LearningProgram,
  Opportunity, 
  DigitalPortfolio,
  StudentApplication
} from '../types';

export const INITIAL_STUDENT_PROFILE: DigitalPortfolio = {
  studentName: "Alex Chen",
  headline: "Computer Science & AI Undergrad | Aspiring AI/ML Engineer",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
  location: "San Francisco, CA (Open to Remote & Hybrid)",
  university: "California Institute of Advanced Technology",
  degree: "B.Tech in Computer Science & Engineering (AI Specialization)",
  graduationYear: "Class of 2026",
  cgpa: "3.84 / 4.0",
  bio: "CS Junior passionate about algorithmic optimization, Python systems, and neural network foundations. Seeking Summer 2026 AI/ML or Software Engineering internships to bridge academic concepts into production software.",
  completionScore: 85,
  readinessScore: 68,
  targetRole: "AI/ML Engineer",
  verifiedBadges: [
    {
      id: "b1",
      name: "Verified Python Advanced Core",
      issuer: "BRAIDLY Academia Alliance",
      date: "Nov 2025",
      badgeType: "Platinum",
      verifiedHash: "0x89f4b...c312",
      icon: "Code2"
    },
    {
      id: "b2",
      name: "Algorithmic Problem Solving L3",
      issuer: "CodeRank Industry Guild",
      date: "Jan 2026",
      badgeType: "Gold",
      verifiedHash: "0x44a1e...909e",
      icon: "Cpu"
    },
    {
      id: "b3",
      name: "Relational Database Master",
      issuer: "CIAT University Assessment",
      date: "Dec 2025",
      badgeType: "Gold",
      verifiedHash: "0x12d8a...b771",
      icon: "Database"
    }
  ],
  projects: [
    {
      id: "p1",
      title: "NeuroFlow: Real-time Audio Stream Classifier",
      description: "Architected a low-latency neural acoustic classifier using PyTorch & FastAPI, processing streaming sensor audio with 94.2% accuracy under 45ms latency.",
      skills: ["Python", "PyTorch", "FastAPI", "Docker", "Signal Processing"],
      githubUrl: "https://github.com/alexchen/neuroflow-ai",
      liveUrl: "https://neuroflow-demo.vercel.app",
      stars: 124,
      featured: true,
      metrics: "Processes 1,200 req/sec with sub-50ms p99 latency"
    },
    {
      id: "p2",
      title: "Distributed Task Scheduler in Java",
      description: "Engineered a fault-tolerant multi-threaded job scheduler leveraging Java Concurrency and Raft consensus simulation to handle distributed worker node failures.",
      skills: ["Java", "Multithreading", "Distributed Systems", "SQL"],
      githubUrl: "https://github.com/alexchen/java-distributed-scheduler",
      stars: 88,
      featured: true,
      metrics: "Zero job loss across 10,000 simulated cluster partitions"
    },
    {
      id: "p3",
      title: "QuerySense: Natural Language to SQL Engine",
      description: "Built an intelligent SQL query generator converting unstructured natural queries to optimized PostgreSQL with schema validation and syntax linting.",
      skills: ["Python", "SQL", "Transformers", "Streamlit", "PostgreSQL"],
      githubUrl: "https://github.com/alexchen/querysense-ai",
      liveUrl: "https://querysense.dev",
      stars: 215,
      featured: false,
      metrics: "91% executable valid SQL syntax on Spider Benchmark"
    }
  ],
  certifications: [
    {
      id: "c1",
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI & Coursera",
      credentialId: "DL-AI-883921",
      issueDate: "Jan 2026",
      verifyUrl: "https://coursera.org/verify/DL-AI-883921",
      skills: ["Neural Networks", "Backprop", "CNNs", "Optimization"]
    },
    {
      id: "c2",
      title: "AWS Certified Cloud Practitioner (In-Progress)",
      issuer: "Amazon Web Services",
      credentialId: "AWS-CCP-TARGET-FEB",
      issueDate: "Expected March 2026",
      verifyUrl: "https://aws.amazon.com/verification",
      skills: ["Cloud Architecture", "EC2", "S3", "IAM"]
    }
  ],
  achievements: [
    {
      title: "1st Place Winner - AI Innovation Track",
      event: "CalHacks Global Hackathon 2025",
      year: "2025",
      position: "1st of 180 Teams",
      description: "Built an AI-assisted accessibility tool for visually impaired programmers."
    },
    {
      title: "Dean's Academic Honors List",
      event: "CIAT School of Engineering",
      year: "2024 & 2025",
      position: "Top 5% Class Rank",
      description: "Maintained 3.8+ GPA across advanced algorithms and systems coursework."
    }
  ],
  experience: [
    {
      role: "Undergraduate AI Research Assistant",
      company: "CIAT Computational Intelligence Lab",
      period: "Jun 2025 - Present",
      type: "Academic Research",
      description: [
        "Collaborating with faculty on parameter-efficient fine-tuning (PEFT) for small language models.",
        "Authored PyTorch benchmarking pipelines reducing training checkpoint sync time by 34%."
      ]
    },
    {
      role: "Software Engineering Peer Tutor",
      company: "CIAT Department of Computer Science",
      period: "Sep 2024 - May 2025",
      type: "University Fellowship",
      description: [
        "Mentored 60+ sophomore students in Data Structures, Java OOP design patterns, and debugging strategies."
      ]
    }
  ]
};

export const CAREER_TRACKS: CareerTrack[] = [
  {
    id: "ai-ml-engineer",
    title: "AI/ML Engineer",
    description: "Train, evaluate, deploy, and scale machine learning models, neural pipelines, and generative AI systems into production.",
    industryReadinessScore: 68,
    marketDemand: "Very High",
    avgSalary: "$135,000 / yr",
    openingsCount: 1420,
    topCompanies: ["NVIDIA", "Google DeepMind", "OpenAI", "Meta", "Scale AI", "Databricks"],
    requiredSkills: [
      { skillName: "Python", targetScore: 75, importance: "Critical" },
      { skillName: "Machine Learning", targetScore: 80, importance: "Critical" },
      { skillName: "Data Structures & Algorithms", targetScore: 75, importance: "Critical" },
      { skillName: "Cloud Computing", targetScore: 70, importance: "Recommended" },
      { skillName: "SQL & Data Pipelines", targetScore: 70, importance: "Recommended" }
    ]
  },
  {
    id: "full-stack-engineer",
    title: "Software Engineer / Full Stack",
    description: "Design end-to-end scalable web systems, REST/GraphQL APIs, distributed services, and modern responsive interfaces.",
    industryReadinessScore: 86,
    marketDemand: "Very High",
    avgSalary: "$125,000 / yr",
    openingsCount: 2850,
    topCompanies: ["Stripe", "Vercel", "Airbnb", "Microsoft", "Shopify"],
    requiredSkills: [
      { skillName: "Java", targetScore: 75, importance: "Critical" },
      { skillName: "Python", targetScore: 75, importance: "Recommended" },
      { skillName: "SQL & Data Pipelines", targetScore: 70, importance: "Critical" },
      { skillName: "Data Structures & Algorithms", targetScore: 75, importance: "Critical" },
      { skillName: "Cloud Computing", targetScore: 70, importance: "Recommended" }
    ]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Transform big data into statistical insights, predictive forecasting models, and high-impact business algorithms.",
    industryReadinessScore: 72,
    marketDemand: "High",
    avgSalary: "$128,000 / yr",
    openingsCount: 1100,
    topCompanies: ["Netflix", "Spotify", "Amazon", "JPMorgan Chase", "Uber"],
    requiredSkills: [
      { skillName: "Python", targetScore: 85, importance: "Critical" },
      { skillName: "SQL & Data Pipelines", targetScore: 80, importance: "Critical" },
      { skillName: "Machine Learning", targetScore: 75, importance: "Critical" },
      { skillName: "Data Structures & Algorithms", targetScore: 65, importance: "Recommended" }
    ]
  }
];

export const INITIAL_SKILLS_DATA: SkillScore[] = [
  {
    id: "s1",
    name: "Python",
    category: "Technical",
    studentScore: 80,
    industryBenchmark: 75,
    level: "Advanced",
    iconName: "Terminal",
    description: "Data handling, NumPy/Pandas vectorization, async coroutines, and modular API design.",
    status: "Strong",
    gapImpact: "Low",
    learningHoursToBridge: 0
  },
  {
    id: "s2",
    name: "Java",
    category: "Technical",
    studentScore: 85,
    industryBenchmark: 75,
    level: "Advanced",
    iconName: "Code2",
    description: "OOP architecture, concurrency, multithreading, memory management, and Spring Boot patterns.",
    status: "Strong",
    gapImpact: "Low",
    learningHoursToBridge: 0
  },
  {
    id: "s3",
    name: "SQL & Databases",
    category: "Technical",
    studentScore: 70,
    industryBenchmark: 70,
    level: "Intermediate",
    iconName: "Database",
    description: "Relational schema modeling, window functions, indexing, and query optimization.",
    status: "Strong",
    gapImpact: "Low",
    learningHoursToBridge: 0
  },
  {
    id: "s4",
    name: "Data Structures & Algorithms",
    category: "Technical",
    studentScore: 55,
    industryBenchmark: 75,
    level: "Intermediate",
    iconName: "Binary",
    description: "Graph traversals, Dynamic Programming, Tree structures, amortized time/space complexity.",
    status: "Improve",
    gapImpact: "Medium",
    learningHoursToBridge: 18
  },
  {
    id: "s5",
    name: "Machine Learning",
    category: "Technical",
    studentScore: 30,
    industryBenchmark: 80,
    level: "Beginner",
    iconName: "Cpu",
    description: "Supervised/unsupervised models, gradient descent, loss functions, Scikit-learn pipelines.",
    status: "Skill Gap",
    gapImpact: "High",
    learningHoursToBridge: 35
  },
  {
    id: "s6",
    name: "Cloud Computing",
    category: "Technical",
    studentScore: 25,
    industryBenchmark: 70,
    level: "Beginner",
    iconName: "Cloud",
    description: "AWS/GCP foundational services, Docker containers, IAM policies, and cloud deployments.",
    status: "Skill Gap",
    gapImpact: "High",
    learningHoursToBridge: 25
  },
  {
    id: "s7",
    name: "Problem Solving",
    category: "Soft",
    studentScore: 80,
    industryBenchmark: 75,
    level: "Advanced",
    iconName: "Zap",
    description: "Structured root cause analysis, edge case decomposition, and troubleshooting.",
    status: "Strong",
    gapImpact: "Low",
    learningHoursToBridge: 0
  },
  {
    id: "s8",
    name: "Communication & Teamwork",
    category: "Soft",
    studentScore: 85,
    industryBenchmark: 75,
    level: "Advanced",
    iconName: "Users",
    description: "Technical writing, cross-functional collaboration, design doc synthesis, and agile syncs.",
    status: "Strong",
    gapImpact: "Low",
    learningHoursToBridge: 0
  }
];

export const RECOMMENDED_CAREER_ROLES = [
  { role: "Software Engineer", matchScore: 86, tag: "Best Immediate Fit", desc: "Your high Java (85%) & Python (80%) scores exceed entry requirements." },
  { role: "AI/ML Engineer", matchScore: 78, tag: "High Potential Track", desc: "Solid programming base; bridging ML fundamentals elevates this to 92%." },
  { role: "Data Scientist", matchScore: 72, tag: "Strong Alignment", desc: "Python and SQL foundation ready; requires statistical modeling practice." }
];

export const RECOMMENDED_INDUSTRIES = [
  { name: "AI & SaaS", growth: "+34% YoY", match: "High", icon: "Sparkles" },
  { name: "FinTech", growth: "+28% YoY", match: "High", icon: "DollarSign" },
  { name: "HealthTech AI", growth: "+22% YoY", match: "Medium", icon: "HeartPulse" },
  { name: "Cloud & Developer Tooling", growth: "+31% YoY", match: "High", icon: "Cloud" }
];

export const RECOMMENDED_PROGRAMS_SUMMARY = [
  { title: "Machine Learning Fundamentals & PyTorch", provider: "DeepLearning.AI", duration: "3 Weeks", boost: "+14% Readiness" },
  { title: "Cloud Computing & Docker Essentials", provider: "AWS Educate", duration: "2 Weeks", boost: "+9% Readiness" },
  { title: "Advanced DSA Masterclass", provider: "Stanford Online", duration: "2 Weeks", boost: "+7% Readiness" }
];

export const MOCK_LEARNING_PROGRAMS: LearningProgram[] = [
  {
    id: "prog-1",
    provider: "DeepLearning.AI",
    providerLogo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
    title: "Machine Learning Fundamentals & Math",
    type: "Course",
    domain: "AI/ML",
    duration: "3 Weeks (25 hrs)",
    skillsGained: ["Supervised Learning", "Gradient Descent", "Scikit-Learn Pipelines", "Feature Engineering"],
    certificationAvailable: true,
    rating: 4.9,
    enrolledCount: "12,400+ students",
    isRecommended: true,
    description: "Bridge the gap from theoretical calculus to Scikit-Learn & PyTorch implementations with hands-on lab notebooks.",
    level: "Intermediate",
    cost: "Free with Student ID"
  },
  {
    id: "prog-2",
    provider: "AWS Educate & Amazon",
    providerLogo: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=100&auto=format&fit=crop&q=80",
    title: "Cloud Architecture & Docker Containers",
    type: "Industry Training",
    domain: "Cloud",
    duration: "2 Weeks (18 hrs)",
    skillsGained: ["AWS IAM & Security", "Amazon EC2 / ECS", "Docker Containers", "GitHub Actions CI/CD"],
    certificationAvailable: true,
    rating: 4.8,
    enrolledCount: "8,900+ students",
    isRecommended: true,
    description: "Hands-on cloud engineering labs covering container packaging, serverless deployment, and AWS infrastructure management.",
    level: "Beginner",
    cost: "Sponsored / Free"
  },
  {
    id: "prog-3",
    provider: "NVIDIA Deep Learning Institute",
    providerLogo: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=100&auto=format&fit=crop&q=80",
    title: "Accelerated PyTorch Neural Networks",
    type: "Workshop",
    domain: "AI/ML",
    duration: "4 Weeks (30 hrs)",
    skillsGained: ["PyTorch Tensor Tensors", "CUDA GPU Acceleration", "CNN & Transformer Architectures"],
    certificationAvailable: true,
    rating: 4.9,
    enrolledCount: "6,200+ students",
    isRecommended: true,
    description: "Industry workshop by NVIDIA engineers teaching deep learning acceleration and real-time model profiling.",
    level: "Intermediate",
    cost: "Free Academic Voucher"
  },
  {
    id: "prog-4",
    provider: "Stanford Online & CodeRank",
    providerLogo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&auto=format&fit=crop&q=80",
    title: "Advanced Data Structures & Algorithms",
    type: "Course",
    domain: "Software",
    duration: "3 Weeks (20 hrs)",
    skillsGained: ["Dynamic Programming", "Graph Shortest Path", "Amortized Analysis", "System Design Patterns"],
    certificationAvailable: true,
    rating: 4.8,
    enrolledCount: "15,800+ students",
    isRecommended: true,
    description: "Master competitive problem-solving patterns required for top-tier software engineering interview loops.",
    level: "Intermediate",
    cost: "Free Access"
  },
  {
    id: "prog-5",
    provider: "Google Cloud & Cybersecurity Guild",
    providerLogo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=100&auto=format&fit=crop&q=80",
    title: "Zero Trust Security & Cloud Defense",
    type: "Certification",
    domain: "Cybersecurity",
    duration: "2 Weeks (15 hrs)",
    skillsGained: ["OAuth2 / JWT Security", "Vulnerability Scanning", "Network Encryption", "Threat Modeling"],
    certificationAvailable: true,
    rating: 4.7,
    enrolledCount: "4,300+ students",
    isRecommended: false,
    description: "Practical enterprise security fundamentals protecting web services and container clusters from modern attack vectors.",
    level: "Intermediate",
    cost: "Free Trial"
  },
  {
    id: "prog-6",
    provider: "Vercel & Next.js Academy",
    providerLogo: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=100&auto=format&fit=crop&q=80",
    title: "Full Stack Web & Edge APIs",
    type: "Mentorship",
    domain: "Web Development",
    duration: "3 Weeks (20 hrs)",
    skillsGained: ["TypeScript", "Next.js App Router", "Serverless Edge Functions", "Tailwind CSS"],
    certificationAvailable: true,
    rating: 4.9,
    enrolledCount: "9,100+ students",
    isRecommended: false,
    description: "Build modern, accessible, lightning-fast web applications with 1-on-1 industry mentor code reviews.",
    level: "Beginner",
    cost: "Free"
  }
];

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: "q1",
    category: "Technical",
    skill: "Python",
    type: "mcq",
    question: "What is the time complexity of searching an element in a Python dictionary (hash map) in average and worst cases?",
    codeSnippet: `user_lookup = {"user_1": "Alex", "user_2": "Sarah"}
# Target operation:
user = user_lookup.get("user_1")`,
    options: [
      { label: "Average O(1), Worst O(n)", value: "opt1", score: 100, explanation: "Hash lookups are O(1) on average, degrading to O(n) during catastrophic hash collisions." },
      { label: "Average O(log n), Worst O(n)", value: "opt2", score: 30 },
      { label: "Average O(n), Worst O(n^2)", value: "opt3", score: 0 },
      { label: "Always strictly O(1)", value: "opt4", score: 50 }
    ]
  },
  {
    id: "q2",
    category: "Technical",
    skill: "Machine Learning",
    type: "mcq",
    question: "In Machine Learning model training, what does High Variance (Overfitting) typically indicate, and how is it mitigated?",
    options: [
      { label: "Model performs well on training data but poorly on test data; fix with regularization & more training data", value: "opt1", score: 100, explanation: "Overfitting captures noise in the training set. L1/L2 regularization, dropout, or data augmentation resolve this." },
      { label: "Model is too simple and underfits both train and test sets; fix by removing features", value: "opt2", score: 15 },
      { label: "The learning rate is too high, causing gradient explosion", value: "opt3", score: 20 },
      { label: "The model is unbiased and ready for production deployment", value: "opt4", score: 0 }
    ]
  },
  {
    id: "q3",
    category: "Technical",
    skill: "SQL",
    type: "mcq",
    question: "Which SQL clause allows calculating a rolling 7-day average without collapsing rows into aggregated groups?",
    codeSnippet: `SELECT student_id, assessment_date, score,
       AVG(score) OVER(PARTITION BY student_id 
                       ORDER BY assessment_date 
                       ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)
FROM assessment_logs;`,
    options: [
      { label: "Window Function with OVER() & PARTITION BY", value: "opt1", score: 100, explanation: "Window functions calculate running metrics over a subset of rows without reducing row count." },
      { label: "GROUP BY with HAVING", value: "opt2", score: 25 },
      { label: "INNER JOIN on subquery", value: "opt3", score: 30 },
      { label: "CROSS APPLY with UNION ALL", value: "opt4", score: 10 }
    ]
  },
  {
    id: "q4",
    category: "Technical",
    skill: "Data Structures",
    type: "mcq",
    question: "You need to find the shortest path in an unweighted graph between two nodes. Which algorithm is most optimal?",
    options: [
      { label: "Breadth-First Search (BFS) - O(V + E)", value: "opt1", score: 100, explanation: "BFS explores level by level, guaranteeing the shortest path in unweighted graphs in O(V + E) time." },
      { label: "Depth-First Search (DFS) - O(V + E)", value: "opt2", score: 35 },
      { label: "Dijkstra's Algorithm with Min-Heap", value: "opt3", score: 60, explanation: "Dijkstra works but introduces unnecessary O(E log V) heap overhead for unweighted graphs." },
      { label: "Bellman-Ford Algorithm - O(VE)", value: "opt4", score: 20 }
    ]
  },
  {
    id: "q5",
    category: "Technical",
    skill: "Cloud Computing",
    type: "rating",
    question: "How confident are you in deploying a containerized application to AWS / GCP using Docker and CI/CD pipelines?",
    options: [
      { label: "1 - No hands-on experience yet", value: 1, score: 20 },
      { label: "2 - Basic understanding of Dockerfiles", value: 2, score: 40 },
      { label: "3 - Have built and run containers locally", value: 3, score: 65 },
      { label: "4 - Have deployed to AWS ECS / Cloud Run / EC2", value: 4, score: 85 },
      { label: "5 - Production experience with Terraform / K8s", value: 5, score: 100 }
    ]
  },
  {
    id: "q6",
    category: "Soft Skills",
    skill: "Communication",
    type: "rating",
    question: "How comfortably can you explain complex technical trade-offs (e.g. SQL vs NoSQL, Latency vs Accuracy) to non-technical stakeholders?",
    options: [
      { label: "1 - Struggle to avoid deep jargon", value: 1, score: 25 },
      { label: "2 - Can explain with basic analogies", value: 2, score: 50 },
      { label: "3 - Confident in 1-on-1 conversations", value: 3, score: 75 },
      { label: "4 - Experienced in presenting slide decks & demos", value: 4, score: 90 },
      { label: "5 - High impact communicator and tech writer", value: 5, score: 100 }
    ]
  },
  {
    id: "q7",
    category: "Career Goals",
    skill: "Target Specialization",
    type: "mcq",
    question: "What is your primary career trajectory for your upcoming internship or entry-level role?",
    options: [
      { label: "AI / Machine Learning Engineer (PyTorch, LLMs, Neural Nets)", value: "ai-ml-engineer", score: 100 },
      { label: "Full Stack Software Engineer (React, Java/Node, Cloud Systems)", value: "full-stack-engineer", score: 100 },
      { label: "Data Scientist / Analytics Specialist (Predictive Modeling, SQL)", value: "data-scientist", score: 100 }
    ]
  }
];

export const LEARNING_ROADMAP_STEPS: LearningStep[] = [
  {
    stepNumber: 1,
    title: "Advanced Python for Systems & AI",
    subtitle: "Master vectorization, memory-efficient generators, and async microservices",
    estimatedDuration: "2 Weeks (15 hrs)",
    status: "completed",
    progressPercent: 100,
    skillsGained: ["NumPy Vectorization", "Asyncio & FastAPIs", "Generators & Memory Profiling", "PyTest Suite"],
    projectDeliverable: "High-throughput asynchronous data ingestion pipeline capable of parsing 5,000 events/sec.",
    keyTopics: [
      "Memory footprint optimization with __slots__ and generators",
      "Asynchronous I/O concurrency with asyncio and uvloop",
      "Vectorized tensor computations with NumPy & PyTorch tensors",
      "Writing robust unit & integration tests with pytest-cov"
    ],
    resources: [
      {
        title: "Python 3 Deep Dive: Metaprogramming & Optimization",
        type: "Interactive Course",
        provider: "BRAIDLY Academy",
        duration: "8 hrs",
        url: "https://braidly.ai/learn/python-advanced",
        isFree: true,
        rating: 4.9
      }
    ]
  },
  {
    stepNumber: 2,
    title: "Machine Learning Fundamentals & Math",
    subtitle: "Bridge the gap from theoretical calculus to Scikit-Learn & PyTorch implementations",
    estimatedDuration: "3 Weeks (25 hrs)",
    status: "in-progress",
    progressPercent: 45,
    skillsGained: ["Supervised Learning", "Gradient Descent Math", "Feature Engineering", "Scikit-Learn Pipelines"],
    projectDeliverable: "Customer churn prediction & anomaly detection model with cross-validated hyperparameter tuning.",
    keyTopics: [
      "Cost function formulation and stochastic gradient descent (SGD)",
      "Decision Trees, Random Forests, and XGBoost gradient boosting",
      "Preventing data leakage with Scikit-Learn Pipeline & ColumnTransformer"
    ],
    resources: [
      {
        title: "Machine Learning Specialization by Andrew Ng",
        type: "Interactive Course",
        provider: "DeepLearning.AI & Stanford",
        duration: "18 hrs",
        url: "https://coursera.org/specializations/machine-learning-introduction",
        isFree: true,
        rating: 4.9
      }
    ]
  },
  {
    stepNumber: 3,
    title: "Build an End-to-End AI/ML Capstone Project",
    subtitle: "Develop a production-grade machine learning model with real-time inference API",
    estimatedDuration: "3 Weeks (30 hrs)",
    status: "upcoming",
    progressPercent: 0,
    skillsGained: ["PyTorch Model Architecture", "FastAPI Serving", "Docker Containerization", "Model Registry"],
    projectDeliverable: "Live web application featuring an AI multimodal classifier hosted with Docker.",
    keyTopics: [
      "Custom neural network architecture design in PyTorch",
      "Model quantization (INT8/FP16) for low-latency inference",
      "Packaging PyTorch models inside containerized Docker runtimes"
    ],
    resources: [
      {
        title: "Full Stack Deep Learning: Production AI Systems",
        type: "Interactive Course",
        provider: "UC Berkeley / FSDL",
        duration: "12 hrs",
        url: "https://fullstackdeeplearning.com",
        isFree: true,
        rating: 4.9
      }
    ]
  },
  {
    stepNumber: 4,
    title: "Cloud Fundamentals & Container Deployments",
    subtitle: "Deploy serverless endpoints, manage AWS S3/EC2, and build automated CI/CD",
    estimatedDuration: "2 Weeks (18 hrs)",
    status: "upcoming",
    progressPercent: 0,
    skillsGained: ["AWS IAM & Security", "Amazon EC2 / ECS Deployments", "Docker Compose", "GitHub Actions CI/CD"],
    projectDeliverable: "Automated deployment pipeline that runs automated lint tests and deploys API to cloud cluster.",
    keyTopics: [
      "Cloud storage architecture: S3 buckets, presigned URLs, lifecycle rules",
      "Virtual private clouds (VPC), security groups, and IAM least privilege",
      "Deploying containerized services on AWS App Runner / ECS Fargate"
    ],
    resources: [
      {
        title: "AWS Cloud Practitioner Essentials",
        type: "Interactive Course",
        provider: "AWS Skill Builder",
        duration: "6 hrs",
        url: "https://aws.amazon.com/training",
        isFree: true,
        rating: 4.8
      }
    ]
  },
  {
    stepNumber: 5,
    title: "Industry Certification & Verified Badge",
    subtitle: "Validate your skills with an industry-recognized assessment and blockchain badge",
    estimatedDuration: "1 Week (10 hrs)",
    status: "upcoming",
    progressPercent: 0,
    skillsGained: ["BRAIDLY Verified AI Practitioner", "AWS Certified Cloud Practitioner", "Resume Benchmark Score 90%+"],
    projectDeliverable: "Verified digital credential added to BRAIDLY portfolio and LinkedIn profile.",
    keyTopics: [
      "Timed proctored algorithmic & system design benchmark",
      "Live code review of Capstone GitHub repository by industry mentors"
    ],
    resources: [
      {
        title: "BRAIDLY Proctored Benchmark Exam",
        type: "Practice Lab",
        provider: "BRAIDLY Certification Council",
        duration: "2 hrs",
        url: "https://braidly.ai/certify",
        isFree: true,
        rating: 4.9
      }
    ]
  },
  {
    stepNumber: 6,
    title: "Apply for High-Match Opportunities",
    subtitle: "Direct 1-click applications to partnering tech companies with 85%+ match scores",
    estimatedDuration: "Ongoing",
    status: "upcoming",
    progressPercent: 0,
    skillsGained: ["Recruiter Fast-Track", "Technical Interview Prep", "Direct Hiring Pipeline"],
    projectDeliverable: "Submitted applications with customized AI portfolio matches to 5+ verified hiring partners.",
    keyTopics: [
      "Behavioral and System Design mock interviews",
      "Direct referral routing to partner hiring managers"
    ],
    resources: [
      {
        title: "AI & ML Technical Interview Handbooks",
        type: "Official Documentation",
        provider: "Tech Interview Guild",
        duration: "5 hrs",
        url: "https://braidly.ai/prep",
        isFree: true,
        rating: 4.9
      }
    ]
  }
];

export const MOCK_OPPORTUNITIES: Opportunity[] = [
  {
    id: "opp-1",
    company: "NeuroScale AI Labs",
    companyLogo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    role: "AI / Machine Learning Engineering Intern",
    department: "Applied AI Research",
    location: "San Francisco, CA",
    workType: "Hybrid",
    type: "Internship",
    domain: "AI/ML",
    stipend: "$52 / hr ($8,300 / mo)",
    duration: "Summer 2026 (12 Weeks)",
    matchScore: 87,
    matchedSkills: ["Python", "Java", "SQL", "Problem Solving"],
    missingSkills: ["Machine Learning", "Cloud Deployments"],
    aiInsight: "Your strong Python proficiency (80%) and algorithmic foundation make you a top 10% candidate for this research engineering role.",
    boostInsight: "Completing Machine Learning Fundamentals will boost your match score from 87% to 96%!",
    urgent: true,
    postedDate: "2 days ago",
    deadline: "March 15, 2026",
    description: "Join our perception team building transformer models for multi-sensor audio-visual streams. Collaborate with researchers to deploy real-time inference models.",
    responsibilities: [
      "Build and optimize data ingestion pipelines for large-scale multimodal datasets using Python & PyTorch.",
      "Profile and benchmark inference latency across GPU and CPU edge runtimes.",
      "Collaborate in bi-weekly sprint reviews and document model experiment metrics in MLflow."
    ],
    appliedStatus: "under_review"
  },
  {
    id: "opp-2",
    company: "Apex Financial Technologies",
    companyLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&auto=format&fit=crop&q=80",
    role: "Junior Quantitative Software Engineer",
    department: "High-Frequency Platform Systems",
    location: "New York, NY",
    workType: "Hybrid",
    type: "Full-time",
    domain: "Software Development",
    stipend: "$130,000 - $155,000 / yr + Bonus",
    duration: "Full-time Graduate Track",
    matchScore: 82,
    matchedSkills: ["Java", "SQL", "Python", "Data Structures & Algorithms"],
    missingSkills: ["Cloud Computing (AWS)", "Low-Latency C++"],
    aiInsight: "Your 85% score in Java OOP and concurrency aligns cleanly with their distributed transaction engine requirements.",
    boostInsight: "Adding an AWS Cloud Practitioner credential will push your match score to 91%.",
    urgent: false,
    postedDate: "5 days ago",
    deadline: "April 1, 2026",
    description: "Apex FinTech powers electronic order routing for institutional funds. We are hiring new graduates to build resilient matching engines.",
    responsibilities: [
      "Develop ultra-reliable Java services processing millions of market events per second.",
      "Write optimized SQL queries and analytics pipelines for historical transaction verification."
    ],
    appliedStatus: "shortlisted"
  },
  {
    id: "opp-3",
    company: "CloudVortex Systems",
    companyLogo: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=120&auto=format&fit=crop&q=80",
    role: "Full Stack Cloud Platform Intern",
    department: "Developer Tooling & Infrastructure",
    location: "Austin, TX",
    workType: "Remote",
    type: "Internship",
    domain: "Cloud",
    stipend: "$45 / hr ($7,200 / mo)",
    duration: "Summer 2026 (10 Weeks)",
    matchScore: 78,
    matchedSkills: ["Java", "Python", "SQL", "Communication & Teamwork"],
    missingSkills: ["Cloud Computing (AWS/Docker)", "Advanced DSA"],
    aiInsight: "Great match for full stack developer tooling. Your strong backend foundation will allow you to ramp up fast.",
    boostInsight: "Completing Cloud Fundamentals increases match score to 89%.",
    urgent: true,
    postedDate: "1 week ago",
    deadline: "March 20, 2026",
    description: "CloudVortex builds developer environments. Work alongside our core platform team to create web dashboards and microservice APIs.",
    responsibilities: [
      "Implement RESTful backend services in Java/Python and connect with modern frontend interfaces.",
      "Package microservices into Docker containers and configure automated test pipelines."
    ],
    appliedStatus: "not_applied"
  },
  {
    id: "opp-4",
    company: "Synthetix Data Intelligence",
    companyLogo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=120&auto=format&fit=crop&q=80",
    role: "Data Science & Analytics Intern",
    department: "Customer Intelligence",
    location: "Seattle, WA",
    workType: "Hybrid",
    type: "Internship",
    domain: "Data Science",
    stipend: "$48 / hr ($7,680 / mo)",
    duration: "Fall 2026 (12 Weeks)",
    matchScore: 75,
    matchedSkills: ["Python", "SQL", "Problem Solving", "Communication"],
    missingSkills: ["Machine Learning", "Cloud Computing"],
    aiInsight: "Your 80% Python and 70% SQL scores provide a solid foundation for statistical data exploration.",
    boostInsight: "Completing Scikit-Learn pipelines will increase your match score to 86%.",
    urgent: false,
    postedDate: "3 days ago",
    deadline: "April 15, 2026",
    description: "Extract and clean high-volume event datasets from data warehouses using advanced SQL and build predictive models in Python.",
    responsibilities: [
      "Extract and clean high-volume event datasets from data warehouses using advanced SQL.",
      "Build predictive customer churn and segmentation models in Python."
    ],
    appliedStatus: "not_applied"
  },
  {
    id: "opp-5",
    company: "CyberGuard BioTech",
    companyLogo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=120&auto=format&fit=crop&q=80",
    role: "Bioinformatics ML Software Engineer Co-op",
    department: "Genomic Computation",
    location: "Boston, MA",
    workType: "On-site",
    type: "Co-op",
    domain: "AI/ML",
    stipend: "$46 / hr ($7,360 / mo)",
    duration: "6 Months (Jul - Dec 2026)",
    matchScore: 71,
    matchedSkills: ["Python", "Java", "Data Structures", "Problem Solving"],
    missingSkills: ["Machine Learning Deep Models", "Cloud Computing"],
    aiInsight: "Your dual capability in high-speed Java algorithmic code and Python data scripts is well-suited for high-throughput genomic data pipelines.",
    boostInsight: "Taking our PyTorch capstone project adds 14% to your applicant competitiveness rating.",
    urgent: false,
    postedDate: "4 days ago",
    deadline: "May 1, 2026",
    description: "Accelerate cancer genomics research by building algorithmic pipelines that process billions of DNA sequence reads.",
    responsibilities: [
      "Develop parallel data processing modules in Java and Python for raw sequencing instrument feeds."
    ],
    appliedStatus: "not_applied"
  },
  {
    id: "opp-6",
    company: "SecureShield Networks",
    companyLogo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=120&auto=format&fit=crop&q=80",
    role: "Cloud Cybersecurity Intern",
    department: "Threat Detection Infrastructure",
    location: "San Jose, CA",
    workType: "Hybrid",
    type: "Internship",
    domain: "Cybersecurity",
    stipend: "$50 / hr ($8,000 / mo)",
    duration: "Summer 2026 (12 Weeks)",
    matchScore: 69,
    matchedSkills: ["Python", "SQL", "Problem Solving"],
    missingSkills: ["Cloud Security IAM", "Network Threat Modeling"],
    aiInsight: "Solid programming foundation. Taking Cloud Security basics will qualify you for the technical evaluation round.",
    boostInsight: "Completing Zero Trust Security program boosts match score to 84%.",
    urgent: true,
    postedDate: "Yesterday",
    deadline: "March 10, 2026",
    description: "Design automated security monitoring scripts and inspect network anomalies across multi-region cloud servers.",
    responsibilities: [
      "Develop Python automation scripts for log telemetry anomaly detection.",
      "Collaborate with security analysts to write incident response playbooks."
    ],
    appliedStatus: "not_applied"
  }
];

export const INITIAL_APPLICATIONS: StudentApplication[] = [
  {
    id: "app-101",
    opportunityId: "opp-1",
    company: "NeuroScale AI Labs",
    companyLogo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    role: "AI / Machine Learning Engineering Intern",
    location: "San Francisco, CA (Hybrid)",
    appliedDate: "Feb 21, 2026",
    status: "under_review",
    matchScoreAtApply: 87,
    nextStepNote: "Engineering hiring manager is currently reviewing your verified PyTorch and Python credentials."
  },
  {
    id: "app-102",
    opportunityId: "opp-2",
    company: "Apex Financial Technologies",
    companyLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&auto=format&fit=crop&q=80",
    role: "Junior Quantitative Software Engineer",
    location: "New York, NY (Hybrid)",
    appliedDate: "Feb 18, 2026",
    status: "interview",
    matchScoreAtApply: 82,
    nextStepNote: "Technical system design interview scheduled for March 2, 2026 at 2:00 PM EST."
  },
  {
    id: "app-103",
    opportunityId: "opp-3",
    company: "CloudVortex Systems",
    companyLogo: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=120&auto=format&fit=crop&q=80",
    role: "Full Stack Cloud Platform Intern",
    location: "Austin, TX (Remote)",
    appliedDate: "Feb 12, 2026",
    status: "shortlisted",
    matchScoreAtApply: 78,
    nextStepNote: "Passed automated skill audit. Recruiter screening call scheduled."
  }
];

export const INDUSTRY_STATS = {
  activeStudents: "45,200+",
  partnerCompanies: "380+",
  institutionsConnected: "120+",
  averageReadinessBoost: "+28%",
  averagePlacementMatchRate: "94.2%",
  topHiringSkills: ["Python", "Machine Learning", "Cloud / AWS", "Java Systems", "Full Stack TypeScript", "Data Pipelines"]
};
