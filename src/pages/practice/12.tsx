import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import Button from '@/components/common/parts/Button';

// これめちゃくちゃ練習し甲斐がある
const Page: NextPage = () => {
  const [seconds, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // うわー！西本さんと同じ流れでここまでこれたのは嬉しい丁度同じtimeIDのスコープが違うのでいい感じにできぬ...(ある意味ないス)
  useEffect(() => {
    // NodeJS.Timeout：Node.js 環境で setInterval() が返す「タイマーIDの型」
    let interval: NodeJS.Timeout | undefined = undefined;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      // あぁあれかsecondsがゼロじゃないっていうのはスタートしてタイマーが例えば5秒の時とかをリセットしたいからか、んで0秒の時は別にリセットする必要ないからね
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleClickToggle = () => {
    setIsActive((prev) => !prev);
  };

  const handleClickReset = () => {
    setTime(0);
    setIsActive(false);
  };

  return (
    <>
      <div className="mx-auto max-w-4xl">
        <div className="mt-10 flex justify-center gap-x-8">
          <div className="">
            <h3 className="">時間:{seconds}</h3>
          </div>
          <div className="ml-10 flex gap-x-8">
            <Button
              variant="text"
              label={isActive ? 'ストップ' : 'スタート'}
              onClick={handleClickToggle}
            ></Button>
            <Button variant="text" label="リセット" onClick={handleClickReset}></Button>
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
