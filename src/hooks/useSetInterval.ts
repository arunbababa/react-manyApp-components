import { useEffect, useState } from 'react';

type useSetInterval = () => {
  currenTime: Date;
};
const useSetInterval: useSetInterval = () => {
  const [currenTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timeID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timeID);
    };
  }, []);

  return {
    currenTime,
  };
};

export default useSetInterval;
