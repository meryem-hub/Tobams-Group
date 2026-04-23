// components/Footer.js
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { RiMapPinLine } from 'react-icons/ri';

const footerLinks = {
  'What We Do': [
    'Sustainability Services',
    'Strategy Planning',
    'Tech Talent Solutions',
    'Training & Development',
    'IT Consulting',
    'Social Impact'
  ],
  'Company': [
    'About Us',
    'Our Founder',
    'Projects',
    'Blog',
    'FAQs',
    'Testimonials'
  ],
  'Resources': [
    'TG Academy',
    'Campus Ambassadors',
    'Join Platform',
    'Pricing',
    'Book Consultation',
    'Slack Community'
  ]
};

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0508] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A0A15] via-transparent to-[#0A0508]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EF4353] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#571244] opacity-5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-[1312px] mx-auto px-6 lg:px-8">
        
        <div className="py-20">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            
            <div className="lg:w-[32%] space-y-5">
              <div className="relative inline-block">
                <Image 
                  src="/Logo.png" 
                  alt="Tobams Group" 
                  width={200} 
                  height={200} 
                />
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                TOBAMS is reshaping tech talent development in Africa through innovation, expertise, and global perspective.
              </p>
              <div className="flex gap-4">
                <Link href="/" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#EF4353] hover:text-white hover:rotate-12 transition-all duration-300">
                  <FaLinkedinIn className="w-4 h-4" />
                </Link>
                <Link href="/" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#EF4353] hover:text-white hover:rotate-12 transition-all duration-300">
                  <FaXTwitter className="w-4 h-4" />
                </Link>
                <Link href="/" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#EF4353] hover:text-white hover:rotate-12 transition-all duration-300">
                  <FaInstagram className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, items]) => (
              <div key={title}>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1 h-5 bg-[#EF4353] rounded-full"></div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider">{title}</h4>
                </div>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <Link href="/" className="text-gray-500 text-sm hover:text-[#EF4353] transition-all duration-200 hover:pl-2 block">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-12 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div className="bg-gradient-to-r from-white/5 to-transparent rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-5 bg-[#EF4353] rounded-full"></div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">Global Presence</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-[#EF4353]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#EF4353]/20 transition-all">
                    <RiMapPinLine className="w-5 h-5 text-[#EF4353]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold mb-1">United Kingdom</p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      07451196<br />
                      Vine Cottages, 215 North Street<br />
                      Romford, Essex, RM1 4QA
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-[#EF4353]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#EF4353]/20 transition-all">
                    <RiMapPinLine className="w-5 h-5 text-[#EF4353]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold mb-1">Nigeria</p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      RC 1048722<br />
                      4, Muaz Close, Angwar-Rimi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-l from-white/5 to-transparent rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-5 bg-[#EF4353] rounded-full"></div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">Connect With Us</h4>
              </div>
              <div className="space-y-4">
                <Link href="mailto:theteam@tobamsgroup.com" className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-[#EF4353]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <AiOutlineMail className="w-5 h-5 text-[#EF4353]" />
                  </div>
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">theteam@tobamsgroup.com</span>
                </Link>
                <Link href="tel:+447886600748" className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-[#EF4353]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <AiOutlinePhone className="w-5 h-5 text-[#EF4353]" />
                  </div>
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">+447886600748</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="text-gray-600 text-xs">© 2026 Tobams Group</span>
            <span className="text-gray-600 text-xs">All rights reserved</span>
          </div>
          <div className="flex gap-8">
            <Link href="/" className="text-gray-600 text-xs hover:text-[#EF4353] transition-colors">Terms & Conditions</Link>
            <Link href="/" className="text-gray-600 text-xs hover:text-[#EF4353] transition-colors">Privacy Policy</Link>
            <Link href="/" className="text-gray-600 text-xs hover:text-[#EF4353] transition-colors">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}