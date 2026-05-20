import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebook />, url: "https://www.facebook.com" },
  { icon: <FaYoutube />, url: "https://www.youtube.com" },
  { icon: <FaInstagram />, url: "https://www.instagram.com" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com" }
];

export default function Footer() {

  // const socialLinks = [
  //   {
  //     name: "facebook",
  //     url: "https://www.facebook.com",
  //     icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
  //   },
  //   {
  //     name: "youtube",
  //     url: "https://www.youtube.com",
  //     icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
  //   },
  //   {
  //     name: "instagram",
  //     url: "https://www.instagram.com",
  //     icon: "M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5z"
  //   },
  //   {
  //     name: "linkedin",
  //     url: "https://www.linkedin.com",
  //     icon: "M4.983 3.5C4.983 4.604 4.104 5.5 3 5.5S1.017 4.604 1.017 3.5 1.896 1.5 3 1.5s1.983.896 1.983 2zM1.5 8h3V22h-3V8zm7 0h2.879v1.909h.041C11.82 8.918 13.337 8 15.281 8 19.28 8 20 10.627 20 14.045V22h-3v-6.955c0-1.659-.03-3.791-2.309-3.791-2.309 0-2.663 1.804-2.663 3.673V22h-3V8z"
  //   }
  // ];

  return (
    <footer className="w-full bg-[#03141a] text-slate-300 pt-16 pb-8 sm:pt-20 sm:pb-10 px-4 sm:px-6 lg:px-12 relative z-20 overflow-hidden">

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-slate-900 via-[#0b4d74] to-[#0E90CF] rounded-[2.5rem] px-8 py-8 md:px-12 md:py-10 flex flex-col lg:flex-row items-center justify-between gap-8 mb-20 shadow-2xl relative overflow-hidden border border-white/10">

        <div className="relative z-10 max-w-2xl text-center lg:text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-blue-100 font-semibold mb-3">
            Let’s Build Together
          </p>

          <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
            Ready to Transform Your Digital Presence?
          </h3>

          <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
            Partner with Nexvora Technologies to build scalable,
            high-performance digital solutions engineered for modern businesses.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="px-7 py-3.5 rounded-2xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-all shadow-xl"
          >
            Book Free Consultation
          </Link>

          <Link
            to="/services"
            className="px-7 py-3.5 rounded-2xl border border-white/30 text-white font-bold text-sm hover:bg-white hover:text-slate-900 transition-all"
          >
            Explore Services
          </Link>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-16 lg:gap-20 pb-16 border-b border-slate-800">

        {/* Company Info */}
        <div className="md:col-span-4 space-y-7">

         <Link to="/" className="text-xl text-white sm:text-2xl font-black tracking-tight text-slate-900">
                     NexaTech<span className="text-[#0E90CF]">Digital</span>
                   </Link>

          <p className="text-sm text-slate-400 leading-7 max-w-full">
            NexaTech Digital delivers scalable enterprise software,
            modern web platforms, cloud-native systems, and digital
            transformation solutions for businesses worldwide.
          </p>

          {/* Social Icons */}
          <div className="space-y-4">
            <h5 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500">
              Follow Us
            </h5>

           <div className="flex gap-4">
  {socialLinks.map((item, idx) => (
    <a
      key={idx}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-900 border border-slate-700 text-[#0E90CF] hover:bg-[#0E90CF] hover:text-white transition-all"
    >
      {item.icon}
    </a>
  ))}
</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-3 space-y-6">

          <h4 className="text-lg font-black text-[#0E90CF] uppercase tracking-wider">
            Contact Info
          </h4>

          <div className="space-y-6 text-base text-slate-400 leading-7">

            <div className="flex items-start gap-4">
              <span className="text-[#0E90CF] text-xl">📍</span>
              <p>
                NexaTech Digital Pvt Ltd<br />
                3rd Floor, Tech Park Avenue,<br />
                OMR Road, Chennai,<br />
                Tamil Nadu – 600096,<br />
                India
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[#0E90CF] text-xl">📞</span>
              <div>
                <p>0413-2240580</p>
                <p>+91 98438 31580</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[#0E90CF] text-xl">✉️</span>
              <p>info@nexvoratechnologies.com</p>
            </div>

          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2 space-y-6">

          <h4 className="text-lg font-black text-[#0E90CF] uppercase tracking-wider">
            Quick Links
          </h4>

          <ul className="space-y-4 text-base text-slate-400">
            {["Home", "About Us", "Services", "Solutions", "Careers", "Contact Us"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase().replace(" ", "")}`}
                  className="hover:text-white transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

        </div>

        {/* Legal */}
        <div className="md:col-span-3 space-y-6">

          <h4 className="text-lg font-black text-[#0E90CF] uppercase tracking-wider">
            Legal
          </h4>

          <ul className="space-y-4 text-base text-slate-400">
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/testimonials" className="hover:text-white">Testimonials</Link></li>
          </ul>

          <div className="pt-6 border-t border-slate-800 space-y-3">
            <h5 className="text-sm font-bold uppercase tracking-[0.25em] text-[#0E90CF]">
              Office Hours
            </h5>

            <p className="text-sm text-slate-400">
              Monday – Saturday<br />
              9:30 AM – 7:00 PM
            </p>
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto pt-8 text-center">
        <p className="text-sm text-slate-500">
          © 2026 Nexvora Technologies. All rights reserved.
        </p>
      </div>

    </footer>
  );
}