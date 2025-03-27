import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import Button from '@/components/common/parts/Button';

type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_day: string;
  gender: string;
};

// これめちゃくちゃ練習し甲斐がある
const Page: NextPage = () => {
  const [ID, setID] = useState(1);
  const [character, setcharacter] = useState<Character | null>(null);
  useEffect(() => {
    const fetchDate = async () => {
      const res = await fetch(`https://swapi.dev/api/people/${ID}`);
      console.log(res);
      const date = (await res.json()) as Character;
      setcharacter(date);
    };

    void fetchDate();
  }, [ID]);

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
