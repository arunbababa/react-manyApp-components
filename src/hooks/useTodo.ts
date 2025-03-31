import { useState } from 'react';

const useTodo = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [memos, setMemos] = useState<string[]>([]);

  const handleMemos = () => {
    if (!inputValue) {
      alert('なんか入れようぜ');
    }
    setMemos((prev) => [...prev, inputValue]);
    setInputValue('');
  };

  const deleteMemo = (index: number) => {
    setMemos((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    inputValue,
    memos,
    deleteMemo,
    setInputValue,
    handleMemos,
  };
};

export default useTodo;
