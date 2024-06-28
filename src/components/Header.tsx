'use client';
import { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import Link from 'next/link';
import DarkModeTrigger from '@/components/DarkModeTrigger';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Photography', href: '/photography' },
  { name: 'Blog', href: '/blog' }
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6'>
      <nav className='flex w-full items-center justify-between ' aria-label='Navigation'>
        <Link href='/' className='uppercase text-2xl font-bold'>
          Wayne Jones
        </Link>
        <div className='hidden md:flex items-center gap-x-6 xl:gap-x-8 text-base'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='hover:underline hover:underline-offset-4'
            >
              {item.name}
            </Link>
          ))}
          <DarkModeTrigger />
        </div>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <button
            className='md:hidden'
            aria-expanded={mobileMenuOpen}
            aria-controls='mobile-menu'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className='sr-only'>Toggle Mobile Navigation</span>
            <BiMenuAltRight className='h-8 w-8' aria-hidden='true' />
          </button>
        </SheetTrigger>
        <SheetContent
          side='right'
          className='md:hidden'
          id='mobile-menu'
          aria-hidden={!mobileMenuOpen}
        >
          <SheetTitle className='sr-only'>Navigation Menu</SheetTitle>
          <SheetDescription className='sr-only'>
            Access the main navigation menu on mobile devices.
          </SheetDescription>
          <nav className='grid gap-4 p-6 text-lg font-medium'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='hover:underline hover:underline-offset-4'
              >
                {item.name}
              </Link>
            ))}
            <DarkModeTrigger />
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
