import { useState } from 'react';

import COLORS from '@/lib/data/colors';

type useCangeColor = {
  currentColorIndex: number;
  changeColor: () => void;
  color: string;
};

const useCangeColor = (): useCangeColor => {
  const [currentColorIndex, setCurrentColorIndex] = useState<number>(0);
  const changeColor = () => {
    setCurrentColorIndex((prev) => (prev + 1) % COLORS.length);
  };
  const color = COLORS[currentColorIndex];

  return {
    currentColorIndex,
    changeColor,
    color,
  };
};

export default useCangeColor;
