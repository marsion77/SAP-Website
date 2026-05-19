import React, { useEffect, useMemo, useState } from 'react';
import counter from "../utils/Counter"
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import vueLogo from '../assets/vue.svg';
import angularLogo from '../assets/angular.svg';
import nextjsLogo from '../assets/nextjs.svg';
import tailwindLogo from '../assets/tailwind.svg';
import nodeLogo from '../assets/nodejs.svg';
import expressLogo from '../assets/expressjs.svg';
import pythonLogo from '../assets/python.svg';
import javaLogo from '../assets/java.svg';
import nestLogo from '../assets/nestjs.svg';
import reactNativeLogo from '../assets/reactnative.svg';
import flutterLogo from '../assets/flutter.svg';
import swiftLogo from '../assets/swift.svg';
import kotlinLogo from '../assets/kotlin.svg';
import ionicLogo from '../assets/ionic.svg';
import androidLogo from '../assets/android.svg';
import iosLogo from '../assets/ios.svg';
import xamarinLogo from '../assets/xamarin.svg';
import wordpressLogo from '../assets/wordpress.svg';
import mongodbLogo from '../assets/mongodb.svg';
import postgresqlLogo from '../assets/postgresql.svg';
import mysqlLogo from '../assets/mysql.svg';
import redisLogo from '../assets/redis.svg';
import shopifyLogo from '../assets/shopify.svg';
import woocommerceLogo from '../assets/woocommerce.svg';
import magentoLogo from '../assets/magento.svg';
import awsLogo from '../assets/aws.svg';
import dockerLogo from '../assets/docker.svg';
import kubernetesLogo from '../assets/kubernetes.svg';
import cicdLogo from '../assets/cicd.svg';
import terraformLogo from '../assets/terraform.svg';
import Counter from '../utils/Counter';

