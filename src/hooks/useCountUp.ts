import { useState } from 'react';

type useCountUp = () => {
  count: number;
  onClickCount: () => void;
};

export const useCountUp: useCountUp = () => {
  const [count, setCount] = useState(0);
  const onClickCount = () => {
    setCount((prev) => prev + 1);
  };

  return {
    count,
    onClickCount,
  };
};
