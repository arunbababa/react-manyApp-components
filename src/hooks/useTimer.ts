import { useEffect, useState } from 'react';

type useTimer = () => {
  seconds: number;
  isActive: boolean;
  handleClickToggle: () => void;
  handleClickReset: () => void;
};

const useTimer: useTimer = () => {
  const [seconds, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // うわー！西本さんと同じ流れでここまでこれたのは嬉しい丁度同じtimeIDのスコープが違うのでいい感じにできぬ...(ある意味ないス)
  useEffect(() => {
    // NodeJS.Timeout：Node.js 環境で setInterval() が返す「タイマーIDの型」、もしくは初回レンダリング用の型定義でundefined、なお= undefinedとするのは初期値として明治して読みやすくしている感じ
    let interval: NodeJS.Timeout | undefined = undefined;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      // あぁあれかsecondsがゼロじゃないっていうのはスタートしてタイマーが例えば5秒の時とかに押してストップしたいからかclearintervalで足し算を止めることができるのだ、んで0秒の時は別にストップする必要ないからねだからseconds !== 0としている
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

  return {
    seconds,
    isActive,
    handleClickToggle,
    handleClickReset,
  };
};

export default useTimer;
