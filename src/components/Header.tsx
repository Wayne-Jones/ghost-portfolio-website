'use client';
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { BiMenuAltRight } from 'react-icons/bi';
import { HiXMark } from 'react-icons/hi2';
import Link from 'next/link';
import DarkModeTrigger from './DarkModeTrigger';

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
    <header className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <nav className='flex w-full items-center justify-between py-6' aria-label='Navigation'>
        <Link href='/' className='uppercase text-2xl font-bold'>
          Wayne Jones
        </Link>
        <div className='hidden md:flex items-center gap-x-6 xl:gap-x-8'>
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className='text-base'>
              {item.name}
            </a>
          ))}
          <DarkModeTrigger />
        </div>
        <div className='flex md:hidden p-3'>
          <button
            type='button'
            className='-m-1.5 inline-flex items-center justify-center rounded-md p-1.5 '
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className='sr-only'>Open main menu</span>
            <BiMenuAltRight className='h-8 w-8' aria-hidden='true' />
          </button>
        </div>
      </nav>
      <Dialog as='div' className='md:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-4 sm:px-6 py-6 bg-white dark:bg-dark-gray'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='uppercase text-2xl font-bold'>
              Wayne Jones
            </Link>
            <div className='flex p-3'>
              <button
                data-autofocus
                className='-m-1.5 inline-flex items-center justify-center rounded-md p-1.5'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close mobile menu</span>
                <HiXMark className='h-8 w-8' aria-hidden='true' />
              </button>
            </div>
          </div>
          <div className=''>
            <div className='space-y-2 flex flex-col'>
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className='-mx-3 py-2 px-3 text-base'>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
