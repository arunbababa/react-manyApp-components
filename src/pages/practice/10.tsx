import { NextPage } from 'next';

import useProverb from '../../hooks/useProverb';

const Page: NextPage = () => {
  const { A } = useProverb();

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
