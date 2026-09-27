import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

type ResearchItem = {
  name: string;
  issuer: string;
  issuerShort: string;
  validity: string;
  color: string;
  accent: string;
};

const researchItems: ResearchItem[] = [
  {
    name: 'Multi-Sensor IoT Vehicle Safety System with Predictive Accident Prevention',
    issuer: 'Indian Patents Act, 1970',
    issuerShort: 'PAT',
    validity: 'Filed November 2025 — Chandigarh University',
    color: '#D4AF37',
    accent: '#D4AF37',
  },
  {
    name: 'Intelligent Transportation Systems',
    issuer: 'Chandigarh University',
    issuerShort: 'PUB',
    validity: 'Published 2025',
    color: '#C99E5D',
    accent: '#C99E5D',
  },
  {
    name: 'Campus Ambassador — Google Gemini',
    issuer: 'Google',
    issuerShort: 'GOO',
    validity: 'July 2026 – Present',
    color: '#4285F4',
    accent: '#D4AF37',
  },
  {
    name: 'University-Level Hackathon Winner — AI & Web Development Track',
    issuer: 'Chandigarh University',
    issuerShort: 'CU',
    validity: '2024 – 2025',
    color: '#8C6D4F',
    accent: '#D4AF37',
  },
  {
    name: 'Semester Exchange — School of Engineering, CS & Information Engineering',
    issuer: 'National Central University, Taiwan',
    issuerShort: 'NCU',
    validity: 'CGPA: 4.22 / 4.3',
    color: '#6A8C6D',
    accent: '#8C6D4F',
  },
  {
    name: 'Summer Research Internship',
    issuer: 'IIT Guwahati',
    issuerShort: 'IIT',
    validity: 'July 2025 — Competitive Selection',
    color: '#C99E5D',
    accent: '#8C6D4F',
  },
  {
    name: 'Class Representative, B.Tech CSE',
    issuer: 'Chandigarh University',
    issuerShort: 'CR',
    validity: 'August 2024 – July 2025',
    color: '#8C6D4F',
    accent: '#8C6D4F',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

// Issuer icon letters
const issuerIcons: Record<string, string> = {
  PAT: 'P',
  PUB: 'R',
  GOO: 'G',
  CU: 'H',
  NCU: 'E',
  IIT: 'I',
  CR: 'L',
};

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-[#D4AF37]/[0.04] rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[26rem] h-[26rem] bg-[#8C6D4F]/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            06 / RESEARCH & ACHIEVEMENTS
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              RESEARCH &amp; IMPACT.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              RECOGNIZED.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-xs mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Patent, publications, international research, hackathon wins, and leadership roles — building impact beyond the classroom.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {researchItems.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative p-6 border border-[#8C6D4F]/30 bg-[#0D0B09] rounded-sm group hover:border-[#D4AF37]/60 transition-all duration-400 overflow-hidden cursor-pointer"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(to right, transparent, ${item.color}, transparent)` }}
              />

              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors" />

              {/* Icon Badge */}
              <div className="flex items-center space-x-3 mb-5">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center text-white text-sm font-bold border shrink-0 transition-all duration-300"
                  style={{
                    borderColor: `${item.color}50`,
                    backgroundColor: `${item.color}15`,
                    color: item.color,
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {issuerIcons[item.issuerShort]}
                </div>
                <div>
                  <div
                    className="text-[9px] font-medium tracking-[0.2em] uppercase"
                    style={{ fontFamily: "'Montserrat', sans-serif", color: item.color }}
                  >
                    {item.issuer}
                  </div>
                  <div
                    className="text-[8px] font-mono tracking-[0.15em] text-[#6B5E55]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.issuerShort === 'PAT' ? 'PATENT' : item.issuerShort === 'PUB' ? 'PUBLICATION' : 'ACHIEVEMENT'}
                  </div>
                </div>
              </div>

              {/* Item Name */}
              <h3
                className="text-sm font-medium text-[#E8DFD8] group-hover:text-[#F7E7C4] transition-colors leading-snug mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item.name}
              </h3>

              {/* Validity */}
              <div className="pt-3 border-t border-[#8C6D4F]/20">
                <span
                  className="text-[9.5px] font-light tracking-[0.15em] text-[#8C6D4F] group-hover:text-[#A8988B] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.validity}
                </span>
              </div>

              {/* Verified checkmark */}
              <div
                className="absolute top-4 right-4 w-5 h-5 rounded-full flex items-center justify-center border text-[10px] transition-all duration-300"
                style={{
                  borderColor: `${item.color}40`,
                  color: item.color,
                  backgroundColor: `${item.color}10`,
                }}
              >
                ✓
              </div>
            </motion.div>
          ))}

          {/* Summary Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="relative p-6 border border-[#D4AF37]/30 bg-gradient-to-br from-[#1A1208] to-[#0D0B09] rounded-sm group hover:border-[#D4AF37]/80 transition-all duration-400 overflow-hidden cursor-default"
          >
            {/* Top line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37] transition-colors" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37] transition-colors" />

            <div className="flex flex-col justify-between h-full space-y-4">
              <div>
                <div
                  className="text-[9px] font-medium tracking-[0.2em] uppercase text-[#D4AF37] mb-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  IMPACT SUMMARY
                </div>
                <div
                  className="text-5xl font-light text-[#D4AF37]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  1+
                </div>
                <div
                  className="text-[10px] tracking-[0.2em] uppercase text-[#8C6D4F] mt-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Patent Filed
                </div>
              </div>
              <div className="space-y-1.5 pt-3 border-t border-[#8C6D4F]/20">
                {['1 Indian Patent (Nov 2025)', '1 Research Publication', 'Google Campus Ambassador', 'Hackathon Winner (CU)', 'IIT Guwahati Intern'].map((item) => (
                  <div
                    key={item}
                    className="text-[10px] font-light text-[#A8988B] flex items-center space-x-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <span className="text-[#D4AF37] text-[8px]">▸</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default CertificationsSection;
