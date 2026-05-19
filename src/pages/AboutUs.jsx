import React from 'react';
import { Link } from 'react-router-dom';


export default function AboutUs() {

  const values = [
    {
      title: 'Innovation First',
      description:
        'We continuously adopt modern technologies and creative engineering approaches to deliver future-ready digital solutions.'
    },
    {
      title: 'Quality Excellence',
      description:
        'Every project undergoes structured planning, clean development practices, testing, and performance optimization.'
    },
    {
      title: 'Client Success',
      description:
        'We focus on measurable business growth, long-term partnerships, and delivering real operational value.'
    },
    {
      title: 'Team Collaboration',
      description:
        'Transparent communication and collaborative execution help us work as an extension of our client teams.'
    }
  ];

  const stats = [
    { number: '14+', label: 'Years of Excellence' },
    { number: '500+', label: 'Projects Delivered' },
    { number: '200+', label: 'Happy Clients' },
    { number: '150+', label: 'Team Members' }
  ];

  const companyPoints = [
    'Custom Web Application Development',
    'Mobile Application Development',
    'Enterprise Software Solutions',
    'Cloud & DevOps Infrastructure',
    'UI/UX Focused Product Engineering',
    'Scalable API & Backend Systems',
    'Agile Development Methodology',
    'Dedicated Developer Hiring Model'
  ];

  const teamPoints = [
    'Frontend Developers',
    'Backend Engineers',
    'UI/UX Designers',
    'Mobile App Developers',
    'DevOps Engineers',
    'QA & Testing Specialists',
    'Project Managers',
    'Technical Support Team'
  ];

  return (
    <div className="w-full bg-white">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#071c2f] py-24 px-6 lg:px-8 text-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,144,207,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,144,207,0.18),transparent_35%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>

            <span className="text-xs uppercase tracking-[0.32em] text-sky-100 font-semibold">
              About Our Company
            </span>
          </div>

          {/* <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-tight max-w-5xl mx-auto">
            Building modern digital solutions with innovation and engineering excellence.
          </h1> */}

                 <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-snug break-words">
  Building modern digital solutions with innovation and engineering excellence.
</h1>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We are a technology-driven software company focused on delivering scalable web, mobile and enterprise solutions for businesses worldwide.
          </p>

        </div>

      </section>

      {/* COMPANY PROFILE */}
      <section className="py-20 px-6 lg:px-8">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <div className="space-y-6">

            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500 font-semibold mb-4">
                Company Profile
              </p>

              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                More than a software company.
              </h2>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              NexaTech Digital started with a mission to help businesses adopt scalable and affordable digital transformation solutions using modern software technologies.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Over the years, we have expanded into a full-service software development company delivering web applications, mobile apps, enterprise systems and cloud-based platforms.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Our focus remains on performance, innovation, security and long-term business value for every client partnership.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 text-center"
              >

                <p className="text-4xl font-black text-slate-900">
                  {stat.number}
                </p>

                <p className="mt-3 text-base font-semibold text-slate-600">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* COMPANY SERVICES POINTS */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-sm uppercase tracking-[0.32em] text-slate-500 font-semibold">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Technology solutions built for growth.
            </h2>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {companyPoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-[2rem] p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0E90CF] to-[#083d63] text-white flex items-center justify-center font-black text-lg">
                  {idx + 1}
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900 leading-snug">
                  {point}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* TEAM SECTION */}
      <section className="py-20 px-6 lg:px-8">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <div className="mb-8">

              <p className="text-sm uppercase tracking-[0.32em] text-slate-500 font-semibold">
                Our Team
              </p>

              <h2 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Skilled professionals powering every project.
              </h2>

            </div>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Our multidisciplinary team combines technical expertise, strategic thinking and creative problem-solving to deliver high-performance digital products.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              From frontend engineering to cloud infrastructure, our specialists work collaboratively to ensure scalable and efficient project execution.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 gap-5">

            {teamPoints.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-6"
              >

                <div className="w-12 h-12 rounded-xl bg-[#0E90CF] text-white flex items-center justify-center font-bold">
                  ✓
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  {item}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* MISSION & VALUES */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16 space-y-4">

            <p className="text-sm uppercase tracking-[0.32em] text-slate-500 font-semibold">
              Mission & Values
            </p>

            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Principles that guide our growth.
            </h2>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value, idx) => (
              <div
                key={idx}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 hover:shadow-xl transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black">
                  {idx + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-4 text-base text-slate-600 leading-relaxed">
                  {value.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 lg:px-8 bg-[#071c2f] text-white">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-sm uppercase tracking-[0.32em] text-slate-400 font-semibold">
            Let's Build Together
          </p>

          <h2 className="mt-5 text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Ready to transform your business digitally?
          </h2>

          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            Partner with our team to build scalable digital products that drive long-term business growth.
          </p>

      <div className="flex flex-wrap justify-center gap-4 mt-10">

  <Link
    to="/contact"
    className="px-8 py-4 rounded-2xl bg-[#0E90CF] hover:bg-[#087db5] text-white font-bold transition-all inline-flex items-center justify-center"
  >
    Contact Our Team
  </Link>

  <Link
    to="/services"
    className="px-8 py-4 rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold transition-all inline-flex items-center justify-center"
  >
    View Services
  </Link>

</div>

        </div>

      </section>

    </div>
  );
}