import { NextPage } from 'next';

import useSetFah from '@/hooks/useSetFah';

const Page: NextPage = () => {
  // まずセルシウスのinputをstateとして監視する
  // そのinputを使ってごにょごにょしてfahのpに設定する
  // そのためにfahのstate監視も必要
  // state２つで関数はセルシウスのinputに設定するonchangeのみでOK
  // const [celcius, setCelcius] = useState<number>(0);
  // OK以下自分、特に悩んだstate切歯はいらんやろ、そして編に詰まったsetstateの非同期

  const { fah, onChangeCelciusSetFah } = useSetFah();

  return (
    <>
      <div className="mx-auto max-w-4xl">
        <div className="flex justify-center">
          <div className="mb-3 flex items-center gap-x-3">
            <label htmlFor="celcius">摂氏温度:@C</label>
            <input id="celcius" type="number" onChange={onChangeCelciusSetFah} />
          </div>
          <p>華氏温度:{fah}@F</p>
        </div>
      </div>
      ;
    </>
  );
};

export default Page;
