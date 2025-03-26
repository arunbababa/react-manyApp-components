import { useState } from 'react';

type useTextShowHidden = () => {
  isDisp: boolean;
  onClickNODisp: () => void;
  onClickYESDisp: () => void;
};

export const useTextShowHidden: useTextShowHidden = () => {
  const [isDisp, setIsDisp] = useState(true);
  const onClickNODisp = () => {
    setIsDisp(false);
  };
  const onClickYESDisp = () => {
    setIsDisp(true);
  };
  return {
    isDisp,
    onClickNODisp,
    onClickYESDisp,
  };
};
