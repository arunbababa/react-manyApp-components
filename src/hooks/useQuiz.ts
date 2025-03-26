import { useState } from 'react';

const CHOICE_LIST = ['ライブラリ', 'フレームワーク', 'データベース', '言語'];
const QUESTION = 'Reactはどのようなものですか?';
const CORRECT_ANSWER = 'ライブラリ';

type useQuiz = {
  QUESTION: string;
  CHOICE_LIST: [];
  userChoice: string;
  hadleUserChoice: () => void;
  onSubmitAnsewr: () => void;
  result: string;
};

const useQuiz = (): useQuiz => {
  const [userChoice, setUserChoice] = useState('');
  const hadleUserChoice = (CHOICE: string) => {
    setUserChoice(CHOICE);
  };

  const [result, setResult] = useState<string>();
  const onSubmitAnsewr = () => {
    if (userChoice == CORRECT_ANSWER) {
      setResult(() => '正解です！');
    } else {
      setResult('不正解です...');
    }
  };

  return {
    QUESTION,
    CHOICE_LIST,
    userChoice,
    hadleUserChoice,
    onSubmitAnsewr,
    result,
  };
};

export default useQuiz;
