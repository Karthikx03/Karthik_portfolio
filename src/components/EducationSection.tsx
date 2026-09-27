import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface EducationEntry {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location?: string;
  detail?: string;
  type: 'bachelors' | 'exchange';
}

const education: EducationEntry[] = [
  {
    id: '01',
    degree: 'B.Tech, Computer Science & Engineering',
    field: 'CGPA: 8.15 / 10',
    institution: 'Chandigarh University',
    location: 'Punjab, India',
    type: 'bachelors',
  },
  {
    id: '02',
    degree: 'Semester Exchange',
    field: 'School of Engineering, Computer Science & Information Engineering',
    institution: 'National Central University',
    location: 'Taoyuan, Taiwan',
    detail: 'CGPA: 4.22 / 4.3',
    type: 'exchange',
  },
];

const typeColors: Record<EducationEntry['type'], string> = {
  bachelors: '#D4AF37',
  exchange: '#C99E5D',
};

const typeBadges: Record<EducationEntry['type'], string> = {
  bachelors: 'BACHELORS',
  exchange: 'EXCHANGE',
};

export const EducationSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="education"
      ref={containerRef}
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-4 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-[#8C6D4F]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">

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
            07 / EDUCATION
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              ACADEMIC
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              FOUNDATION.
            </span>
          </h2>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative w-full">

          {/* Background Track */}
          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-[#8C6D4F]/20" />

          {/* Animated Track */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#C99E5D] to-[#8C6D4F]/10 shadow-[0_0_10px_#D4AF37] origin-top"
          />

          <div className="space-y-12">
            {education.map((entry, idx) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Desktop ID (left side) */}
                <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors">
                    {typeBadges[entry.type]}
                  </span>
                </div>

                {/* Node */}
                <div className="absolute left-[19px] md:left-[140px] top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="absolute w-6 h-6 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 group-hover:scale-150 transition-all duration-700 ease-out" />
                  <div
                    className="w-2.5 h-2.5 rounded-full bg-[#120F0C] border transition-colors duration-300"
                    style={{ borderColor: typeColors[entry.type] }}
                  />
                </div>

                {/* Content */}
                <div className="ml-14 md:ml-12 pl-2">
                  {/* Mobile badge */}
                  <div className="md:hidden mb-1.5">
                    <span className="text-[10px] font-mono tracking-[0.2em]" style={{ color: typeColors[entry.type] }}>
                      {typeBadges[entry.type]}
                    </span>
                  </div>

                  <h3
                    className="text-3xl sm:text-4xl tracking-wide text-white group-hover:text-[#F7E7C4] transition-colors mb-1 leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {entry.degree}
                  </h3>

                  <span
                    className="block text-xs font-medium text-[#C4B5A5] mb-1"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {entry.field}
                  </span>

                  <span
                    className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#8C6D4F] mb-0"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {entry.institution}
                  </span>

                  {entry.location && (
                    <span
                      className="block text-[9px] font-light tracking-[0.16em] uppercase text-[#6B5E55] mt-0.5"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {entry.location}
                    </span>
                  )}

                  {entry.detail && (
                    <span
                      className="block text-[10px] font-mono text-[#D4AF37] mt-1"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {entry.detail}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;
