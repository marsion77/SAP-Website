import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {

  const points = [
    {
      h: '1. Technical Data Collection Models',
      b: 'We minimize platform telemetry tracking. NexaTech Digital only notes layout orientations, browser display string keys, and user input records logged inside our active contact intake scripts to evaluate cross-viewport visual parity metrics.'
    },
    {
      h: '2. Local Cookie Allocations & Markers',
      b: 'Our frontend deployment packages configure clean web identification cookie elements to lock in individual interface layout configurations, screen zoom metrics, and navigation preferences across path changes.'
    },
    {
      h: '3. Protection of Corporate Metadata',
      b: 'Any corporate branding titles, secure routing emails, or scope specifications inputted into our system terminals are held as private operational records and never released to outer marketing nodes.'
    },
    {
      h: '4. Isolation & Security Framework Guards',
      b: 'We employ rigid tracking isolation baselines. Collected data variables remain embedded inside local web storage containers to neutralize outer cross-site script harvesting risks.'
    },
    {
      h: '5. Third-Party Service Tracker Omissions',
      b: 'Our static deployment packages operate completely free of external marketing conversion pixels, pixel tracking systems, or central customer analytics tracking blocks.'
    },
    {
      h: '6. User Regulatory Rights & Powers',
      b: 'You retain full authority over your logged informational payloads. Users can wipe structural contact strings or flush browser local history parameters anytime to reset baseline states.'
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
            Privacy & Security
          </p>

          {/* <h1 className="text-5xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-tight max-w-5xl mx-auto">
            Privacy Policy
          </h1> */}

                           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-snug break-words">
   Privacy Policy
</h1>

          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Review how NexaTech Digital manages user information, browser-level data handling, operational privacy standards and secure platform governance practices.
          </p>

        </div>

      </section>

      {/* Policy Content */}
      <section className="py-20 px-6 lg:px-8">

        <div className="max-w-5xl mx-auto space-y-8">

          {points.map((p, i) => (

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
                    {p.h}
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed font-light">
                    {p.b}
                  </p>

                </div>

              </div>

            </div>

          ))}

          {/* Contact Box */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-10 text-white space-y-5">

            <p className="text-sm uppercase tracking-[0.32em] text-slate-400 font-semibold">
              Data Protection Office
            </p>

            <h3 className="text-3xl sm:text-4xl font-black tracking-tight">
              Privacy & Compliance Support
            </h3>

            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
              For additional information regarding privacy standards, operational compliance or user data requests, connect directly with our governance support team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0E90CF] hover:bg-blue-600 rounded-full text-white font-bold transition-all duration-300"
              >
                Contact Support
              </Link>

              <div className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 rounded-full text-slate-300 text-sm font-medium">
                protection.desk@nexatechdigital.io
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  );
}