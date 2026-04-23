// components/Management.js
'use client';

import Image from 'next/image';
import { BoltIcon } from '@heroicons/react/24/solid';

export default function Management() {
  return (
    <section className="w-full py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#2C0922] rounded-3xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image - Left */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[8px] overflow-hidden w-[592px] h-[639px]">
                <Image
                  src="/image4.png"
                  alt="Management Development Program"
                  width={592}
                  height={639}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Text Content - Right */}
            <div className="lg:w-1/2">
              <h2 className="text-white text-[40px] font-semibold leading-[150%] tracking-[3%] mb-4">
                Management Development Program
              </h2>
              <p className="text-white/80 text-[18px] font-normal leading-[150%] tracking-normal mb-4">
                Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high-performing leaders they need to thrive.
              </p>
              <p className="text-white/80 text-[18px] font-normal leading-[150%] tracking-normal mb-6">
                Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities designed to improve leadership, strategic thinking, communication, and other essential managerial competencies for corporate organisations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 bg-[#8F6182] rounded-lg px-4 py-2">
                  <BoltIcon className="w-4 h-4 text-white" />
                  <span className="text-white text-[18px] font-normal leading-[150%]">Enhanced Leadership Skills</span>
                </li>
                <li className="flex items-center gap-3 bg-[#8F6182] rounded-lg px-4 py-2">
                  <BoltIcon className="w-4 h-4 text-white" />
                  <span className="text-white text-[18px] font-normal leading-[150%]">Improved Employee Engagement</span>
                </li>
                <li className="flex items-center gap-3 bg-[#8F6182] rounded-lg px-4 py-2">
                  <BoltIcon className="w-4 h-4 text-white" />
                  <span className="text-white text-[18px] font-normal leading-[150%]">Stronger Organisational Culture</span>
                </li>
                <li className="flex items-center gap-3 bg-[#8F6182] rounded-lg px-4 py-2">
                  <BoltIcon className="w-4 h-4 text-white" />
                  <span className="text-white text-[18px] font-normal leading-[150%]">Sustainable Growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}