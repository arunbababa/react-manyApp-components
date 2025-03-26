import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import Button from '@/components/common/parts/Button';

// これめちゃくちゃ練習し甲斐がある
const Page: NextPage = () => {
  const [time, setTime] = useState(0);
  const [timerState, settimerState] = useState(true);
  const handleTimer = () => {
    settimerState((prev) => !prev);
  };
  useEffect(() => {
    if (timerState === true) {
      setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  }, [timerState]);
  const onResetTimer = () => {};

  return (
    <>
      <div className="mx-auto max-w-4xl">
        <div className="mt-10 flex justify-center gap-x-8">
          <div className="">
            <h3 className="">時間:{time}</h3>
          </div>
          <div className="ml-10 flex gap-x-8">
            <Button
              variant="text"
              label={timerState ? 'スタート' : 'ストップ'}
              onClick={handleTimer}
            ></Button>
            <Button variant="text" label="リセット" onClick={onResetTimer}></Button>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Page;

// 機能
// スタートボタン↔ストップボタン
// スタートボタンを押すと時間がカウントアップされる なお一秒ごとでOK
// ストップボタンを押すと時間が止まる
// リセットボタンを押すと時間がリセットされる

// state管理するのは次の者
// 時間
// スタート↔ストップの切り替え

// んースタートかストップ化の状態を依存配列として、それに応じた処理をeffectに書けばいいかな
