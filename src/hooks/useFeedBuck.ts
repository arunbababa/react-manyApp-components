import { useState } from 'react';

type FeedBack = {
  id: string;
  date: string;
};

const useFeedBuck = () => {
  const [feedBacks, setFeedBacks] = useState<FeedBack[]>([]); // このstring<>ってなんだっけ？調べよう→
  const [inputValue, setInputValue] = useState('');
  const onSubmitFeedBuck = () => {
    if (inputValue.trim() === '') return;

    const newFeedback: FeedBack = {
      id: crypto.randomUUID(), // 一意なID（ブラウザが対応してればOK）
      date: inputValue,
    };

    setFeedBacks((prev) => [...prev, newFeedback]);
    setInputValue('');
  };

  return {
    feedBacks,
    inputValue,
    onSubmitFeedBuck,
    setInputValue,
  };
};

export default useFeedBuck;
