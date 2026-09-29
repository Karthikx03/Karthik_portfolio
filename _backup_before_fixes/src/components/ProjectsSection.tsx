import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  subtitle: string;
  category: string;
  company: string;
  description: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'DRONE VISION RESEARCH',
    subtitle: 'Onboard Image Analysis & Cognitive Experiment Platform',
    category: 'EMBEDDED SYSTEMS / COMPUTER VISION',
    company: 'NATIONAL CENTRAL UNIVERSITY | RESEARCH ASSISTANT | 2026',
    description:
      'Built and flew an F450 quadcopter from scratch, integrating a Raspberry Pi for real-time onboard image analysis. Bridging hardware-software integration for a cognitive science experiment studying drone-skill acquisition across working-memory and motor-reaction-time profiles. Co-designed experiment using DJI SDK and Garmin toolchain.',
    tech: [
      'Raspberry Pi', 'OpenCV', 'Python', 'F450 Quadcopter',
      'DJI SDK', 'Garmin SDK', 'Flight Controller', 'Image Processing',
    ],
    metrics: [
      { label: 'PLATFORM', value: 'F450 Quadcopter' },
      { label: 'COMPUTE', value: 'Raspberry Pi' },
      { label: 'VISION', value: 'Real-Time OpenCV' },
      { label: 'EXPERIMENT', value: 'Cognitive Science' },
      { label: 'YEAR', value: '2026' },
    ],
  },
  {
    number: '02',
    title: 'ROBOTNURSEHELPER',
    subtitle: 'Social Robot for Patient Education in Taiwanese Hospitals',
    category: 'SOCIAL ROBOTICS / NLP / CLIENT-SERVER',
    company: 'CHANG GUNG UNIVERSITY | RESEARCHER | 2026',
    description:
      'Collaborating on an interactive desktop robot system aimed at easing the shortage of nurse educators in Taiwanese hospitals. Delivers pre- and post-surgical health education to cataract patients using Kebbi Air-S and Zenbo Junior II. Offloads computer-vision and NLP processing to a backend server via a client-server architecture; the robot handles real-time speech and patient interaction.',
    tech: [
      'Raspberry Pi', 'Android', 'Kebbi Air-S', 'Zenbo Junior II',
      'OpenCV', 'NLP', 'Client-Server Architecture', 'Python',
    ],
    metrics: [
      { label: 'DOMAIN', value: 'Hospital AI' },
      { label: 'ROBOTS', value: 'Kebbi / Zenbo' },
      { label: 'ARCHITECTURE', value: 'Client-Server' },
      { label: 'FOCUS', value: 'Patient Education' },
      { label: 'YEAR', value: '2026' },
    ],
  },
  {
    number: '03',
    title: 'IOT PATENT PROTOTYPE',
    subtitle: 'Multi-Sensor Vehicle Safety System with Predictive Accident Prevention',
    category: 'IOT / EMBEDDED AI / PATENT',
    company: 'CHANDIGARH UNIVERSITY | FILED NOV 2025 | INDIAN PATENTS ACT 1970',
    description:
      'Designed and built a multi-sensor IoT safety platform using NodeMCU ESP32 + Raspberry Pi 4. Integrated IR eye-tracking, alcohol, cardiac (PPG), MEMS collision, and flame sensors with a Bayesian fusion engine achieving 95% detection accuracy and 60% fewer false positives than single-modal systems. Implemented a 5-stage automated intervention protocol with dual-channel Wi-Fi + GSM emergency coordination and V2I communication.',
    tech: [
      'NodeMCU ESP32', 'Raspberry Pi 4', 'TensorFlow Lite', 'OpenCV',
      'C++', 'MEMS Sensors', 'PPG', 'Bayesian Fusion', 'Blynk IoT', 'GSM',
    ],
    metrics: [
      { label: 'DETECTION ACCURACY', value: '95%' },
      { label: 'FALSE POSITIVE REDUCTION', value: '60%' },
      { label: 'SAFETY STAGES', value: '5-Stage Protocol' },
      { label: 'COMMUNICATION', value: 'Wi-Fi + GSM' },
      { label: 'STATUS', value: 'Patent Filed' },
    ],
  },
  {
    number: '04',
    title: 'PHISHGUARD AI',
    subtitle: 'AI-Powered Phishing URL Detector with Real-Time Confidence Scoring',
    category: 'AI / ML / CYBERSECURITY',
    company: 'PERSONAL PROJECT | 2025',
    description:
      'AI phishing URL detector using a Random Forest + XGBoost ensemble with 30+ engineered features, achieving approximately 95% accuracy. Served through a Flask API with real-time confidence scoring. Designed for practical deployment in browser extensions and security tooling.',
    tech: [
      'Python', 'Scikit-Learn', 'XGBoost', 'Flask',
      'Random Forest', 'Feature Engineering', 'REST API',
    ],
    metrics: [
      { label: 'ACCURACY', value: '~95%' },
      { label: 'FEATURES', value: '30+ Engineered' },
      { label: 'ENSEMBLE', value: 'RF + XGBoost' },
      { label: 'SERVING', value: 'Flask API' },
      { label: 'YEAR', value: '2025' },
    ],
  },
  {
    number: '05',
    title: 'ML & AI COLLECTION',
    subtitle: 'Deep Learning, NLP, and Transformer Experiments',
    category: 'MACHINE LEARNING / DEEP LEARNING / NLP',
    company: 'PERSONAL RESEARCH | 2024–2025',
    description:
      'A curated collection of ML and AI experiments spanning CNN classification on CIFAR-10, RNN/LSTM sequence modeling, Transformer architectures, NLP pipelines, BERT fine-tuning, and spaCy-based text classification and Named Entity Recognition. Built to develop deep expertise across the full modern ML stack.',
    tech: [
      'Python', 'TensorFlow', 'PyTorch', 'Scikit-Learn',
      'HuggingFace', 'BERT', 'spaCy', 'LSTM', 'Transformers',
    ],
    metrics: [
      { label: 'SCOPE', value: 'CNN / RNN / NLP' },
      { label: 'FRAMEWORKS', value: 'TF + PyTorch' },
      { label: 'NLP', value: 'BERT + spaCy' },
      { label: 'DATASETS', value: 'CIFAR-10 +' },
      { label: 'DURATION', value: '2024–2025' },
    ],
  },
  {
    number: '06',
    title: 'SKILLQUEST',
    subtitle: 'Gamified Learning Platform for the Skills School Never Taught',
    category: 'FULL-STACK / EDTECH / GAMIFICATION',
    company: 'PERSONAL PROJECT | LIVE ON GITHUB PAGES',
    description:
      'A free, gamified learning platform offering 24 courses across 6 subjects — Financial Literacy, AI Fundamentals, Cybersecurity, Digital Skills, Career Readiness, and Entrepreneurship. Learners earn points, beat quizzes, climb a leaderboard, and unlock certificates. Backed by an Express + PostgreSQL API with JWT authentication and bcrypt password hashing.',
    tech: [
      'JavaScript', 'Node.js', 'Express', 'PostgreSQL',
      'JWT Auth', 'bcrypt', 'REST API', 'GitHub Pages',
    ],
    metrics: [
      { label: 'COURSES', value: '24 Free' },
      { label: 'SUBJECTS', value: '6 Tracks' },
      { label: 'GAMIFICATION', value: 'Points + Leaderboard' },
      { label: 'BACKEND', value: 'Express + Postgres' },
      { label: 'STATUS', value: 'Live' },
    ],
  },
  {
    number: '07',
    title: 'MANGSHI 盲食',
    subtitle: 'Surplus-Harvest Rescue Served as Blind Hakka Heritage Meals',
    category: 'FULL-STACK / SOCIAL IMPACT / SUPABASE',
    company: 'STUDENT-LED INITIATIVE | TAIWAN | 2026',
    description:
      'A student-led initiative rescuing surplus produce from Taiwanese farms and serving it as sealed, blind Hakka heritage meals. Pairs a Chinese-first marketing site with an operational system: farmers log surplus, campuses log preorders, and a deterministic matching engine turns supply and demand into a kitchen production plan with impact tracking. Took the project through a debugging and audit pass — fixing TypeScript errors, SSR hydration, the join form, and Cloudflare Worker deployment.',
    tech: [
      'React 19', 'TypeScript', 'TanStack Start', 'Supabase',
      'PostgreSQL + RLS', 'Tailwind CSS', 'Cloudflare Workers', 'SSR',
    ],
    metrics: [
      { label: 'DOMAIN', value: 'Food Rescue' },
      { label: 'ENGINE', value: 'Supply-Demand Matcher' },
      { label: 'DATABASE', value: 'Supabase + RLS' },
      { label: 'DEPLOY', value: 'Cloudflare Workers' },
      { label: 'YEAR', value: '2026' },
    ],
  },
];

