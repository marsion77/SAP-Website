import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FAQPage() {

  const [openIndex, setOpenIndex] = useState(null);

  const massiveFaqs = [
    {
      q: "How are active development sprint blocks scheduled within project lifecycles?",
      a: "We operate inside rigid two-week agile sprint tracks. Each cycle block maps out set functional page specifications, concluding with an immutable frontend code version clearance visible via staging mirror links."
    },
    {
      q: "What parameters calculate the project investment tiers for static view configurations?",
      a: "Pricing maps directly to the absolute volume of sanctioned pages and the complexity thresholds of target component element structures established in the approved Scope of Work (SOW)."
    },
    {
      q: "What channels ensure technical support presence during review demonstrations?",
      a: "Our engineering department establishes dedicated hot-standby support rows during client demonstration cycles to guarantee instant layout adaptability updates if viewport display failures occur."
    },
    {
      q: "Why do your engineering frameworks prioritize React.js and Tailwind CSS over alternative styling methods?",
      a: "React allows our developers to organize highly reusable component directories that eliminate document node memory errors, while Tailwind utility settings bypass bulky CSS configurations to preserve instant screen loading speeds."
    },
    {
      q: "Can delivery milestone charts adjust if page scope boundaries shift mid-sprint?",
      a: "Mid-sprint parameter increases require a formal scope alignment checkpoint, recalculating active script delivery goals cleanly against remaining tracking resource arrays safely."
    },
    {
      q: "How do your developers prevent script regression within legacy interface packages?",
      a: "We lock down project dependency trees to absolute, verified package releases within configuration settings, blocking arbitrary background engine updates that could disrupt runtime code harmony."
    },
    {
      q: "What security frameworks protect source repositories during engineering sequences?",
      a: "All application source code models run in private, encrypted code directories, requiring strict multi-factor checks and automated package code check passes before code merges."
    },
    {
      q: "Who acts as our direct technical interface manager during active tracking phases?",
      a: "A assigned Technical Systems Lead coordinates layout operations directly, providing regular structural summaries while avoiding long administrative feedback pathways."
    },
    {
      q: "How do you verify layout alignment parameters across older mobile device viewports?",
      a: "Component configurations undergo rigorous testing across emulation matrix displays, checking that percentage widths, flex blocks, and font tracking variables align flawlessly under smartphone views."
    },
    {
      q: "What protocols compress graphics payload parameters within asset tracking trees?",
      a: "We enforce absolute encoding rules, translating graphic images into lightweight WebP models, combined with lazy-loading hooks to keep initial page weights minimal."
    }
  ];

  return (

    <div className="w-full bg-slate-50">

      {/* Hero Section */}
      <section className="py-24 px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0E90CF] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">

          <p className="text-sm uppercase tracking-[0.32em] text-slate-400 font-semibold">
            Support Center
          </p>

          {/* <h1 className="text-5xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-tight max-w-5xl mx-auto">
            Frequently Asked Questions
          </h1> */}

                           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-snug break-words">
   Frequently Asked Questions
</h1>

          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Explore answers related to development workflows, delivery structures, technical frameworks, support systems and operational service standards.
          </p>

        </div>

      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-8">

        <div className="max-w-5xl mx-auto space-y-5">

          {massiveFaqs.map((faq, idx) => (

            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#0E90CF]/40 transition-all duration-300"
            >

              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between gap-6 text-left hover:bg-slate-50 transition-all"
              >

                <div className="flex items-start gap-5">

                  {/* Number */}
                  <div className="min-w-[52px] h-[52px] rounded-2xl bg-slate-900 text-white flex items-center justify-center text-sm font-black shadow-md">
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  {/* Question */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug">
                      {faq.q}
                    </h3>
                  </div>

                </div>

                {/* Icon */}
                <div className="min-w-[42px] h-[42px] rounded-full bg-[#0E90CF]/10 text-[#0E90CF] flex items-center justify-center text-2xl font-bold">
                  {openIndex === idx ? '−' : '+'}
                </div>

              </button>

              {/* Answer */}
              {openIndex === idx && (

                <div className="px-6 md:px-8 pb-8">

                  <div className="ml-0 md:ml-[72px] border-t border-slate-100 pt-6">

                    <p className="text-base text-slate-600 leading-relaxed font-light">
                      {faq.a}
                    </p>

                  </div>

                </div>

              )}

            </div>

          ))}

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900 text-white">

        <div className="max-w-4xl mx-auto text-center space-y-6">

          <p className="text-sm uppercase tracking-[0.32em] text-slate-400 font-semibold">
            Still Need Help?
          </p>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Connect With Our Support Team
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Our technical and operational support specialists are available to help you with project inquiries, service guidance and enterprise solution discussions.
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