import { useEffect, useState } from 'react';

const PROVERB_LIST = ['あるんばばば', 'フレッド', 'るんばばば'];
const RAMDOM_INDEX = Math.floor(Math.random() * PROVERB_LIST.length);

type useProverb = () => {
  A: string;
};

const useProverb: useProverb = () => {
  const [A, setA] = useState<string>('');
  useEffect(() => {
    setA(PROVERB_LIST[RAMDOM_INDEX]);
  }, []);
  return {
    A,
  };
};

export default useProverb;