// Shared card inner component
const ProjectCardContent: React.FC<{ project: Project }> = ({ project }) => (
  <div className="relative w-full rounded-2xl border border-[#8C6D4F]/60 bg-[#0C0A08] p-6 sm:p-8 lg:py-6 lg:px-8 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-all duration-500 hover:border-[#D4AF37]">

    {/* Top Gold Border Flare */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

    {/* Corner L-Brackets */}
    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

    {/* Background Watermark Number */}
    <span
      className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
    >
      {project.number}
    </span>

    {/* Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative z-10">

      {/* Left Column (7 Cols) */}
      <div className="lg:col-span-7 flex flex-col justify-between">
        <div>
          {/* Number + Category */}
          <div className="flex flex-col xs:flex-row xs:items-center xs:space-x-3 space-y-1 xs:space-y-0 mb-1.5">
            <span className="text-xs font-mono font-bold text-[#D4AF37]">
              {project.number} //
            </span>
            <span className="text-[10px] sm:text-[10.5px] font-mono tracking-[0.22em] sm:tracking-[0.25em] uppercase text-[#A8988B]">
              {project.category}
            </span>
          </div>

          {/* Company Badge */}
          <div className="mb-2">
            <span
              className="inline-block text-[8px] sm:text-[9px] font-medium tracking-[0.18em] sm:tracking-[0.2em] uppercase text-[#C99E5D] border border-[#C99E5D]/30 px-2 py-0.5 rounded-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {project.company}
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-normal tracking-tight text-white mb-0.5 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {project.title}
          </h3>
          <p
            className="text-xs sm:text-[13px] text-[#8C6D4F] mb-2.5 font-light italic"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {project.subtitle}
          </p>

          {/* Description */}
          <p
            className="text-xs sm:text-[13px] font-light text-[#BDB0A4] leading-[1.75] tracking-wide mb-4 max-w-2xl"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {project.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 border-t border-[#8C6D4F]/25">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[9.5px] font-medium tracking-[0.14em] sm:tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Right Column (5 Cols) */}
      <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-3 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25 pt-3 lg:pt-0 border-t border-[#8C6D4F]/20 lg:border-t-0">
        <div className="space-y-2">
          <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-1">
            // PROJECT DETAILS
          </span>
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="p-2 sm:p-2.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between gap-2"
            >
              <span className="text-[9px] sm:text-[9.5px] font-mono text-[#A8988B]">
                {m.label}
              </span>
              <span className="text-[9.5px] sm:text-[10.5px] font-mono font-medium text-[#F7E7C4] text-right">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Status Indicator */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 border border-[#8C6D4F]/30 bg-[#070605] rounded-sm mt-1">
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
            <span className="text-[9px] sm:text-[9.5px] font-mono tracking-[0.18em] sm:tracking-[0.2em] text-[#D4AF37] uppercase">
              ACTIVE
            </span>
          </div>
          <span className="text-[9px] sm:text-[9.5px] font-mono text-[#8C6D4F]">
            KARTHIKEYAN P
          </span>
        </div>
      </div>

    </div>
  </div>
);

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-0 px-4 sm:px-8 md:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-4"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED PROJECTS
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.8rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
              RESEARCH &amp; AI.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
              REAL IMPACT.
            </span>
          </h2>
          <p
            className="text-xs font-light text-[#A8988B] max-w-xs mt-3 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            From patented IoT safety systems to drone vision research and social robotics — building intelligent systems that work in the real world.
          </p>
        </motion.div>

        {/* DESKTOP (lg+): Precision Cinematic ScrollStack Deck */}
        <div className="hidden lg:block">
          <ScrollStack
            itemStackDistance={8}
            baseScale={0.96}
          >
            {projects.map((project) => (
              <ScrollStackItem key={project.title}>
                <ProjectCardContent project={project} />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        {/* MOBILE / TABLET (< lg): Clean Vertical List */}
        <div className="block lg:hidden space-y-6 pt-4 pb-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
            >
              <ProjectCardContent project={project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;