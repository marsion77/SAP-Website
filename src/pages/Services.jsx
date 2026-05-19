import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
 const services = [
  {
    title: 'SAP Solutions',
    description:
      'Enterprise SAP implementation, migration and managed support services for operational efficiency and business scalability.',
    details: [
      'SAP S/4HANA Implementation',
      'SAP Migration & Modernization',
      'SAP Fiori Applications',
      'SAP Integration Services',
      'SAP Support & Maintenance'
    ]
  },

  {
    title: 'Microsoft Solutions',
    description:
      'Microsoft enterprise platforms and productivity ecosystems designed to streamline workflows and improve collaboration.',
    details: [
      'Microsoft Dynamics 365',
      'Power BI & Analytics',
      'Power Platform Automation',
      'Microsoft Azure Services',
      'Enterprise Collaboration Tools'
    ]
  },

  {
    title: 'Cloud Services',
    description:
      'Scalable cloud-native infrastructure, deployment automation and cloud transformation strategies for modern enterprises.',
    details: [
      'AWS & Azure Cloud Deployment',
      'Cloud Migration Services',
      'DevOps & CI/CD Pipelines',
      'Infrastructure Automation',
      'Cloud Security & Monitoring'
    ]
  },

  {
    title: 'Digital Transformation',
    description:
      'Modernize legacy systems and accelerate digital innovation through intelligent automation and enterprise technology transformation.',
    details: [
      'Legacy System Modernization',
      'Business Process Automation',
      'Digital Strategy Consulting',
      'Workflow Optimization',
      'Enterprise Integration'
    ]
  },

  {
    title: 'Custom Development',
    description:
      'Custom-built web, mobile and enterprise software solutions engineered for scalability, performance and business growth.',
    details: [
      'Web Application Development',
      'Mobile App Development',
      'Frontend & Backend Engineering',
      'API Development',
      'Enterprise Software Solutions'
    ]
  },

  {
    title: 'Managed IT Services',
    description:
      'End-to-end monitoring, optimization and operational support for enterprise technology environments.',
    details: [
      '24/7 Technical Support',
      'Infrastructure Monitoring',
      'Performance Optimization',
      'Application Maintenance',
      'Security & Compliance'
    ]
  }
];

  return (
    <div className="w-full bg-slate-50">

      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto space-y-6 text-center">

          {/* <p className="text-sm uppercase tracking-[0.32em] text-slate-400 font-semibold">
            Services
          </p> */}

                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>

            <span className="text-xs uppercase tracking-[0.32em] text-sky-100 font-semibold">
              Services
            </span>
          </div>

       <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-snug break-words">
  Services designed for enterprise transformation.
</h1>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our service portfolio provides the depth needed to build, operate and support enterprise technology systems.
          </p>

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>

              <p className="text-base text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 text-sm text-slate-600">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="mt-1 text-[#0E90CF] font-bold">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-400 font-semibold">
              Ready to Get Started?
            </p>

            <h2 className="text-5xl sm:text-6xl font-black tracking-tight leading-tight">
              Let's Build Something Great Together
            </h2>

            <p className="text-lg text-slate-300">
              Our team is ready to help you transform your vision into reality. Get a free consultation today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link
               to="/contact"
               className="px-8 py-4 rounded-2xl bg-[#0E90CF] hover:bg-[#087db5] text-white font-bold transition-all inline-flex items-center justify-center"
             >
               Get Free Consultation
             </Link>

            {/* <button className="px-8 py-4 border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold rounded-full transition">
              Learn More
            </button> */}
          </div>

        </div>
      </section>

    </div>
  );
}