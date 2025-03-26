import { NextPage } from 'next';

import useSetInterval from '@/hooks/useSetInterval';
const Page: NextPage = () => {
  const { currenTime } = useSetInterval();

  return (
    <>
      <div className="mx-auto max-w-4xl">
        <div className="flex justify-center">
          {/* 以下の変換なぜ必要調べろ */}
          <h3 className="text-center text-2xl">{currenTime.toLocaleTimeString()}</h3>
        </div>
      </div>
      ;
    </>
  );
};

export default Page;
