import { useState } from 'react';
import React from 'react';

// 先にやったとき俺は以下の感じで関数の戻り値しか型付けしていない
// 西川さんは関数自体の片づけをし、関数であることともどりちの型付けをしていた、そっちをまぁとりあえず使うとのこと
type useInputValue = {
  inputValue: string;
  onChangeInput: (a: React.ChangeEvent<HTMLInputElement>) => void;
};

const useInputValue = (): useInputValue => {
  const [inputValue, setInputValue] = useState<string>('');
  const onChangeInput = (a: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(a.target.value);
  };

  // ちなこれあれねキーとバリューが同じ名前の時に省略できるやつね
  return { inputValue, onChangeInput };
};

export default useInputValue;
