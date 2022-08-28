import { useEffect } from 'react';

const useKeyPress = (keyArr: string[], action: (key: string) => any) => {
  useEffect(() => {
    const handleKey = ({ key }: KeyboardEvent) => {
      if (keyArr.includes(key) || keyArr.length === 0) action(key);
    };
    window.addEventListener('keyup', handleKey);
    return () => {
      window.removeEventListener('keyup', handleKey);
    };
  });
};

export default useKeyPress;
