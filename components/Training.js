// components/Training.js
'use client';

import Image from 'next/image';
import { BoltIcon } from '@heroicons/react/24/solid';

export default function Training() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Corporate Trainings - Image on Right */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <div className="lg:w-1/2">
            <h2 className="text-[#151515] text-3xl md:text-4xl font-bold mb-4">
              Corporate Trainings
            </h2>
            <p className="text-[#333333] text-base leading-relaxed mb-6">
              Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <BoltIcon className="w-4 h-4 text-[#571244]" />
                <span className="text-[#333333] text-base">Leadership Training</span>
              </li>
              <li className="flex items-center gap-2">
                <BoltIcon className="w-4 h-4 text-[#571244]" />
                <span className="text-[#333333] text-base">Strategic Planning and Implementation</span>
              </li>
              <li className="flex items-center gap-2">
                <BoltIcon className="w-4 h-4 text-[#571244]" />
                <span className="text-[#333333] text-base">Project Management</span>
              </li>
              <li className="flex items-center gap-2">
                <BoltIcon className="w-4 h-4 text-[#571244]" />
                <span className="text-[#333333] text-base">Sustainability Training</span>
              </li>
              <li className="flex items-center gap-2">
                <BoltIcon className="w-4 h-4 text-[#571244]" />
                <span className="text-[#333333] text-base">Customised Training</span>
              </li>
            </ul>
          </div>
          
          <div className="lg:w-1/2">
            <div className="rounded-tl-[56px] rounded-tr-[24px] rounded-br-[23px] rounded-bl-[12px] overflow-hidden">
              <Image
                src="/image1.png"
                alt="Corporate Training"
                width={602}
                height={346}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Personalised Individual Training  */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <div className="lg:w-1/2">
            <div className="rounded-tl-[56px] rounded-tr-[24px] rounded-br-[23px] rounded-bl-[12px] overflow-hidden">
              <Image
                src="/image2.png"
                alt="Personalised Individual Training"
                width={602}
                height={346}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-[#151515] text-3xl md:text-4xl font-bold mb-4">
              Personalised Individual Training
            </h2>
            <p className="text-[#333333] text-base leading-relaxed mb-6">
              Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <BoltIcon className="w-4 h-4 text-[#571244]" />
                <span className="text-[#333333] text-base">Leadership Development</span>
              </li>
              <li className="flex items-center gap-2">
                <BoltIcon className="w-4 h-4 text-[#571244]" />
                <span className="text-[#333333] text-base">Soft Skills Development</span>
              </li>
              <li className="flex items-center gap-2">
                <BoltIcon className="w-4 h-4 text-[#571244]" />
                <span className="text-[#333333] text-base">Industry Specific Knowledge</span>
              </li>
              <li className="flex items-center gap-2">
                <BoltIcon className="w-4 h-4 text-[#571244]" />
                <span className="text-[#333333] text-base">Technical Skills Enhancement</span>
              </li>
              <li className="flex items-center gap-2">
                <BoltIcon className="w-4 h-4 text-[#571244]" />
                <span className="text-[#333333] text-base">Time Management and Productivity</span>
              </li>
              <li className="flex items-center gap-2">
                <BoltIcon className="w-4 h-4 text-[#571244]" />
                <span className="text-[#333333] text-base">Career Development</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Capacity Development */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-[#151515] text-3xl md:text-4xl font-bold mb-4">
              Capacity Development
            </h2>
            <p className="text-[#333333] text-base leading-relaxed mb-6">
              At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <BoltIcon className="w-4 h-4 text-[#571244]" />
                <span className="text-[#333333] text-base">Tailored Training Programs</span>
              </li>
              <li className="flex items-center gap-2">
                <BoltIcon className="w-4 h-4 text-[#571244]" />
                <span className="text-[#333333] text-base">Expert-Led Workshops</span>
              </li>
              <li className="flex items-center gap-2">
                <BoltIcon className="w-4 h-4 text-[#571244]" />
                <span className="text-[#333333] text-base">Personalized Mentorship</span>
              </li>
              <li className="flex items-center gap-2">
                <BoltIcon className="w-4 h-4 text-[#571244]" />
                <span className="text-[#333333] text-base">Technical Skills Enhancement</span>
              </li>
              <li className="flex items-center gap-2">
                <BoltIcon className="w-4 h-4 text-[#571244]" />
                <span className="text-[#333333] text-base">Collaborative Learning Environment</span>
              </li>
              <li className="flex items-center gap-2">
                <BoltIcon className="w-4 h-4 text-[#571244]" />
                <span className="text-[#333333] text-base">Ongoing Support and Resources</span>
              </li>
            </ul>
          </div>
          
          <div className="lg:w-1/2">
            <div className="rounded-tl-[56px] rounded-tr-[24px] rounded-br-[23px] rounded-bl-[12px] overflow-hidden">
              <Image
                src="/image3.png"
                alt="Capacity Development"
                width={602}
                height={346}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}