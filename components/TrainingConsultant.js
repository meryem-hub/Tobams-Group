// components/TrainingConsultant.js
'use client';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function TrainingConsultant() {
  return (
    <>
      <section className="w-full py-16 bg-gray-50">
        <div className="w-full">
          <div className="bg-[#5712441A] rounded-t-3xl p-6 sm:p-8 md:p-12">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-[#151515] text-[40px] font-semibold leading-[130%] tracking-normal mb-2">
                  Training The Consultant
                </h2>
                <p className="text-[#333333] text-[18px] font-semibold leading-[150%] tracking-normal">
                  Maximise Your Potential as a Certified Trainer:
                </p>
              </div>

              <p className="text-[#333333] text-[18px] font-normal leading-[150%] tracking-normal mb-8 sm:mb-10">
                With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
              </p>

              <div className="bg-[#571244] rounded-[8px] p-6 gap-5 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <h3 className="text-white text-[18px] font-semibold leading-[130%] mb-2">
                      Expert-Led Learning
                    </h3>
                    <p className="text-white/80 text-[18px] font-normal leading-[150%]">
                      Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-white text-[18px] font-semibold leading-[130%] mb-2">
                      Comprehensive Curriculum
                    </h3>
                    <p className="text-white/80 text-[18px] font-normal leading-[150%]">
                      Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-white text-[18px] font-semibold leading-[130%] mb-2">
                      Interactive Workshops
                    </h3>
                    <p className="text-white/80 text-[18px] font-normal leading-[150%]">
                      Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-white text-[18px] font-semibold leading-[130%] mb-2">
                      Global Recognition
                    </h3>
                    <p className="text-white/80 text-[18px] font-normal leading-[150%]">
                      You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-10 flex justify-center sm:justify-start">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-[#571244] text-white font-medium rounded-md hover:bg-[#461036] transition-colors px-6 py-3"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#571244] rounded-lg w-full max-w-[1134px] mx-auto h-[204px] gap-8 p-2 text-center flex flex-col items-center justify-center">
            <p className="text-white text-[20px] font-semibold leading-[150%] tracking-[3%] text-center">
              Want to accelerate professional growth and development at your organization?<br />
              See how we can help.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-white text-[#571244] font-medium rounded-md hover:bg-gray-100 transition-colors px-6 py-3"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}