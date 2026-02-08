export const siteConfig = {
  name: "Oluwadamifogore Daramola",
  title: "Oluwadamifogore Daramola — ML/AI Engineer",
  description:
    "ML Engineer building production AI agents for cybersecurity, fintech, and healthcare. Specializing in LLM alignment, multi-agent systems, and embedded AI.",
  url: "https://engineer-d.github.io",
  links: {
    github: "https://github.com/Engineer-D",
    linkedin: "https://linkedin.com/in/oluwadamifogore",
    email: "dami04glory@gmail.com",
    twitter: "https://twitter.com/oluwadamifogore",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  type: "Production" | "Research" | "Personal" | "Startup";
  year: string;
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "smartcomply-agents",
    title: "Production AI Agents — SmartComply",
    description:
      "Architected 6 production LLM-powered agents for cybersecurity compliance: code scanning, risk assessment, document review, questionnaire answering, customer support, and automated remediation.",
    tags: ["LLM", "Agents", "RAG", "Cybersecurity", "Production"],
    type: "Production",
    year: "2022–Present",
    featured: true,
  },
  {
    slug: "kiki-voice-agent",
    title: "Kiki — Multilingual Voice AI Agent",
    description:
      "Built a telephony-integrated voice AI health companion supporting 5 Nigerian languages (Yoruba, Igbo, Hausa, Pidgin, English) with real-time speech-to-text and mood prediction.",
    tags: ["Voice AI", "Multilingual", "NLP", "HealthTech", "Agents"],
    type: "Production",
    year: "2024–Present",
    featured: true,
  },
  {
    slug: "viro-sales-agent",
    title: "VIRO — Autonomous Sales Agent",
    description:
      "Developed a proactive AI sales agent capable of autonomous meeting attendance, real-time conversation handling, lead research, and post-meeting pipeline automation.",
    tags: ["Agents", "LLM", "Autonomous AI", "Sales"],
    type: "Research",
    year: "2024",
    featured: true,
  },
  {
    slug: "search-augmented-rl",
    title: "Search-Augmented RL for Legal Reasoning",
    description:
      "Research on interpretable legal reasoning using Search-Augmented Reinforcement Learning with DPO, GRPO, and PPO for LLM alignment in specialized domains.",
    tags: ["RL", "DPO", "GRPO", "PPO", "LLM Alignment", "Research"],
    type: "Research",
    year: "2024–Present",
    featured: true,
  },
  {
    slug: "teaching-assistant",
    title: "Teaching Assistant Agent",
    description:
      "Intelligent teaching assistant using SFT, RLHF, PEFT, QLoRA, and GRPO with adaptive questioning strategies and personalized feedback.",
    tags: ["SFT", "RLHF", "PEFT", "QLoRA", "GRPO", "Fine-tuning"],
    type: "Personal",
    year: "2024–Present",
  },
  {
    slug: "eusate",
    title: "Eusate — AI Customer Support Platform",
    description:
      "Founded an AI-first customer support platform for Africa using RAG architecture, reducing hallucinations by 78% with culturally-aware multilingual responses.",
    tags: ["RAG", "Startup", "NLP", "Multilingual", "LLM"],
    type: "Startup",
    year: "2024–Present",
  },
  {
    slug: "fraud-detection",
    title: "Real-Time Fraud Detection System",
    description:
      "Built transaction rule validation agent generating Python and SQL code during live processing with sub-2-second latency, plus supervised and unsupervised fraud models.",
    tags: ["Fraud Detection", "FinTech", "ML", "Real-time", "Production"],
    type: "Production",
    year: "2024–Present",
  },
  {
    slug: "farm-intrusion",
    title: "AI Farm Intrusion Detection",
    description:
      "Edge-deployed computer vision system using lightweight Faster R-CNN with MobileNet backbone, achieving 97-99% accuracy on ESP32 cameras and Raspberry Pi.",
    tags: ["Computer Vision", "Edge AI", "Embedded", "IoT"],
    type: "Research",
    year: "2022",
    github: "https://github.com/Engineer-D/AI-Farm-Alarm-system",
  },
  {
    slug: "blindhelp",
    title: "BlindHelp — Assistive AI System",
    description:
      "Embedded AI system for visually impaired individuals using real-time face detection, recognition, and audio feedback deployed on Raspberry Pi.",
    tags: ["Computer Vision", "Embedded", "Accessibility", "Edge AI"],
    type: "Personal",
    year: "2021",
    github:
      "https://github.com/Engineer-D/Facial-Recognition-and-Voice-naming-Deployed-on-Raspberry-Pi-4",
  },
  {
    slug: "code-copilot",
    title: "Code Copilot for Dart",
    description:
      "Fine-tuned LLM for specialized code assistance in the Dart programming language, demonstrating domain-specific model adaptation.",
    tags: ["LLM", "Fine-tuning", "Code Generation"],
    type: "Personal",
    year: "2023",
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Industry" | "Research" | "Startup";
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: "Founder",
    company: "Eusate",
    location: "Lagos, Nigeria",
    period: "2024 – Present",
    type: "Startup",
    highlights: [
      "Founded AI-powered customer support platform for Africa with multilingual, culturally-aware conversational AI",
      "Implemented RAG architecture reducing hallucinations by 78% using company-specific knowledge bases",
      "Built scalable infrastructure supporting thousands of concurrent conversations with sub-second latency",
      "Integrated sentiment analysis and emotional intelligence for empathetic responses",
    ],
  },
  {
    role: "ML Research Associate",
    company: "Meridus Research Lab",
    location: "Remote",
    period: "2024 – Present",
    type: "Research",
    highlights: [
      "Research on Interpretable Legal Reasoning with Search-Augmented Reinforcement Learning",
      "Implemented DPO, GRPO, and PPO for LLM alignment in specialized domains",
      "Developed VIRO — autonomous AI sales agent with real-time meeting participation and pipeline automation",
      "Applied PEFT/QLoRA for efficient model adaptation with limited compute",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "SmartComply (now Seequre)",
    location: "Lagos, Nigeria",
    period: "2022 – Present",
    type: "Industry",
    highlights: [
      "Architected 6 production LLM-powered agents for cybersecurity compliance platform",
      "Built Code Scanner Agent for automated vulnerability detection in code repositories",
      "Developed Document Review Agent verifying PCI DSS 4.0, NDPR, ISO, SOC standards",
      "Created multi-tool Cybersecurity Customer Support Agent with advanced dialogue management",
      "Engineered QA Agent with PII masking for privacy-preserving compliance assessments",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Adhere (by SmartComply)",
    location: "Lagos, Nigeria",
    period: "2024 – Present",
    type: "Industry",
    highlights: [
      "Built real-time fraud monitoring rule generation model with sub-2-second latency",
      "Developed transaction validation agent generating Python and SQL code during live processing",
      "Created advanced fraud detection models using supervised and unsupervised learning techniques",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Fertitude",
    location: "Lagos, Nigeria",
    period: "2024 – Present",
    type: "Industry",
    highlights: [
      "Developed Kiki — AI companion agent with multilingual voice support (Yoruba, Igbo, Hausa, Pidgin, English)",
      "Built telephony-integrated voice AI with real-time speech-to-text and text-to-speech pipelines",
      "Implemented cycle-based mood prediction and context-aware notification system",
      "Engineered content recommendation engine connecting users with health experts and communities",
    ],
  },
  {
    role: "Embedded AI Engineer",
    company: "Milsat Technologies",
    location: "Abuja, Nigeria",
    period: "2021 – 2024",
    type: "Industry",
    highlights: [
      "Developed AI-enabled security surveillance, energy monitoring, and health monitoring systems",
      "Built firmware using RTOS for IoT devices with real-time edge inference",
      "Programmed embedded systems using C++, MicroPython, and MQTT protocols",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Spydar Africa",
    location: "Lagos, Nigeria",
    period: "2019 – 2021",
    type: "Industry",
    highlights: [
      "Developed Face Mask Detector achieving 97% accuracy for COVID-19 compliance",
      "Created Social Distance Detector using computer vision and deep learning",
    ],
  },
];

export const talks = [
  {
    title: "Will AI Ever Truly Sound Human?",
    event: "DevFest Akure 2025",
    year: "2025",
  },
  {
    title: "AI for Customer Support",
    event: "DevFest Akure 2024",
    year: "2024",
  },
  {
    title: "Semantic Search as the Future of Information Retrieval",
    event: "DevFest Akure 2023",
    year: "2023",
  },
  {
    title: "Machine Learning on Edge Devices using Edge Impulse",
    event: "TME Education Day 2023",
    year: "2023",
  },
];

export const certifications = [
  {
    name: "AWS Machine Learning Foundations Nanodegree",
    issuer: "Amazon Web Services",
    year: "2022",
  },
  {
    name: "Advanced Machine Learning on Google Cloud",
    issuer: "Google Cloud",
    year: "2020",
  },
  {
    name: "Data Engineering, Big Data, and ML on GCP",
    issuer: "Google Cloud",
    year: "2020",
  },
];

export const skills = {
  "LLM & Generative AI": [
    "GPT-4",
    "Claude",
    "Llama 2/3",
    "Mistral",
    "RAG",
    "Prompt Engineering",
    "LangChain",
    "LlamaIndex",
  ],
  "Fine-tuning & Alignment": [
    "SFT",
    "PEFT",
    "LoRA",
    "QLoRA",
    "RLHF",
    "DPO",
    "GRPO",
    "PPO",
    "Constitutional AI",
  ],
  "ML/DL Frameworks": [
    "PyTorch",
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "HuggingFace Transformers",
  ],
  "Conversational AI": [
    "Dialogue Systems",
    "Multi-turn Context",
    "Intent Recognition",
    "Voice AI",
    "Speech-to-Text",
  ],
  "Vector DBs & Retrieval": [
    "Pinecone",
    "Weaviate",
    "ChromaDB",
    "FAISS",
    "Semantic Search",
  ],
  "Embedded & Edge AI": [
    "RTOS",
    "Arduino",
    "Raspberry Pi",
    "ESP32",
    "Edge Impulse",
    "C++",
    "MicroPython",
  ],
  "Tools & Infrastructure": [
    "Python",
    "Git",
    "Docker",
    "SQL",
    "MATLAB",
    "MLOps",
  ],
};
