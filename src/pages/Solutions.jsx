import React from 'react';
import { Link } from 'react-router-dom';
export default function Solutions() {

  const solutions = [
    {
      title: 'SAP Solutions',
      subtitle: 'Enterprise ERP & Business Process Transformation',
      description:
        'We help enterprises modernize operations with SAP-powered digital transformation solutions focused on automation, analytics, scalability and operational efficiency.',

      services: [
        'SAP S/4HANA Implementation',
        'SAP Fiori UI/UX Development',
        'SAP Migration & Modernization',
        'SAP Integration Services',
        'SAP Managed Support',
        'Business Process Automation'
      ],

      benefits: [
        'Centralized enterprise operations',
        'Real-time business analytics',
        'Improved operational efficiency',
        'Scalable ERP architecture',
        'Reduced manual workflows'
      ]
    },

    {
      title: 'Salesforce Solutions',
      subtitle: 'CRM, Customer Engagement & Sales Automation',
      description:
        'Our Salesforce solutions help organizations streamline customer engagement, automate workflows and improve sales visibility across the entire customer lifecycle.',

      services: [
        'Salesforce CRM Implementation',
        'Sales Cloud Solutions',
        'Service Cloud Integration',
        'Marketing Automation',
        'Custom Salesforce Development',
        'Salesforce Consulting & Support'
      ],

      benefits: [
        'Improved customer engagement',
        'Automated sales workflows',
        'Higher lead conversion rates',
        'Unified customer data',
        'Better business forecasting'
      ]
    },

    {
      title: 'Microsoft Dynamics Solutions',
      subtitle: 'Connected Business Applications & ERP Systems',
      description:
        'We implement Microsoft Dynamics solutions that connect finance, operations, customer service and supply chain processes into a unified digital ecosystem.',

      services: [
        'Dynamics 365 Implementation',
        'Finance & Operations',
        'Business Central Solutions',
        'Power Platform Integration',
        'Dynamics CRM Customization',
        'ERP Migration & Support'
      ],

      benefits: [
        'Connected enterprise systems',
        'Better financial visibility',
        'Improved operational control',
        'Automated reporting workflows',
        'Cloud-ready business applications'
      ]
    }
  ];

  return (
    <div className="w-full bg-[#f8fbff]">

      {/* HERO SECTION */}
      <section className="bg-slate-900 text-white py-24 px-6 lg:px-8">

        <div className="max-w-7xl mx-auto text-center">

          {/* <p className="text-sm uppercase tracking-[0.32em] text-slate-400 font-semibold">
            Enterprise Solutions
          </p> */}

                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>

            <span className="text-xs uppercase tracking-[0.32em] text-sky-100 font-semibold">
              Enterprise Solutions
            </span>
          </div>

<div className="flex flex-col items-center text-center px-4">
  <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-snug break-words max-w-3xl">
    Enterprise platforms built for digital transformation.
  </h1>
</div>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We deliver enterprise-grade SAP, Salesforce and Microsoft Dynamics
            solutions that streamline operations, improve customer engagement
            and accelerate business growth.
          </p>

        </div>

      </section>

      {/* SOLUTIONS SECTION */}
      <section className="py-24 px-6 lg:px-8">

        <div className="max-w-7xl mx-auto space-y-10">

          {solutions.map((solution, index) => (

            <div
              key={index}
              className="bg-white border border-slate-200 rounded-[2rem] p-8 lg:p-12 shadow-sm hover:shadow-xl transition duration-300"
            >

              <div className="grid lg:grid-cols-2 gap-12">

                {/* LEFT */}
                <div>

                  <p className="text-sm uppercase tracking-[0.28em] text-[#0E90CF] font-bold">
                    Enterprise Solution
                  </p>

                  <h2 className="mt-4 text-4xl font-black text-slate-900 tracking-tight">
                    {solution.title}
                  </h2>

                  <h3 className="mt-3 text-xl text-slate-600 font-semibold">
                    {solution.subtitle}
                  </h3>

                  <p className="mt-6 text-base text-slate-600 leading-relaxed">
                    {solution.description}
                  </p>

                </div>

                {/* RIGHT */}
                <div className="grid sm:grid-cols-2 gap-8">

                  {/* SERVICES */}
                  <div>

                    <h4 className="text-lg font-bold text-slate-900 mb-5">
                      Core Services
                    </h4>

                    <ul className="space-y-4">

                      {solution.services.map((service) => (
                        <li
                          key={service}
                          className="flex items-start gap-3 text-slate-600"
                        >
                          <span className="text-[#0E90CF] font-black mt-1">
                            •
                          </span>

                          <span className="leading-relaxed">
                            {service}
                          </span>
                        </li>
                      ))}

                    </ul>

                  </div>

                  {/* BENEFITS */}
                  <div>

                    <h4 className="text-lg font-bold text-slate-900 mb-5">
                      Business Benefits
                    </h4>

                    <ul className="space-y-4">

                      {solution.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-3 text-slate-600"
                        >
                          <span className="text-emerald-500 font-black mt-1">
                            ✓
                          </span>

                          <span className="leading-relaxed">
                            {benefit}
                          </span>
                        </li>
                      ))}

                    </ul>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* DIGITAL TRANSFORMATION SECTION */}
      <section className="py-24 bg-slate-50 px-6 lg:px-8">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-4xl mx-auto">

            <p className="text-sm uppercase tracking-[0.32em] text-slate-500 font-semibold">
              Digital Transformation
            </p>

            <h2 className="mt-5 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Helping enterprises modernize legacy operations.
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Our enterprise solutions combine ERP, CRM, cloud integration,
              workflow automation and analytics to help businesses improve
              efficiency, scalability and customer experience.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-16">

            {[
              'Enterprise Automation',
              'Cloud Migration',
              'Workflow Optimization',
              'Business Intelligence',
              'ERP Modernization',
              'Customer Experience',
              'Secure Integrations',
              'Scalable Architecture'
            ].map((item) => (

              <div
                key={item}
                className="bg-white border border-slate-200 rounded-3xl p-8 text-center hover:shadow-lg transition duration-300"
              >

                <h3 className="text-lg font-bold text-slate-900">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="bg-slate-900 text-white py-24 px-6 lg:px-8">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-sm uppercase tracking-[0.32em] text-slate-400 font-semibold">
            Let's Build Together
          </p>

          <h2 className="mt-5 text-5xl sm:text-6xl font-black tracking-tight leading-tight">
            Ready to modernize your enterprise systems?
          </h2>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Transform your operations with scalable SAP, Salesforce and
            Microsoft Dynamics solutions tailored to your business goals.
          </p>

          <div className="mt-10 flex justify-center">

             <Link
               to="/contact"
               className="px-8 py-4 rounded-2xl bg-[#0E90CF] hover:bg-[#087db5] text-white font-bold transition-all inline-flex items-center justify-center"
             >
               Contact Our Team
             </Link>

          </div>

        </div>

      </section>

    </div>
  );
}