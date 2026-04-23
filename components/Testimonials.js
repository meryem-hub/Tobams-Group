// components/Testimonials.js
'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export default function Testimonials() {
  const scrollContainerRef = useRef(null);

  const testimonials = [
    {
      name: 'Aisha Yusuf',
      title: 'Founder, CraftHub NG',
      text: 'Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!',
      image: '/profile1.png'
    },
    {
      name: 'John Davies',
      title: 'Marketing Manager, E-Commerce Emporium',
      text: 'Tobams Group\'s Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!',
      image: '/profile2.png'
    },
    {
      name: 'Chinonso Nwankwo',
      title: 'HR Director, FutureTech Solutions',
      text: 'Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.',
      image: '/profile3.png'
    },
    {
      name: 'Michael Brown',
      title: 'CTO, Innovate Labs',
      text: 'Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward. Exceptional service and support that exceeded our expectations.',
      image: '/profile4.png'
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -428, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 428, behavior: 'smooth' });
    }
  };

  const threeCardsWidth = 1314;

  return (
    <section className="w-full py-16 bg-[#C4C4C44D]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#151515] text-[40px] font-bold leading-[130%] tracking-normal text-center mb-12">
          Testimonials
        </h2>
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[422px] h-[244px] rounded-[16px] p-5 gap-6 border-l-2 border-[#EF4353] bg-white shadow-md"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-[44px] h-[44px] rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-[#151515] text-[16px] font-semibold leading-[150%] tracking-normal">
                    {testimonial.name}
                  </h3>
                  <p className="text-[#571244] text-[12px] font-medium leading-[150%] tracking-normal">
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <p className="text-[#333333] text-[18px] font-normal leading-[150%] tracking-normal">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons - aligned with the end edge of the 3rd card */}
        <div className="flex justify-end gap-3 mt-6" style={{ maxWidth: `${threeCardsWidth}px` }}>
          <button
            onClick={scrollLeft}
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F043541A] hover:bg-[#F0435433] transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="w-5 h-5 text-[#EF4353]" />
          </button>
          <button
            onClick={scrollRight}
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F043541A] hover:bg-[#F0435433] transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="w-5 h-5 text-[#EF4353]" />
          </button>
        </div>
      </div>

      <style jsx>{`
        div[style*="scrollbar-width"]::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}