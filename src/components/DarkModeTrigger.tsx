'use client';

import Button from '@/components/Button';
import { useTheme } from 'next-themes';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { VscBlank } from 'react-icons/vsc';

const DarkModeTrigger = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  if (!currentTheme) {
    return <Button text='' icon={<VscBlank className='w-6 h-6' />} />;
  }

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
