'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[550px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero.jpg"
          alt="Training and development background"
          fill
          className="object-cover"
          priority
        />
        {/* Soft light black overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        {/* What We Do Badge */}
        <div className="flex justify-center mb-6">
          <Link
            href="/what-we-do"
            className="inline-flex items-center justify-center w-[193px] h-[45px] rounded-full bg-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/30 border border-white/30 px-12 py-3"
          >
            What We Do
          </Link>
        </div>

        {/* Main Title  */}
        <h1 className="text-white text-[56px] leading-[130%] font-bold text-center">
          Training and Development
        </h1>

        {/* Description Text  */}
        <div className="mt-6">
          <p className="text-white/90 text-lg  font-normal">
            Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers 
          </p>
          <p className="text-white/90 text-lg leading-[150%] max-w-3xl mx-auto font-normal">
            forward in today's ever-evolving landscape.
          </p>
        </div>

        {/* Book a Consultation Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center w-[214px] h-12 bg-[#571244] text-white font-medium rounded-[4px] hover:bg-[#461036] focus:outline-none focus:ring-2 focus:ring-[#571244] focus:ring-offset-2 px-6 py-3"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}