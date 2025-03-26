import React, { useState } from 'react';

type useSetFah = {
  fah: number;
  onChangeCelciusSetFah: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const useSetFah = (): useSetFah => {
  const [fah, setFah] = useState(0);

  const onChangeCelciusSetFah = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCelcius = Number(e.target.value);
    // setCelcius(newCelcius);
    setFah(newCelcius * 1.8 + 32);
  };

  return {
    fah,
    onChangeCelciusSetFah,
  };
};

export default useSetFah;
