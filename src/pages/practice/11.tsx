import { NextPage } from 'next';

import { useCycle } from '@/hooks/useCycle';

// これめちゃくちゃ練習し甲斐がある
const Page: NextPage = () => {
  const { light } = useCycle();

  return (
    <>
      <div className="mx-auto max-w-4xl">
        <div className="mt-10 flex justify-center gap-x-8">
          <div
            className={`size-12 rounded-full bg-gray-700 ${light === 'red' ? 'bg-red-700' : 'bg-gray-700'}`}
          ></div>
          <div
            className={`size-12 rounded-full bg-gray-700 ${light === 'green' ? 'bg-green-700' : 'bg-gray-700'} `}
          ></div>
          <div
            className={`size-12 rounded-full bg-gray-700 ${light === 'yellow' ? 'bg-yellow-500' : 'bg-gray-700'}`}
          ></div>
        </div>
      </div>
      ;
    </>
  );
};

export default Page;

// まずボタン３つ分用意して丸めて背景色をグレイで設定する
// んで一秒立つごとに各ボタンに対して信号の色をそれぞれ切り替えて設定しておく
// 個のロジックは普通にuseeffectでsetintervalでやって１秒ごとにインデックスをタス1してその色とそのボタンに対してclassnameを更新していけばいいかな
// いやー背景色を動的に変えるのわからんから見ますくそ
