import Button from '@/components/Button';
import { useTheme } from 'next-themes';
// No React hooks needed
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { VscBlank } from 'react-icons/vsc';

const DarkModeTrigger = () => {
  const { systemTheme, theme, setTheme, resolvedTheme } = useTheme();
  // Determine current theme, falling back to system when appropriate
  const currentTheme = theme === 'system' ? (resolvedTheme ?? systemTheme) : theme;

  const toggleTheme = (event: React.MouseEvent, currentTheme: string | undefined) => {
    if (currentTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  // While the resolved theme is not yet available (client-side loading), render a placeholder icon
  if (!resolvedTheme) {
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
