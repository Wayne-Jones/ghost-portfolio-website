import Button from '@/components/Button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { VscBlank } from 'react-icons/vsc';

const DarkModeTrigger = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const toggleTheme = (event: React.MouseEvent, currentTheme: string | undefined) => {
    if (currentTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) {
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
      onClick={(e) => toggleTheme(e, currentTheme)}
    />
  );
};

export default DarkModeTrigger;
