import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Page: NextPage = () => {
  const PROVERB_LIST = ['あるんばばば', 'フレッド', 'るんばばば'];
  const RAMDOM_INDEX = Math.floor(Math.random() * PROVERB_LIST.length);
  const [A, setA] = useState<string>('');
  useEffect(() => {
    setA(PROVERB_LIST[RAMDOM_INDEX]);
  }, []);

  return (
    <>
      <div className="mx-auto max-w-4xl">
        <div className="mt-10 flex justify-center">
          <h3>{A}</h3>
        </div>
      </div>
      ;
    </>
  );
};

export default Page;

// 再レンダリング時にランダムに名言が表示されるコンポーネント
// 適当に名言を複数用意しておく
// useEffectでやる まぁuseEffectでやらんでもできるが練習
