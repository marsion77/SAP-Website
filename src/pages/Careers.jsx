import React, { useState } from 'react';

// React Icons
import { MdLocationOn, MdWork, MdAccessTime } from 'react-icons/md';

import {
  FaMoneyBillWave,
  FaHeartbeat,
  FaHome,
  FaBook,
  FaBullseye,
  FaGift
} from 'react-icons/fa';

export default function Careers() {
  const [expandedRole, setExpandedRole] = useState(null);

  const jobs = [
    {
      id: 1,
      title: 'Senior MERN Stack Engineer',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Build scalable backend systems and modern frontend interfaces using Node.js, Express, React, and MongoDB.',
      requirements: ['5+ years with MERN stack', 'Strong system design skills', 'AWS/Cloud experience', 'Team collaboration'],
      skills: ['Node.js', 'React', 'MongoDB', 'Express', 'AWS']
    },
    {
      id: 2,
      title: 'React Frontend Developer',
      location: 'New York / Hybrid',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create pixel-perfect, responsive UI components using React, TypeScript, and Tailwind CSS.',
      requirements: ['3+ years with React', 'TypeScript proficiency', 'UI/UX understanding', 'Testing experience'],
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Jest', 'Figma']
    },
    {
      id: 3,
      title: 'DevOps & Cloud Architect',
      location: 'Remote',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Design and manage cloud infrastructure, CI/CD pipelines, and deployment strategies.',
      requirements: ['6+ years DevOps experience', 'AWS/Azure expertise', 'Docker & Kubernetes', 'Infrastructure as Code'],
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD']
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      location: 'Los Angeles / On-site',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Design engaging user interfaces and experiences for web and mobile applications.',
      requirements: ['2+ years design experience', 'Figma expertise', 'UX research skills', 'Design systems'],
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems']
    },
    {
      id: 5,
      title: 'Quality Assurance Engineer',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Ensure quality through automated testing, manual QA, and performance benchmarking.',
      requirements: ['2+ years QA experience', 'Automation testing', 'Test frameworks', 'Performance testing'],
      skills: ['Jest', 'Selenium', 'Cypress', 'Performance Testing', 'Manual QA']
    },
    {
      id: 6,
      title: 'Junior Developer (Internship)',
      location: 'Remote / On-site',
      type: 'Internship',
      experience: 'Fresh / 0-1 years',
      description: 'Learn and grow while contributing to real projects. Perfect for recent graduates.',
      requirements: ['Strong fundamentals', 'JavaScript knowledge', 'Willingness to learn', 'Team player'],
      skills: ['JavaScript', 'React', 'HTML/CSS', 'Git', 'Problem Solving']
    }
  ];

  const benefits = [
    { icon: <FaMoneyBillWave />, title: 'Competitive Salary', desc: 'Market-competitive compensation based on experience' },
    { icon: <FaHeartbeat />, title: 'Health Benefits', desc: 'Comprehensive health, dental, and vision coverage' },
    { icon: <FaHome />, title: 'Remote Work', desc: 'Flexible work from home and office options' },
    { icon: <FaBook />, title: 'Learning Budget', desc: 'Annual budget for courses, certifications, and conferences' },
    { icon: <FaBullseye />, title: 'Growth Path', desc: 'Clear career progression and mentorship opportunities' },
    { icon: <FaGift />, title: 'Perks & Culture', desc: 'Team events, flexible hours, and great company culture' }
  ];

  return (
    <div className="w-full bg-white">

      {/* HERO */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center space-y-6">

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs uppercase tracking-[0.32em] text-sky-100 font-semibold">
              Careers
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-snug break-words">
            Join Our Growing Team
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            We're hiring talented professionals to help us build amazing products. Explore open positions and become part of something great.
          </p>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {benefits.map((benefit, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">

              <div className="text-4xl mb-4 text-[#0E90CF] flex justify-center">
                {benefit.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {benefit.title}
              </h3>

              <p className="text-base text-slate-600">
                {benefit.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* JOB LISTINGS */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">

        <div className="space-y-4">

          {jobs.map((job) => (
            <div
              key={job.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
            >

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 pb-6 border-b border-slate-200">

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-600">

                    <span className="flex items-center gap-2">
                      <MdLocationOn className="text-[#0E90CF]" />
                      {job.location}
                    </span>

                    <span className="flex items-center gap-2">
                      <MdWork className="text-[#0E90CF]" />
                      {job.type}
                    </span>

                    <span className="flex items-center gap-2">
                      <MdAccessTime className="text-[#0E90CF]" />
                      {job.experience}
                    </span>

                  </div>
                </div>

                <button
                  onClick={() =>
                    setExpandedRole(expandedRole === job.id ? null : job.id)
                  }
                  className="px-6 py-3 bg-slate-900 text-white font-bold rounded-lg"
                >
                  {expandedRole === job.id ? 'Hide Details' : 'View Details'}
                </button>

              </div>

              <p className="text-slate-600 mb-6">
                {job.description}
              </p>

              {expandedRole === job.id && (
                <div className="border-t pt-6 space-y-6">

                  <div>
                    <h4 className="font-bold uppercase text-sm mb-3">
                      Requirements
                    </h4>

                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex gap-2 text-slate-600">
                          <span className="font-bold text-slate-900">✓</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold uppercase text-sm mb-3">
                      Skills
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-slate-100 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>
              )}

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900 text-white text-center">

        <h2 className="text-3xl font-black mb-4">
          Send Us Your Profile
        </h2>

        <p className="text-slate-300 mb-6">
          We're always looking for talented individuals.
        </p>

        <button className="px-8 py-4 bg-[#0E90CF] rounded-full font-bold">
          Submit Your Resume
        </button>

      </section>

    </div>
  );
}