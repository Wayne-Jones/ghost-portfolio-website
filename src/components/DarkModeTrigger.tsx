'use client';

import Button from '@/components/Button';
import { useTheme } from 'next-themes';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { VscBlank } from 'react-icons/vsc';
import { useEffect, useState } from 'react';

const DarkModeTrigger = () => {
  const { systemTheme, theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button text='' icon={<VscBlank className='w-6 h-6' />} />;
  }

  const currentTheme = theme === 'system' ? (resolvedTheme ?? systemTheme) : theme;

  const toggleTheme = (event: React.MouseEvent) => {
    if (currentTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <Button
      text=''
      icon={
        currentTheme !== 'dark' ? (
          <MdOutlineDarkMode className='w-6 h-6' />
        ) : (
          <MdOutlineLightMode className='w-6 h-6' />
        )
      }
      onClick={toggleTheme}
    />
  );
};

export default DarkModeTrigger;
