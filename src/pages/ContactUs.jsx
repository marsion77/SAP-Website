import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaBuilding, FaClock } from 'react-icons/fa';
const API = import.meta.env.VITE_API_URL;

export default function ContactUs() {

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Validation Function
  const validateForm = () => {
    let newErrors = {};

    // Name Validation
    if (!inputs.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (!/^[A-Za-z ]+$/.test(inputs.name)) {
      newErrors.name = 'Only alphabets are allowed';
    } else if (inputs.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    // Email Validation
    if (!inputs.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)
    ) {
      newErrors.email = 'Invalid email address';
    }

    // Phone Validation
    if (!inputs.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(inputs.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    // Subject Validation
    if (!inputs.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (inputs.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    // Message Validation
    if (!inputs.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (inputs.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });

    // Remove individual field error while typing
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    // Run Validation
    if (!validateForm()) return;

    setLoading(true);

    try {

      // Create timeout controller
      const controller = new AbortController();

      const timeoutId = setTimeout(() => {
        controller.abort();
      }, 10000);

      const response = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || `Server Error: ${response.status}`);
      }

      await response.json();

      setSuccess(true);

      // Reset Form
      setInputs({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      setErrors({});

    } catch (err) {

      if (err.name === 'AbortError') {
        setError(
          'Request timeout. Please try again later.'
        );
      } else if (err instanceof TypeError) {
        setError(
          'Network error. Unable to reach the server.'
        );
      } else {
        setError(
          err.message || 'Submission failed.'
        );
      }

      console.error('Contact form error:', err);

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
                  icon: <FaPhoneAlt />,
                  title: 'Phone',
                  info: ['+1 (415) 712-7961', '+91 926-543-6779']
                },
                {
                  icon: <FaEnvelope />,
                  title: 'Email',
                  info: ['info@nexatechdigital.com']
                },
                {
                  icon: <FaBuilding />,
                  title: 'Office',
                  info: ['NexaTech Digital Pvt Ltd 3rd Floor, Tech Park Avenue,OMR Road, Chennai,Tamil Nadu – 600096,India']
                },
                {
                  icon: <FaClock />,
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

                {/* Name */}
                <div>

                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={inputs.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#0E90CF] focus:ring-2 focus:ring-[#0E90CF]/20 transition"
                    placeholder="John Doe"
                  />

                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}

                </div>

                {/* Email */}
                <div>

                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#0E90CF] focus:ring-2 focus:ring-[#0E90CF]/20 transition"
                    placeholder="john@example.com"
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}

                </div>

                {/* Phone */}
                <div>

                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={inputs.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#0E90CF] focus:ring-2 focus:ring-[#0E90CF]/20 transition"
                    placeholder="9876543210"
                  />

                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone}
                    </p>
                  )}

                </div>

                {/* Subject */}
                <div>

                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Subject *
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={inputs.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#0E90CF] focus:ring-2 focus:ring-[#0E90CF]/20 transition"
                    placeholder="Project Inquiry"
                  />

                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}

                </div>

                {/* Message */}
                <div>

                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Message *
                  </label>

                  <textarea
                    rows={4}
                    name="message"
                    value={inputs.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#0E90CF] focus:ring-2 focus:ring-[#0E90CF]/20 transition resize-none"
                    placeholder="Tell us about your project..."
                  />

                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}

                </div>

                {/* API Error */}
                {error && (
                  <div className="text-red-500 text-sm font-medium">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full text-white font-bold py-3 rounded-lg transition uppercase text-sm tracking-wide ${
                    loading
                      ? 'bg-slate-400 cursor-not-allowed'
                      : 'bg-[#0E90CF] hover:bg-blue-600'
                  }`}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

              </form>

            )}

          </div>

        </div>

      </section>

      {/* Map Section */}
      <section className="pb-16 px-6 lg:px-8 bg-white mt-6">

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.221420837449!2d79.8083131750448!3d11.95070968827895!2m3!1f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53616a4cb59d87%3A0x95d5f26d5f3f6a55!2sPuducherry!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
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