'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function TGAcademy() {
  return (
    <section className="w-full py-16 bg-[#5712441A] my-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 flex justify-start">
            <div className="relative w-full max-w-lg aspect-square rounded-full overflow-hidden shadow-xl">
              <Image
                src="/poster.jpg"
                alt="Learning Management System - TG Academy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-[#151515] text-3xl md:text-4xl font-bold mb-4">
              Learning Management System
            </h2>

            <div className="bg-[#57124433] p-6 rounded-lg mb-6">
              <p className="text-[#333333] text-base leading-relaxed mb-6">
                TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape.
              </p>

              <h3 className="text-[#151515] text-lg font-semibold mb-3">
                Some of our courses include:
              </h3>

              <div>
                <div className="grid grid-cols-3 gap-x-4 gap-y-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#571244] rounded-full"></div>
                    <span className="text-[#333333] text-sm">Business Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#571244] rounded-full"></div>
                    <span className="text-[#333333] text-sm">Design Thinking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#571244] rounded-full"></div>
                    <span className="text-[#333333] text-sm">Effective Communication</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#571244] rounded-full"></div>
                    <span className="text-[#333333] text-sm">Entrepreneurship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#571244] rounded-full"></div>
                    <span className="text-[#333333] text-sm">Career Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#571244] rounded-full"></div>
                    <span className="text-[#333333] text-sm">Business Model</span>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#571244] text-white font-medium rounded-md hover:bg-[#461036] transition-colors px-6 py-3"
            >
              Learn More
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M7 7h10v10M17 7L7 17" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}