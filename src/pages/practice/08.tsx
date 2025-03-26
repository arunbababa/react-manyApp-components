import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import useQuiz from '@/hooks/useQuiz';

// 大まかな予想
// 各ボタンに対してユーザが選択したものstate管理し、onchangeで色を切り替えるロジックを実装する
// 最初は全ボタンの色状態をundifinedか何かで、その後set関数で選択したボタンの状態をonにするなど

// んで選択されているボタンのstateをもとに送信し、答えと一致するか関数で確認する？
// 同じなら正解、違うなら不正解とする
// なお正解と不正解のボタンの設定は最初にしておく

// type onSubmitAnsewr = {
//   result:string
// }

const Page: NextPage = () => {
  const { QUESTION, CHOICE_LIST, userChoice, hadleUserChoice, onSubmitAnsewr, result } = useQuiz();

  return (
    <>
      <div className="mx-auto max-w-4xl">
        <div className="flex justify-center">
          <div>
            <h3 className="mt-3 text-center text-2xl">{QUESTION}</h3>
            <div className="mt-4 flex justify-center gap-x-4">
              {CHOICE_LIST.map((CHOICE, index) => (
                <Button
                  label={CHOICE}
                  variant="secondary"
                  className={userChoice == CHOICE ? 'bg-black' : undefined}
                  key={index}
                  onClick={() => hadleUserChoice(CHOICE)}
                ></Button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <Button label="送信" variant="primary" onClick={onSubmitAnsewr} />
          </div>

          <h3 className="mt-8 text-center text-4xl">結果発表:{result}</h3>
        </div>
      </div>
      ;
    </>
  );
};

export default Page;
