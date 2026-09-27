import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface CareerStop {
  id: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  type: 'research' | 'development' | 'intern';
}

const journey: CareerStop[] = [
  {
    id: '01',
    period: 'JUL 2026 – PRESENT',
    title: 'RESEARCHER',
    organization: 'CHANG GUNG UNIVERSITY',
    location: 'TAOYUAN, TAIWAN',
    type: 'research',
    description:
      'Joined as a Researcher in the Department of Artificial Intelligence. Contributing to the RobotNurseHelper initiative — developing a client-server based social-robot system using Kebbi Air-S / Zenbo Junior II for patient education and nurse-support in Taiwanese hospitals.',
  },
  {
    id: '02',
    period: '2026 – PRESENT',
    title: 'ERP DEVELOPER',
    organization: 'Q2Q SOLUTIONS',
    location: 'INDIA',
    type: 'development',
    description:
      'Developing ERP modules to automate business workflows. Collaborating with stakeholders to architect and deploy production-ready features for enterprise clients.',
  },
  {
    id: '03',
    period: 'MAR – JUL 2026',
    title: 'RESEARCH ASSISTANT',
    organization: 'NATIONAL CENTRAL UNIVERSITY',
    location: 'TAOYUAN, TAIWAN',
    type: 'research',
    description:
      'Independently assembled an F450 quadcopter, performed flight-controller calibration, and built a Raspberry Pi-powered onboard image-analysis pipeline. Co-designed a cognitive science experiment on drone-operation skill acquisition using DJI drones and Garmin SDK toolchain.',
  },
  {
    id: '04',
    period: 'DEC 2025 – JAN 2026',
    title: 'IT INTERN',
    organization: 'SMG ELECTRIC SCOOTERS LTD.',
    location: 'NEW DELHI, INDIA',
    type: 'intern',
    description:
      'Supported IT operations in an EV manufacturing environment. Delivered quality work consistently under deadlines across multiple IT support responsibilities.',
  },
  {
    id: '05',
    period: 'JUL 2025',
    title: 'SUMMER RESEARCH INTERN',
    organization: 'INDIAN INSTITUTE OF TECHNOLOGY, GUWAHATI',
    location: 'GUWAHATI, INDIA',
    type: 'research',
    description:
      'Selected for a competitive summer internship at IIT Guwahati. Worked on applied AI and engineering research projects under faculty supervision.',
  },
  {
    id: '06',
    period: 'JUN – JUL 2025',
    title: 'INTERNSHIP TRAINEE — IOT',
    organization: 'MATT ENGINEERING SOLUTIONS',
    location: 'INDIA',
    type: 'intern',
    description:
      'Prototyped IoT-based solutions using Arduino, ESP modules, and sensor integration for embedded systems applications.',
  },
  {
    id: '07',
    period: '2025',
    title: 'WEB DEVELOPMENT INTERN',
    organization: 'EDIFICE TECHNOLOGIES',
    location: 'INDIA',
    type: 'development',
    description:
      'Built and enhanced web application interfaces using HTML, CSS, and JavaScript within a full-stack development team.',
  },
];

const typeColors: Record<CareerStop['type'], string> = {
  research: '#D4AF37',
  development: '#8C6D4F',
  intern: '#6A8C6D',
};

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-4 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4AF37]/[0.03] rounded-full blur-[150px] pointer-events-none" />

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
            05 / EXPERIENCE
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              EXPERIENCE &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              CAREER JOURNEY.
            </span>
          </h2>
        </motion.div>

        {/* Career Evolution Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 p-4 border-l-2 border-[#D4AF37]/50 bg-[#100D0B]/60"
        >
          <p
            className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#A8988B]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Career Trajectory:&nbsp;
            <span className="text-[#D4AF37]">IoT & Embedded Systems</span>
            <span className="text-[#8C6D4F]"> → </span>
            <span className="text-[#D4AF37]">AI & Machine Learning</span>
            <span className="text-[#8C6D4F]"> → </span>
            <span className="text-[#D4AF37]">Drone Vision Research</span>
            <span className="text-[#8C6D4F]"> → </span>
            <span className="text-[#D4AF37]">Social Robotics</span>
            <span className="text-[#8C6D4F]"> → </span>
            <span className="text-[#D4AF37]">International Research</span>
          </p>
        </motion.div>

        {/* Minimalist Route Map */}
        <div className="relative w-full">

          {/* Background Track */}
          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-[#8C6D4F]/20" />

          {/* Animated Gold Track */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#C99E5D] to-[#8C6D4F]/10 shadow-[0_0_10px_#D4AF37] origin-top"
          />

          <div className="space-y-12">
            {journey.map((stop, idx) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Desktop Period (Left side) */}
                <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors">
                    {stop.period}
                  </span>
                </div>

                {/* Route Node */}
                <div className="absolute left-[19px] md:left-[140px] top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="absolute w-6 h-6 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 group-hover:scale-150 transition-all duration-700 ease-out" />
                  <div
                    className="w-2.5 h-2.5 rounded-full bg-[#120F0C] border transition-colors duration-300 group-hover:shadow-[0_0_12px_currentColor]"
                    style={{
                      borderColor: typeColors[stop.type],
                    }}
                  />
                </div>

                {/* Content */}
                <div className="ml-14 md:ml-12 pl-2">
                  {/* Mobile Period */}
                  <div className="md:hidden mb-1.5">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37]">
                      {stop.period}
                    </span>
                  </div>

                  {/* Type Badge */}
                  {stop.type === 'research' && (
                    <span
                      className="inline-block text-[9px] font-medium tracking-[0.2em] uppercase text-[#D4AF37] border border-[#D4AF37]/30 px-2 py-0.5 rounded-sm mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      RESEARCH
                    </span>
                  )}

                  <h3
                    className="text-3xl sm:text-4xl tracking-wide text-white group-hover:text-[#F7E7C4] transition-colors mb-1 leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {stop.title}
                  </h3>

                  <span
                    className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#8C6D4F] mb-1"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.organization}
                  </span>

                  <span
                    className="block text-[9px] font-light tracking-[0.16em] uppercase text-[#6B5E55] mb-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.location}
                  </span>

                  <p
                    className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-[1.7] max-w-lg group-hover:text-[#D5CBC0] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;