export default function Home() {
  const heroImages = [
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80'
  ];

  const [heroSlide, setHeroSlide] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeTechTab, setActiveTechTab] = useState('Front End');

  const whyCards = [
    {
      title: 'Custom Solutions',
      description: 'Tailored enterprise software, SaaS products and scalable digital platforms.'
    },
    {
      title: 'Flexible Hiring',
      description: 'Dedicated developers for hourly, part-time and full-time engagement.'
    },
    {
      title: 'Cost Efficient',
      description: 'High-quality engineering delivery with optimized operational cost.'
    },
    {
      title: 'Client Focused',
      description: 'Business-first planning with agile execution and transparent communication.'
    },
    {
      title: 'Scalable Systems',
      description: 'Cloud-native applications with API-first architecture and modern deployment.'
    },
    {
      title: 'Quality Driven',
      description: 'Performance-focused development with testing and continuous improvements.'
    }
  ];

  const services = [
    {
      title: 'Web Application',
      icon: '💻',
      description: 'Custom web platforms with scalable architecture.'
    },
    {
      title: 'Mobile Application',
      icon: '📱',
      description: 'Cross-platform mobile apps with polished user experience.'
    },
    {
      title: 'Website Development',
      icon: '🌐',
      description: 'Responsive modern websites for growing brands.'
    },
    {
      title: 'Frontend Development',
      icon: '⚛️',
      description: 'Fast and engaging interfaces using modern frameworks.'
    },
    {
      title: 'Backend Development',
      icon: '🔧',
      description: 'Secure APIs and reliable server-side systems.'
    },
    {
      title: 'Ecommerce Solutions',
      icon: '🛒',
      description: 'Modern ecommerce experiences with payment integrations.'
    },
    {
      title: 'UI/UX Design',
      icon: '🎨',
      description: 'User-focused interfaces designed for better engagement.'
    },
    {
      title: 'Hire Developers',
      icon: '👨‍💻',
      description: 'Dedicated engineering teams for rapid project delivery.'
    }
  ];

  const techSections = [
    {
      id: 'Mobile',
      label: 'Mobile',
      items: ['Android', 'iOS', 'Swift', 'Flutter', 'React Native', 'Kotlin']
    },
    {
      id: 'Front End',
      label: 'Front End',
      items: ['React', 'Vue', 'Angular', 'Next.js', 'Tailwind CSS']
    },
    {
      id: 'Backend',
      label: 'Backend',
      items: ['Express', 'Python', 'Java', 'Nest.js']
    },
    {
      id: 'Database',
      label: 'Database',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
    },
    {
      id: 'DevOps',
      label: 'DevOps',
      items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']
    }
  ];

  const techLogoMap = {
    Android: androidLogo,
    iOS: iosLogo,
    Swift: swiftLogo,
    Flutter: flutterLogo,
    'React Native': reactNativeLogo,
    Kotlin: kotlinLogo,
    React: reactLogo,
    Vue: vueLogo,
    Angular: angularLogo,
    'Next.js': nextjsLogo,
    'Tailwind CSS': tailwindLogo,
    Express: expressLogo,
    Python: pythonLogo,
    Java: javaLogo,
    'Nest.js': nestLogo,
    MongoDB: mongodbLogo,
    PostgreSQL: postgresqlLogo,
    MySQL: mysqlLogo,
    Redis: redisLogo,
    AWS: awsLogo,
    Docker: dockerLogo,
    Kubernetes: kubernetesLogo,
    'CI/CD': cicdLogo,
    Terraform: terraformLogo
  };

  const testimonials = [
    {
      name: 'Mr.Arjun Mehta',
      company: 'Vertex Retail Solutions',
      quote: 'Excellent project execution with smooth communication and timely delivery.',
      role: 'Marketplace Platform'
    },
    {
      name: 'Georgia Pizzarelli',
      company: 'Vanguard Property Networks',
      quote: 'The application experience became faster, cleaner and easier for our users.',
      role: 'Real Estate Portal'
    },
    {
      name: 'Andrzej Ciesielski',
      company: 'Alpha Investment Analytics',
      quote: 'Strong technical delivery and highly professional engineering support.',
      role: 'Analytics Dashboard'
    }
  ];

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setHeroSlide((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(heroTimer);
  }, []);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setTestimonialIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(testimonialTimer);
  }, []);

  return (
    <div className="w-full bg-[#f7fbff]">


   {/* HERO SECTION */}
<section className="relative overflow-hidden bg-[#06131f] min-h-[100vh] py-24 flex items-center">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full"></div>

  {/* Grid Overlay */}
  <div className="absolute inset-0 opacity-[0.04]">
    <div
      className="w-full h-full"
      style={{
        backgroundImage:
          'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}
    ></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">

    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* LEFT CONTENT */}
      <div>

        <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>

          <span className="text-xs uppercase tracking-[0.3em] text-slate-200 font-semibold">
            Enterprise Software Solutions
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl xl:text-5xl font-black leading-[1.25] tracking-tight text-white max-w-3xl">
          Transform ideas into scalable digital platforms.
        </h1>

        <p className="mt-8 text-lg leading-relaxed text-slate-300 max-w-2xl">
          We build enterprise applications, cloud platforms, SAP solutions and modern digital products engineered for performance, security and long-term growth.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 mt-10">

          <Link
            to="/services"
            className="px-8 py-4 bg-[#0E90CF] hover:bg-[#0b7eb5] text-white rounded-2xl font-bold transition-all duration-300 shadow-2xl shadow-cyan-500/20"
          >
            Explore Services
          </Link>

          <Link
            to="/contact"
            className="px-8 py-4 border border-white/15 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-2xl font-bold transition-all duration-300"
          >
            Book Consultation
          </Link>

        </div>

        {/* Bottom Stats */}
     <div className="flex flex-wrap gap-10 mt-14">

  <div>
    <h3 className="text-3xl font-black text-white">
      <Counter end={500} suffix="+" />
    </h3>
    <p className="text-slate-400 text-sm mt-1">
      Projects Delivered
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-black text-white">
      <Counter end={98} suffix="%" />
    </h3>
    <p className="text-slate-400 text-sm mt-1">
      Client Satisfaction
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-black text-white">
      <Counter end={24} suffix="/7" />
    </h3>
    <p className="text-slate-400 text-sm mt-1">
      Technical Support
    </p>
  </div>

</div>

      </div>

      {/* RIGHT SIDE */}
      <div className="relative hidden lg:flex items-center justify-center">

        {/* Main Card */}
        <div className="relative w-full max-w-[560px] rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-xl p-8 shadow-2xl">

          <div className="flex items-center justify-between border-b border-white/10 pb-5">

            <div>
              <p className="text-sm text-slate-300">
                Active Infrastructure
              </p>

              <h3 className="text-2xl font-black text-white mt-1">
                Cloud Ecosystem
              </h3>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-300 text-2xl">
              ☁️
            </div>

          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-3 gap-4 mt-8">

            {[
              { name: 'React', logo: reactLogo },
              { name: 'Node', logo: nodeLogo },
              { name: 'MongoDB', logo: mongodbLogo },
              { name: 'AWS', logo: awsLogo },
              { name: 'Docker', logo: dockerLogo },
              { name: 'Python', logo: pythonLogo }
            ].map((tech) => (
              <div
                key={tech.name}
                className="rounded-2xl bg-white/5 border border-white/10 p-5 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300"
              >

                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-12 h-12 object-contain"
                />

                <p className="text-sm text-slate-200 font-semibold mt-3">
                  {tech.name}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Floating Cards */}
        <div className="absolute -top-8 -left-10 bg-[#0E90CF] text-white rounded-2xl p-5 shadow-2xl animate-bounce">

          <p className="text-xs uppercase tracking-wide opacity-80">
            Deployment
          </p>

          <h4 className="text-2xl font-black mt-1">
            CI/CD
          </h4>

        </div>

        <div className="absolute -bottom-10 right-0 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl">

          <p className="text-xs uppercase tracking-wide text-slate-500">
            Enterprise
          </p>

          <h4 className="text-2xl font-black mt-1">
            SAP + Cloud
          </h4>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500 font-semibold">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Engineering focused on business growth.
            </h2>

            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              We combine design, development and scalable architecture to deliver reliable digital experiences.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0E90CF] to-[#074b77] text-white flex items-center justify-center text-lg font-black">
                  {idx + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>



            {/* TECHNOLOGY STACK */}
      <section className="py-20 bg-slate-50 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500 font-semibold">
              Technology Stack
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Modern technologies powering every solution.
            </h2>

            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              We use scalable frontend, backend, mobile and DevOps technologies to build secure and future-ready digital products.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {techSections.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTechTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTechTab === tab.id
                    ? 'bg-[#0E90CF] text-white shadow-lg'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-[#0E90CF]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tech Cards */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

            {techSections
              .find((tab) => tab.id === activeTechTab)
              ?.items.map((item) => (
                <div
                  key={item}
                  className="group bg-white border border-slate-200 rounded-[2rem] p-7 text-center hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                >

                  <div className="mx-auto w-20 h-20 rounded-3xl bg-slate-100 flex items-center justify-center group-hover:bg-sky-50 transition-all">

                    {techLogoMap[item] ? (
                      <img
                        src={techLogoMap[item]}
                        alt={item}
                        className="w-12 h-12 object-contain"
                      />
                    ) : (
                      <span className="text-sm font-bold text-slate-900">
                        {item}
                      </span>
                    )}

                  </div>

                  <h3 className="mt-5 text-base font-bold text-slate-900">
                    {item}
                  </h3>

                </div>
              ))}

          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white px-6 lg:px-8">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500 font-semibold">
              Testimonials
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Trusted by businesses worldwide.
            </h2>
          </div>

          <div className="bg-[#071c2f] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">

            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">

              <div>

                <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 rounded-full px-5 py-2 text-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  Client Feedback
                </div>

                <p className="mt-8 text-2xl leading-relaxed font-semibold text-white">
                  “{testimonials[testimonialIndex].quote}”
                </p>

                <div className="mt-8">
                  <h4 className="text-xl font-bold">
                    {testimonials[testimonialIndex].name}
                  </h4>

                  <p className="text-slate-300 mt-1">
                    {testimonials[testimonialIndex].company}
                  </p>
                </div>

              </div>

              <div className="bg-white/10 border border-white/10 rounded-[2rem] p-8 backdrop-blur-md">

                <div className="text-6xl font-black text-cyan-300">“</div>

                <h3 className="mt-4 text-2xl font-bold text-white">
                  {testimonials[testimonialIndex].role}
                </h3>

                <p className="mt-4 text-slate-200 leading-relaxed">
                  We focus on scalable architecture, smooth communication and long-term engineering support for every project we deliver.
                </p>

                <div className="flex gap-3 mt-8">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setTestimonialIndex(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        testimonialIndex === idx
                          ? 'w-10 h-3 bg-white'
                          : 'w-3 h-3 bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white px-6 lg:px-8">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500 font-semibold">
              Our Services
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Full-stack digital solutions.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-slate-200 bg-[#f8fbff] p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[#0E90CF] to-[#083d63] flex items-center justify-center text-3xl text-white">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}