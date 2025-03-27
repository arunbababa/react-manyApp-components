import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import useTimer from '@/hooks/useTimer';

// これめちゃくちゃ練習し甲斐がある
const Page: NextPage = () => {
  const { seconds, isActive, handleClickReset, handleClickToggle } = useTimer();

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
