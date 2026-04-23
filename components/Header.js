'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, UserIcon } from '@heroicons/react/24/outline';

const navigationItems = [
  { name: 'About', hasDropdown: true },
  { name: 'What We Do', hasDropdown: true },
  { name: 'Jobs', hasDropdown: false },
  { name: 'Projects', hasDropdown: false },
  { name: 'TG Academy', hasDropdown: false },
  { name: 'Strategic Partnership', hasDropdown: false },
  { name: 'Pricing', hasDropdown: false },
];

const aboutDropdownItems = [
  { name: 'Our Story', href: '/' },
  { name: 'Our Mission', href: '/' },
  { name: 'Our Team', href: '/' },
  { name: 'Careers', href: '/' },
];

const whatWeDoDropdownItems = [
  { name: 'Training Programs', href: '/' },
  { name: 'Consulting', href: '/' },
  { name: 'Mentorship', href: '/' },
  { name: 'Research', href: '/' },
];

const accountDropdownItems = [
  { name: 'My Profile', href: '/' },
  { name: 'My Courses', href: '/' },
  { name: 'My Certificates', href: '/' },
  { name: 'Settings', href: '/' },
  { name: 'Logout', href: '/' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const aboutDropdownRef = useRef(null);
  const whatWeDoDropdownRef = useRef(null);
  const accountDropdownRef = useRef(null);

  const handleDropdownToggle = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const handleAccountDropdownToggle = () => {
    setAccountDropdownOpen(!accountDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        if (openDropdown === 'About') setOpenDropdown(null);
      }
      if (whatWeDoDropdownRef.current && !whatWeDoDropdownRef.current.contains(event.target)) {
        if (openDropdown === 'What We Do') setOpenDropdown(null);
      }
      if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target)) {
        setAccountDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-1">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo.png"
                alt="Tobams Group Logo"
                width={70}
                height={70}
                className="w-auto object-contain"
              />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative" ref={accountDropdownRef}>
              <button
                onClick={handleAccountDropdownToggle}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#571244] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#461036] focus:outline-none focus:ring-2 focus:ring-[#571244] focus:ring-offset-2 transition-colors"
                aria-expanded={accountDropdownOpen}
                aria-haspopup="true"
              >
                <div className="bg-[#DDD0DA] rounded-full p-1">
                  <UserIcon className="h-4 w-4 text-[#571244]" />
                </div>
                Account
                <ChevronDownIcon className={`h-4 w-4 transition-transform ${accountDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {accountDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="py-1">
                    {accountDropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-[#151515] hover:bg-gray-100 hover:text-[#571244] transition-colors"
                        onClick={() => setAccountDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-[#EF4353] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#d63a48] focus:outline-none focus:ring-2 focus:ring-[#EF4353] focus:ring-offset-2 transition-colors"
            >
              Take Assessment
            </Link>

            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black ml-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 w-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="hidden lg:block py-4" aria-label="Main navigation">
          <div className="flex items-center justify-center gap-x-8">
            {navigationItems.map((item) => {
              if (item.name === 'About' && item.hasDropdown) {
                return (
                  <div key={item.name} className="relative" ref={aboutDropdownRef}>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="inline-flex items-center gap-1 text-[18px] font-normal text-[#151515] hover:text-[#571244] transition-colors focus:outline-none focus:ring-2 focus:ring-[#571244] focus:ring-offset-2 rounded-md px-2 py-1"
                      aria-expanded={openDropdown === item.name}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDownIcon className={`h-4 w-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute left-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        <div className="py-1">
                          {aboutDropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-[#151515] hover:bg-gray-100 hover:text-[#571244] transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (item.name === 'What We Do' && item.hasDropdown) {
                return (
                  <div key={item.name} className="relative" ref={whatWeDoDropdownRef}>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="inline-flex items-center gap-1 text-[18px] font-normal text-[#151515] hover:text-[#571244] transition-colors focus:outline-none focus:ring-2 focus:ring-[#571244] focus:ring-offset-2 rounded-md px-2 py-1"
                      aria-expanded={openDropdown === item.name}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDownIcon className={`h-4 w-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute left-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        <div className="py-1">
                          {whatWeDoDropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-[#151515] hover:bg-gray-100 hover:text-[#571244] transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <div key={item.name} className="relative">
                  <Link
                    href="/"
                    className="text-[18px] font-normal text-[#151515] hover:text-[#571244] transition-colors focus:outline-none focus:ring-2 focus:ring-[#571244] focus:ring-offset-2 rounded-md px-2 py-1"
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 pb-6">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full text-[18px] font-normal text-[#151515] hover:text-[#571244] hover:bg-gray-50 rounded-md px-3 py-2 transition-colors"
                      >
                        {item.name}
                        <ChevronDownIcon className={`h-4 w-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.name && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-3">
                          {(item.name === 'About' ? aboutDropdownItems : whatWeDoDropdownItems).map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block text-[16px] font-normal text-[#151515] hover:text-[#571244] py-2 transition-colors"
                              onClick={() => {
                                setOpenDropdown(null);
                                setMobileMenuOpen(false);
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href="/"
                      className="block text-[18px] font-normal text-[#151515] hover:text-[#571244] hover:bg-gray-50 rounded-md px-3 py-2 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3 mt-2 border-t border-gray-200 space-y-2">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-[16px] font-normal text-[#151515] hover:text-[#571244] hover:bg-gray-50 rounded-md px-3 py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="bg-[#571244] rounded-full p-1">
                    <UserIcon className="h-4 w-4 text-white" />
                  </div>
                  My Profile
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-[16px] font-normal text-[#151515] hover:text-[#571244] hover:bg-gray-50 rounded-md px-3 py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="bg-[#EF4353] rounded-full p-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  Take Assessment
                </Link>
              </div>
              <div className="pt-2 space-y-1">
                <p className="text-xs font-semibold text-[#571244] px-3 py-1">Account Menu</p>
                {accountDropdownItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-[14px] font-normal text-[#151515] hover:text-[#571244] hover:bg-gray-50 rounded-md px-3 py-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}