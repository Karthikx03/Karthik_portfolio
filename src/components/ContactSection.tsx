// src/components/ContactSection.tsx
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const emailAddress = 'spmkarthikeyan28032007@gmail.com';
const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormState = 'idle' | 'loading' | 'success' | 'error';

// Social icon SVGs (inline, no external dependency)
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
  </svg>
);

const socialLinks = [
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/karthikeyan-p-396412321',
    display: 'linkedin.com/in/karthikeyan-p-396412321',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    href: 'https://github.com/Karthikx03',
    display: 'github.com/Karthikx03',
  },
  {
    icon: EmailIcon,
    label: 'Email',
    href: `mailto:${emailAddress}`,
    display: emailAddress,
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
    href: 'tel:+918148017432',
    display: '+91 81480 17432',
  },
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const submitRef = useRef(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (submitRef.current || formState === 'loading') return;

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setErrorMsg('');
    setFormState('loading');
    submitRef.current = true;

    try {
      // FormSubmit API — sends directly to Karthikeyan's email
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(emailAddress)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `Portfolio Inquiry from ${formData.name}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      // FormSubmit replies 200 even when it rejects a message (e.g. before the
      // inbox is activated), so trust only its explicit success flag.
      if (response.ok && (data.success === 'true' || data.success === true)) {
        setFormState('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      // Fallback: trigger native mailto link if endpoint is unreachable
      window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      setFormState('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      submitRef.current = false;
    }
  };

  const resetForm = () => {
    setFormState('idle');
    setErrorMsg('');
    submitRef.current = false;
  };

  const handleEmailClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(emailComposeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-5"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  07 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    INITIALIZE
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    TRANSMISSION.
                  </span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Have a research collaboration, project opportunity, or just want to connect? Send a direct message below — or reach out on LinkedIn or GitHub.
              </motion.p>

              {/* Social / Contact Links */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-3"
              >
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={link.label === 'Email' ? handleEmailClick : undefined}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-3 group transition-all duration-300"
                    aria-label={`${link.label}: ${link.display}`}
                  >
                    <div className="w-8 h-8 border border-[#8C6D4F]/40 group-hover:border-[#D4AF37] flex items-center justify-center text-[#8C6D4F] group-hover:text-[#D4AF37] transition-all duration-300 shrink-0">
                      <link.icon />
                    </div>
                    <span
                      className="text-[11px] font-light text-[#A8988B] group-hover:text-[#EAD8C7] transition-colors tracking-wide break-all"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {link.display}
                    </span>
                  </a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Column: Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Gold Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

            {/* Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

            {/* SUCCESS STATE */}
            {formState === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37] text-[#D4AF37] text-lg">
                  ✓
                </div>
                <h3
                  className="text-3xl text-white font-normal uppercase"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  MESSAGE DELIVERED
                </h3>
                <p
                  className="text-xs text-[#A8988B] font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Transmission registered. Karthikeyan will respond at the earliest opportunity.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-4 text-[10px] font-medium tracking-[0.2em] uppercase text-[#8C6D4F] hover:text-[#D4AF37] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  SEND ANOTHER →
                </button>
              </motion.div>
            )}

            {/* FORM STATE */}
            {formState !== 'success' && (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>

                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[10.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2"
                    >
                      // SENDER NAME *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                      disabled={formState === 'loading'}
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[10.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2"
                    >
                      // REPLY CHANNEL *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                      disabled={formState === 'loading'}
                      aria-required="true"
                    />
                  </div>
                </div>

                {/* Row 2: Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-[10.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2"
                  >
                    // SUBJECT
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Inquiry subject"
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    disabled={formState === 'loading'}
                  />
                </div>

                {/* Row 3: Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[10.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2"
                  >
                    // PAYLOAD *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your collaboration idea, research opportunity, or inquiry..."
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 p-4 outline-none rounded-sm transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    disabled={formState === 'loading'}
                    aria-required="true"
                  />
                </div>

                {/* Error Message */}
                {errorMsg && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[11px] font-light text-red-400/80"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    role="alert"
                  >
                    {errorMsg}
                  </motion.p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full py-3.5 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#1A1510] text-[#E8DFD8] hover:text-[#F7E7C4] text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  aria-busy={formState === 'loading'}
                >
                  {formState === 'loading' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-3 h-3 border border-[#D4AF37]/40 border-t-[#D4AF37] rounded-full"
                      />
                      <span>TRANSMITTING...</span>
                    </>
                  ) : (
                    <span>EXECUTE DISPATCH ↗</span>
                  )}
                </button>

              </form>
            )}
          </motion.div>

        </div>

        {/* Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/karthikeyan-p-396412321"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8C6D4F] hover:text-[#D4AF37] transition-colors"
              aria-label="LinkedIn — Karthikeyan P"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/Karthikx03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8C6D4F] hover:text-[#D4AF37] transition-colors"
              aria-label="GitHub — Karthikx03"
            >
              <GitHubIcon />
            </a>
            <a
              href={`mailto:${emailAddress}`}
              onClick={handleEmailClick}
              className="text-[#8C6D4F] hover:text-[#D4AF37] transition-colors"
              aria-label={`Email ${emailAddress}`}
            >
              <EmailIcon />
            </a>
          </div>
          <span className="text-[10px] font-mono text-[#8C6D4F]">
            © {new Date().getFullYear()} Karthikeyan P • AI · IoT & Embedded Systems Developer
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;