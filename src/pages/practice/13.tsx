import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useStarAPI } from '@/hooks/useStarAPI';

const Page: NextPage = () => {
  const { setID, character } = useStarAPI();
  return (
    <>
      <div className="mx-auto max-w-4xl">
        <div className="mt-10 flex justify-center gap-x-8">
          <div>
            <div>
              <h2>名前：{character?.name}</h2>
              <p>身長：{character?.height}</p>
              <p>体重：{character?.mass}</p>
              <p>髪の色：{character?.hair_color}</p>
              <p>肌の色：{character?.skin_color}</p>
              <p>目の色：{character?.eye_color}</p>
              <p>生年：{character?.birth_day}</p>
              <p>性別：{character?.gender}</p>
            </div>
            <div>
              <Button
                variant="text"
                label="次のキャラクター"
                onClick={() => setID((prev) => prev + 1)}
              ></Button>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Page;
