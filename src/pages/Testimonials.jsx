import React from 'react';
import { Link } from 'react-router-dom';

export default function TestimonialsPage() {

  const massiveList = [
    {
      n: "Devon Thorne",
      c: "Vanguard Logistics Systems",
      p: "High-Fidelity Fleet Monitor Layout",
      text: "The responsive interface configurations built by NexaTech completely transformed our device rendering workflows. Visual elements scale perfectly cross-device, eliminating row overlapping on mobile tracking monitors."
    },
    {
      n: "Clara Vance",
      c: "Aetherial Operations Networks",
      p: "Headless MERN Stack Healthcare Portal",
      text: "Our project required an independent frontend component ecosystem capable of showcasing heavy balance sheets neatly. This interface prototype maintained max fluid performance benchmarks throughout auditing."
    },
    {
      n: "Marcus Mercer",
      c: "Apex Software Frameworks",
      p: "Microservices Viewport Matrix",
      text: "Absolute precision concerning technical system mandates. They accurately transformed our rigid wireframe specifications into a modular, lightweight frontend design that scales seamlessly."
    },
    {
      n: "Elena Rostova",
      c: "Horizon Fintech Platforms",
      p: "Transaction Ledger Viewport Display",
      text: "NexaTech delivered an incredibly performant React dashboard that renders heavy financial datasets instantly. Their clean code structure made subsequent integration testing a breeze."
    },
    {
      n: "Julian Vance",
      c: "Nexus EdTech Ecosystems",
      p: "Interactive Learning Matrix UI",
      text: "The user onboarding flow designed by their team reduced interface friction by 40%. The utility-first Tailwind architecture keeps our page weights incredibly light and fast."
    },
    {
      n: "Aisha Rahman",
      c: "OmniRetail Digital Storefront",
      p: "Headless Storefront Frontend Build",
      text: "Blazing fast catalog transitions across all mobile screen viewports. Their team is highly technical, responsive, and understands how to optimize user navigation paths for conversion."
    }
  ];

  return (

    <div className="w-full bg-slate-50">

      {/* Hero Section */}
      <section className="py-24 px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0E90CF] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">

          <p className="text-sm uppercase tracking-[0.32em] text-slate-400 font-semibold">
            Client Success Stories
          </p>

          {/* <h1 className="text-5xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-tight max-w-5xl mx-auto">
            Trusted By Modern Enterprises
          </h1> */}

                           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-snug break-words">
   Trusted By Modern Enterprises
</h1>

          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Explore feedback from organizations that partnered with NexaTech Digital to accelerate transformation, modernize infrastructure and deliver scalable digital experiences.
          </p>

        </div>

      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-6 lg:px-8">

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {massiveList.map((item, i) => (

            <div
              key={i}
              className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-[#0E90CF]/40 transition-all duration-300"
            >

              {/* Top */}
              <div className="space-y-6">

                {/* Quote Icon */}
             <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 fill-current"
    viewBox="0 0 24 24"
  >
    <path d="M7.17 6A5.001 5.001 0 0 0 2 11v7h7v-7H6.08A3.001 3.001 0 0 1 9 8V6H7.17zm10 0A5.001 5.001 0 0 0 12 11v7h7v-7h-2.92A3.001 3.001 0 0 1 19 8V6h-1.83z"/>
  </svg>
</div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400">

                  {[...Array(5)].map((_, idx) => (
                    <svg
                      key={idx}
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}

                </div>

                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#0E90CF]/10 text-[#0E90CF] text-xs font-bold tracking-wide uppercase">
                  {item.p}
                </div>

                {/* Text */}
                <p className="text-base text-slate-600 leading-relaxed font-light italic">
                  "{item.text}"
                </p>

              </div>

              {/* Bottom */}
              <div className="pt-6 mt-6 border-t border-slate-100">

                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                  {item.n}
                </h3>

                <p className="text-sm text-[#0E90CF] font-bold mt-2">
                  Operations Audit Director
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  {item.c}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900 text-white">

        <div className="max-w-4xl mx-auto text-center space-y-6">

          <p className="text-sm uppercase tracking-[0.32em] text-slate-400 font-semibold">
            Let's Build Together
          </p>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Ready To Start Your Next Project?
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Partner with NexaTech Digital to create scalable enterprise solutions, modern digital experiences and high-performance technology systems.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#0E90CF] hover:bg-blue-600 rounded-full text-white font-bold transition-all duration-300"
          >
            Contact Our Team
          </Link>

        </div>

      </section>

    </div>

  );
}