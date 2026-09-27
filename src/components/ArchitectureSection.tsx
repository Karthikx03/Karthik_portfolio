import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ArchNode {
  id: string;
  label: string;
  sublabel: string;
  icon: string;
  color: string;
}

const nodes: ArchNode[] = [
  { id: 'input', label: 'SENSOR INPUT', sublabel: 'IR / PPG / MEMS / Alcohol / Flame', icon: '⬡', color: '#E8DFD8' },
  { id: 'fusion', label: 'BAYESIAN FUSION', sublabel: 'Multi-sensor confidence aggregation', icon: '⟡', color: '#D4AF37' },
  { id: 'inference', label: 'ON-DEVICE INFERENCE', sublabel: 'TensorFlow Lite on Raspberry Pi', icon: '⬡', color: '#C99E5D' },
  { id: 'decision', label: 'DECISION ENGINE', sublabel: 'Threshold logic + alert classification', icon: '⟡', color: '#D4AF37' },
  { id: 'intervention', label: '5-STAGE INTERVENTION', sublabel: 'Graduated automated response protocol', icon: '⬡', color: '#8C6D4F' },
  { id: 'comms', label: 'DUAL COMMS', sublabel: 'Wi-Fi + GSM emergency coordination', icon: '⟡', color: '#C99E5D' },
  { id: 'cloud', label: 'BLYNK IOT CLOUD', sublabel: 'Live GPS + vitals dashboard', icon: '⬡', color: '#D4AF37' },
  { id: 'v2i', label: 'V2I INTEGRATION', sublabel: 'Smart city infrastructure link', icon: '⟡', color: '#E8DFD8' },
];

const systemModules = [
  { name: 'Sensor Layer', desc: 'IR, PPG, MEMS, Alcohol, Flame', weight: 'ESP32 + RPi 4' },
  { name: 'Fusion Engine', desc: 'Bayesian multi-modal fusion', weight: 'C++ / Python' },
  { name: 'ML Inference', desc: 'On-device TFLite model', weight: 'TensorFlow Lite' },
  { name: 'Alert Protocol', desc: '5-stage intervention system', weight: '95% Accuracy' },
  { name: 'Communication', desc: 'Emergency coordination', weight: 'Wi-Fi + GSM' },
];

export const ArchitectureSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section
      id="architecture"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 lg:pt-20 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-[#D4AF37]/[0.04] rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[28rem] h-[28rem] bg-[#8C6D4F]/[0.04] rounded-full blur-[160px] pointer-events-none" />

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
            03 / SYSTEM ARCHITECTURE
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
              HOW INTELLIGENCE
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              IS ORCHESTRATED.
            </span>
          </h2>
          <p
            className="mt-4 text-xs sm:text-sm font-light text-[#A8988B] max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            The patented IoT Vehicle Safety System architecture — from multi-sensor input to V2I smart city integration — designed and built by Karthikeyan P.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left: Vertical Flow */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-4 top-6 bottom-6 w-[1px] bg-gradient-to-b from-[#D4AF37]/60 via-[#8C6D4F]/30 to-[#D4AF37]/20 pointer-events-none" />

              <div className="space-y-3">
                {nodes.map((node, idx) => (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.07 }}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                    className="relative flex items-center space-x-4 cursor-pointer group"
                  >
                    {/* Node Dot */}
                    <div
                      className="relative z-10 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 shrink-0"
                      style={{
                        borderColor: activeNode === node.id ? node.color : `${node.color}40`,
                        backgroundColor: activeNode === node.id ? `${node.color}15` : 'transparent',
                        boxShadow: activeNode === node.id ? `0 0 16px ${node.color}60` : 'none',
                      }}
                    >
                      <span className="text-xs" style={{ color: node.color }}>{node.icon}</span>
                    </div>

                    {/* Label */}
                    <div
                      className="flex-1 p-3 rounded-sm border transition-all duration-300"
                      style={{
                        borderColor: activeNode === node.id ? `${node.color}60` : '#8C6D4F20',
                        backgroundColor: activeNode === node.id ? '#120F0C' : 'transparent',
                      }}
                    >
                      <div
                        className="text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          color: activeNode === node.id ? node.color : '#C4B5A5',
                        }}
                      >
                        {node.label}
                      </div>
                      <div
                        className="text-[10px] font-light text-[#6B5E55] group-hover:text-[#A8988B] transition-colors mt-0.5"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {node.sublabel}
                      </div>
                    </div>

                    {/* Arrow to next */}
                    {idx < nodes.length - 1 && (
                      <motion.div
                        animate={{ y: [0, 2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.1 }}
                        className="absolute -bottom-2 left-4 text-[#D4AF37]/40 text-xs -translate-x-1/2"
                      >
                        ↓
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: System Detail */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              {/* 5-Module System */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <span
                    className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    // 5-LAYER SYSTEM STACK
                  </span>
                  <div className="flex-1 h-[1px] bg-[#8C6D4F]/20" />
                </div>

                <div className="space-y-3">
                  {systemModules.map((mod, idx) => (
                    <motion.div
                      key={mod.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                      className="relative p-4 border border-[#8C6D4F]/25 bg-[#0A0806] rounded-sm group hover:border-[#D4AF37]/50 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div
                            className="text-sm font-medium text-[#E8DFD8] group-hover:text-[#F7E7C4] transition-colors mb-1"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {mod.name}
                          </div>
                          <div
                            className="text-[11px] font-light text-[#A8988B]"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {mod.desc}
                          </div>
                        </div>
                        <span
                          className="text-[9px] font-mono px-2 py-1 border border-[#D4AF37]/30 text-[#D4AF37] bg-[#120F0C] shrink-0 ml-4"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {mod.weight}
                        </span>
                      </div>

                      {/* Progress bar visualization */}
                      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/40 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ width: '100%' }} />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics Visual */}
              <div className="p-6 border border-[#8C6D4F]/25 bg-[#0A0806] rounded-sm">
                <div
                  className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  // PATENT PERFORMANCE METRICS
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Detection Accuracy', weight: 95, color: '#D4AF37' },
                    { label: 'False Positive Reduction', weight: 60, color: '#C99E5D' },
                    { label: 'Intervention Protocol Stages', weight: 100, color: '#8C6D4F' },
                    { label: 'Sensor Modalities', weight: 83, color: '#F7E7C4' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center space-x-3">
                      <span
                        className="text-[10px] font-light text-[#A8988B] w-44 shrink-0"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {row.label}
                      </span>
                      <div className="flex-1 h-[3px] bg-[#1A1510] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${row.weight}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: row.color }}
                        />
                      </div>
                      <span
                        className="text-[10px] font-mono w-10 text-right shrink-0"
                        style={{ color: row.color, fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {`${row.weight}%`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
