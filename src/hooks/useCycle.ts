import { useEffect, useState } from 'react';

// as const にすることで次のようになる
// const CYCLE: {
//   readonly red: 'green';
//   readonly green: 'yellow';
//   readonly yellow: 'red';
// }
// こうすることでCYCLEの型情報をカチっとしてくれるだけ、別にred,green,yellow以外も入れらるよ怒られるかもしれないけど
const CYCLE = { red: 'green', green: 'yellow', yellow: 'red' } as const;
type useCycle = () => {
  light: keyof typeof CYCLE;
};

export const useCycle: useCycle = () => {
  const [light, setlight] = useState<keyof typeof CYCLE>('red');

  useEffect(() => {
    const timeID = setTimeout(() => {
      const nextLight = CYCLE[light];
      setlight(nextLight);
      console.log('再レンダリング');
    }, 1000);

    // 以下無くてもまぁ正常、ていうのは別に再レンダリングされてもそのたびにconst timeIDが更新される（あれでもconstなのに更新?あぁコード全体の再実行だから変数の再宣言ではないから普通にOKなのか）
    // でもまぁ合った方が安心というかまぁ変なバグ踏まずに済む
    return () => clearTimeout(timeID);
  }, [light]);
  return {
    light,
  };
};
