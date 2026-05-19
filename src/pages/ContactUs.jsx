import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function ContactUs() {
  const [searchParams] = useSearchParams();

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || 'Failed to send message.');
      }

      setSuccess(true);

      setInputs({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (err) {
      setError(err.message || 'Submission failed.');
    } finally {
      setLoading(false);

      window.setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }
  };

  return (
    <div className="w-full bg-slate-50">

      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto space-y-6 text-center">

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>

            <span className="text-xs uppercase tracking-[0.32em] text-sky-100 font-semibold">
              Contact Us
            </span>
          </div>

          {/* <h1 className="text-5xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-tight">
            Talk to our enterprise technology team.
          </h1> */}
                 <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-snug break-words">
   Talk to our enterprise technology team.
</h1>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Have a project, question or partnership idea? Reach out and we’ll connect you with the right experts.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">

        <div className="grid gap-8 lg:grid-cols-2 items-start">

          {/* Contact Info */}
          <div className="space-y-6">

            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500 font-semibold mb-3">
                Contact Information
              </p>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Reach Out to Us
              </h2>
            </div>

            <div className="grid gap-4">

              {[
                {
                  icon: '📞',
                  title: 'Phone',
                  info: ['+1 (415) 712-7961', '+91 926-543-6779']
                },
                {
                  icon: '📧',
                  title: 'Email',
                  info: ['info@nexatechdigital.com']
                },
                {
                  icon: '🏢',
                  title: 'Office',
                  info: ['Puducherry, India']
                },
                {
                  icon: '🕒',
                  title: 'Working Hours',
                  info: ['Mon - Sat | 9:00 AM - 6:00 PM']
                }
              ].map((contact, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start gap-4">

                    <div className="text-3xl">
                      {contact.icon}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {contact.title}
                      </h3>

                      {contact.info.map((line, i) => (
                        <p
                          key={i}
                          className="text-sm text-slate-600 leading-relaxed"
                        >
                          {line}
                        </p>
                      ))}

                    </div>

                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">

            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Send Us a Message
            </h3>

            <p className="text-sm text-slate-600 mb-6">
              We typically respond within 24 hours.
            </p>

            {success ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-5 rounded-xl text-center space-y-2">

                <p className="text-2xl">✓</p>

                <p className="font-bold">
                  Message Sent Successfully!
                </p>

                <p className="text-sm">
                  Thank you for reaching out.
                </p>

              </div>
            ) : (

              <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    required
                    value={inputs.name}
                    onChange={(e) =>
                      setInputs({
                        ...inputs,
                        name: e.target.value
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#0E90CF] focus:ring-2 focus:ring-[#0E90CF]/20 transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    required
                    value={inputs.email}
                    onChange={(e) =>
                      setInputs({
                        ...inputs,
                        email: e.target.value
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#0E90CF] focus:ring-2 focus:ring-[#0E90CF]/20 transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    required
                    value={inputs.phone}
                    onChange={(e) =>
                      setInputs({
                        ...inputs,
                        phone: e.target.value
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#0E90CF] focus:ring-2 focus:ring-[#0E90CF]/20 transition"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Subject *
                  </label>

                  <input
                    type="text"
                    required
                    value={inputs.subject}
                    onChange={(e) =>
                      setInputs({
                        ...inputs,
                        subject: e.target.value
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#0E90CF] focus:ring-2 focus:ring-[#0E90CF]/20 transition"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Message *
                  </label>

                  <textarea
                    rows={4}
                    required
                    value={inputs.message}
                    onChange={(e) =>
                      setInputs({
                        ...inputs,
                        message: e.target.value
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#0E90CF] focus:ring-2 focus:ring-[#0E90CF]/20 transition resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-sm font-medium">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0E90CF] hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition uppercase text-sm tracking-wide"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

              </form>

            )}

          </div>

        </div>

      </section>

      {/* Map Section */}
      <section className="pb-16 px-6 lg:px-8 bg-white">

        <div className="max-w-7xl mx-auto space-y-8">

          <div className="text-center space-y-4">

            <p className="text-sm uppercase tracking-[0.32em] text-slate-500 font-semibold">
              Our Location
            </p>

            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Visit Our Office
            </h2>

          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.221420837449!2d79.8083131750448!3d11.95070968827895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53616a4cb59d87%3A0x95d5f26d5f3f6a55!2sPuducherry!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
            ></iframe>

          </div>

        </div>

      </section>

    </div>
  );
}