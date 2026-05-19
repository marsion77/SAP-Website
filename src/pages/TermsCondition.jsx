import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsConditions() {

  const articles = [
    {
      h: 'Article 01: Interface Usage Boundaries',
      b: 'Users accessing this frontend layout template agree to execute structural check sweeps inside regular browser evaluation fields, refraining from deploying script routines aimed at flooding system rendering limits.'
    },
    {
      h: 'Article 02: Intellectual Asset Protection Protocols',
      b: 'The interface code configurations, modular component tree files, custom styling properties, and structural documentation layouts visible across this workspace remain the exclusive property of NexaTech Digital Corp.'
    },
    {
      h: 'Article 03: Service Specification Adjustments Framework',
      b: 'All delivery schedules, structural software models, and viewport configurations are regulated exclusively by parameters explicitly written into your team’s finalized physical Scope of Work (SOW).'
    },
    {
      h: 'Article 04: Intake Form Responsibility Mandates',
      b: 'Individuals submitting project scope indicators into our evaluation consoles must provide valid corporate email destinations and authentic project boundaries, shielding review lists from automated spam scripts.'
    },
    {
      h: 'Article 05: Limitation of Visual Layout Liability',
      b: 'NexaTech Digital holds no liability for layout display deviations, missing font parameters, or broken alignments caused by out-of-date web browser configurations used by end-review systems.'
    },
    {
      h: 'Article 06: Regulatory Code & Court Jurisdiction',
      b: 'Any legal layout claims, component property disputes, or platform framework coordination conflicts fall under the absolute jurisdiction of the state courts of California, without regard to regional law conflict rules.'
    }
  ];

  return (

    <div className="w-full bg-slate-50">

      {/* Hero Banner */}
      <section className="py-24 px-6 lg:px-8 bg-slate-900 text-white overflow-hidden relative">

        {/* Background Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0E90CF] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">

          <p className="text-sm uppercase tracking-[0.32em] text-slate-400 font-semibold">
            Legal Framework
          </p>

          {/* <h1 className="text-5xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-tight max-w-5xl mx-auto">
            Terms & Conditions
          </h1> */}

                           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-snug break-words">
   Terms & Conditions
</h1>

          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Review the operational policies, usage boundaries, legal protections and service governance standards associated with NexaTech Digital platforms and enterprise solutions.
          </p>

        </div>

      </section>

      {/* Content Section */}
      <section className="py-20 px-6 lg:px-8">

        <div className="max-w-5xl mx-auto space-y-8">

          {articles.map((art, i) => (

            <div
              key={i}
              className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300"
            >

              <div className="flex items-start gap-5">

                {/* Number */}
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-slate-900 text-white flex items-center justify-center text-lg font-black shadow-lg">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="space-y-4">

                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                    {art.h}
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed font-light">
                    {art.b}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900 text-white">

        <div className="max-w-4xl mx-auto text-center space-y-6">

          <p className="text-sm uppercase tracking-[0.32em] text-slate-400 font-semibold">
            Need Clarification?
          </p>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Our Team Can Help
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            For additional information regarding our legal frameworks, service agreements or operational policies, connect with our support team directly.
          </p>

         <Link
  to="/contact"
  className="inline-flex items-center justify-center px-8 py-4 bg-[#0E90CF] hover:bg-blue-600 rounded-full text-white font-bold transition-all duration-300"
>
  Contact Support
</Link>

        </div>

      </section>

    </div>

  );
}