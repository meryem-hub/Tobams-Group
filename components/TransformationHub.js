'use client';

import Image from 'next/image';
import { BoltIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function TransformationHub() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EF435333] rounded-3xl p-6 sm:p-8 md:p-12">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-[#1671D9] text-[18px] sm:text-[20px] font-semibold italic leading-[130%] tracking-normal mb-2">
              Learning With Our CEO:
            </h2>
            <h3 className="text-[#571244] text-[24px] sm:text-[28px] md:text-[32px] font-semibold italic leading-[130%] tracking-normal">
              Transformation Hub With Jite Newton
            </h3>
          </div>

          <p className="text-[#333333] text-[16px] sm:text-[18px] font-normal leading-[150%] tracking-normal mb-6 sm:mb-8">
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you're seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
          </p>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="lg:w-1/2 flex justify-center w-full">
              <div className="rounded-[8px] overflow-hidden w-full max-w-[560px] h-auto aspect-[560/340]">
                <Image
                  src="/image5.png"
                  alt="Transformation Hub With Jite Newton"
                  width={560}
                  height={340}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="w-full max-w-[640px] rounded-lg gap-6 p-2 sm:p-3 bg-[#FFFFFF4D]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white rounded-xl px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-2.5 w-full h-[50px] sm:h-[60px]">
                    <BoltIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#DDD0DA] flex-shrink-0" />
                    <span className="text-[#333333] text-[14px] sm:text-[18px] font-normal leading-[150%] truncate">Strategic Career Guidance</span>
                  </div>
                  <div className="bg-white rounded-xl px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-2.5 w-full h-[50px] sm:h-[60px]">
                    <BoltIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#DDD0DA] flex-shrink-0" />
                    <span className="text-[#333333] text-[14px] sm:text-[18px] font-normal leading-[150%] truncate">Leadership Development</span>
                  </div>
                  <div className="bg-white rounded-xl px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-2.5 w-full h-[50px] sm:h-[60px]">
                    <BoltIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#DDD0DA] flex-shrink-0" />
                    <span className="text-[#333333] text-[14px] sm:text-[18px] font-normal leading-[150%] truncate">CV Development</span>
                  </div>
                  <div className="bg-white rounded-xl px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-2.5 w-full h-[50px] sm:h-[60px]">
                    <BoltIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#DDD0DA] flex-shrink-0" />
                    <span className="text-[#333333] text-[14px] sm:text-[18px] font-normal leading-[150%] truncate">Sustainability Leadership</span>
                  </div>
                  <div className="bg-white rounded-xl px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-2.5 w-full h-[50px] sm:h-[60px]">
                    <BoltIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#DDD0DA] flex-shrink-0" />
                    <span className="text-[#333333] text-[14px] sm:text-[18px] font-normal leading-[150%] truncate">Communication Skills</span>
                  </div>
                  <div className="bg-white rounded-xl px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-2.5 w-full h-[50px] sm:h-[60px]">
                    <BoltIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#DDD0DA] flex-shrink-0" />
                    <span className="text-[#333333] text-[14px] sm:text-[18px] font-normal leading-[150%] truncate">Business Model</span>
                  </div>
                </div>
                
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-[#571244] text-white font-medium rounded-md hover:bg-[#461036] transition-colors px-4 sm:px-6 py-2 sm:py-3 mt-4 sm:mt-6 w-full sm:w-auto"
                >
                  Learn More
                  <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}