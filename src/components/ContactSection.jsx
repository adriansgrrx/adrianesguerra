import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection({ contact }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email).then(() => {
      setCopiedEmail(true);
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.8 },
      });
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setErrorMessage(
        'Email service key is missing. Please add VITE_WEB3FORMS_ACCESS_KEY in your .env file, or use the direct email link below.'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || `Portfolio Contact from ${formData.name.trim()}`,
          message: formData.message.trim(),
          from_name: formData.name.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#a8c7fa', '#d0bcff', '#4285f4'],
        });
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setErrorMessage(
          data.message || 'Failed to send message. Please try again or reach out directly.'
        );
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMessage(
        'Network error: Unable to reach email service. Please check your internet connection or email directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-12 pb-24 pt-6">
      <div className="text-xs tracking-widest uppercase text-neutral-500 font-mono mb-8">
        <span>06 / Direct Channel</span>
      </div>

      <div className="space-y-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
            {contact.heading}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-mono mt-1">
            {contact.subheading}
          </p>
        </div>

        {/* Flat Contact Line Items with Divider */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
          <div className="space-y-1">
            <div className="text-xs text-neutral-500 font-mono">Email Address</div>
            <button
              onClick={handleCopyEmail}
              className="text-sm font-medium text-neutral-200 hover:text-[#a8c7fa] transition-colors break-all text-left flex items-center gap-2 cursor-pointer"
            >
              <span>{contact.email}</span>
              <span className="text-[11px] font-mono text-neutral-400 shrink-0">
                {copiedEmail ? <span className="text-emerald-400">Copied</span> : 'Copy'}
              </span>
            </button>
          </div>

          <div className="space-y-1">
            <div className="text-xs text-neutral-500 font-mono">Mobile</div>
            <a
              href={contact.phoneHref}
              className="text-sm font-medium text-neutral-200 hover:text-[#a8c7fa] transition-colors block"
            >
              {contact.phone}
            </a>
          </div>

          <div className="space-y-1">
            <div className="text-xs text-neutral-500 font-mono">Location & Schedule</div>
            <div className="text-sm font-medium text-neutral-200">{contact.location}</div>
            <div className="text-xs text-neutral-400">{contact.workPreference}</div>
          </div>
        </div>

        {/* Flat Interactive Form with Divider */}
        <div className="pt-8 border-t border-white/10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-400 block">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Marie Curie"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1e1f20] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#a8c7fa] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-400 block">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. marie@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1e1f20] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#a8c7fa] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-neutral-400 block">Subject</label>
              <input
                type="text"
                placeholder="Collaboration, Project or Opportunity"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#1e1f20] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#a8c7fa] transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-neutral-400 block">Message</label>
              <textarea
                required
                rows={4}
                placeholder="Share your ideas, project details, or inquiry..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#1e1f20] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#a8c7fa] transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-neutral-500">
                Responses typically within 24 business hours.
              </span>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-[#a8c7fa] hover:bg-[#d3e2ff] text-[#0a315b] font-medium text-xs sm:text-sm transition-colors cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

            {submitted && (
              <div className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you! Your message has been dispatched successfully.</span>
              </div>
            )}

            {errorMessage && (
              <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-mono space-y-2 animate-fadeIn">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
                  <span className="leading-relaxed">{errorMessage}</span>
                </div>
                <div className="pt-1.5 border-t border-red-500/15 flex items-center gap-2">
                  <a
                    href={`mailto:${contact.email}?subject=${encodeURIComponent(
                      formData.subject || `Portfolio Inquiry from ${formData.name || 'Visitor'}`
                    )}&body=${encodeURIComponent(
                      formData.message ? `${formData.message}\n\nFrom: ${formData.name} (${formData.email})` : ''
                    )}`}
                    className="inline-flex items-center gap-1.5 text-[#a8c7fa] hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send directly via your email app instead</span>
                  </a>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Flat Terminal Footer with Divider */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-2 select-none">
          <span className="text-neutral-500">Adrian Esguerra • 2025</span>
        </div>
      </div>
    </section>
  );
}
